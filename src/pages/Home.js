import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CustomCalendar from "../Components/common/CustomCalendar";
import AxiosApi from "../api/AxiosApi";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ProductSection = styled.div`
  position: relative;
  width: 100%;
  margin-top: 35px;
`;

const ViewAllLink = styled(Link)`
  position: absolute;
  top: -45px;
  right: 0px;
  font-size: 14px;
  font-weight: 600;
  color: #475569;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: #1e293b;
    text-decoration: underline;
  }
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    margin: 0;
    font-size: 15px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #777;
  }
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
`;

const FilterBox = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;

  h4 {
    margin: 0 0 5px 0;
    font-size: 15px;
    color: #333;
  }
`;

const KeywordButton = styled.button`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: ${({ $active }) => ($active ? "#333" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #eee;
  }
`;

// 날짜별 공연 목록 영역
const DateConcertSection = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  h3 {
    margin: 0 0 20px;
    font-size: 20px;
    color: #333;
  }
`;

const DateConcertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 18px;
`;

const DateConcertCard = styled.div`
  display: flex;
  gap: 15px;
  padding: 14px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const DatePoster = styled.div`
  width: 100px;
  min-width: 100px;
  height: 135px;
  background: #f0f0f0;
  border-radius: 7px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DateConcertInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  min-width: 0;

  h4 {
    margin: 0;
    font-size: 15px;
    color: #333;
    overflow-wrap: anywhere;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #777;
  }
`;

const ShowTimeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const ShowTime = styled.span`
  padding: 5px 8px;
  background: #f3e8ff;
  color: #9333ea;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 600;
`;

const EmptyMessage = styled.p`
  text-align: center;
  padding: 30px 0;
  color: #888;
  font-size: 14px;
`;

const Home = () => {
  const navigate = useNavigate();

  const [concertList, setConcertList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // 캘린더에서 선택한 날짜
  const [selectedDate, setSelectedDate] = useState("");

  // 선택한 날짜에 공연하는 목록
  const [dateConcerts, setDateConcerts] = useState([]);

  // 날짜별 공연 조회 상태
  const [dateLoading, setDateLoading] = useState(false);
  const [dateError, setDateError] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("인기 추천");

  const keywords = ["인기 추천", "신규 등록", "오픈 예정", "마감 임박"];

  // 1. 처음 페이지 켤 때 전체 콘서트 데이터 가져오기
  useEffect(() => {
    const fetchHomeConcerts = async () => {
      try {
        const response = await AxiosApi.getAllConcerts();
        const data = Array.isArray(response.data) ? response.data : [];

        setConcertList(data);
        setFilteredProducts(data.slice(0, 4));
      } catch (error) {
        console.error("홈 화면 콘서트 목록 불러오기 실패:", error);
      }
    };

    fetchHomeConcerts();
  }, []);

  // 2. 상단 공연 4개 필터링
  useEffect(() => {
    if (concertList.length === 0) return;

    let result = [...concertList];

    if (selectedFilter === "인기 추천") {
      result = result.sort((a, b) => b.id - a.id);
    } else if (selectedFilter === "신규 등록") {
      result = result.slice().reverse();
    } else if (selectedFilter === "마감 임박") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (selectedFilter === "오픈 예정") {
      result = result.slice(5, 9);
    }

    setFilteredProducts(result.slice(0, 4));
  }, [selectedFilter, concertList]);

  // 3. 날짜를 선택하면 해당 날짜의 공연 목록 조회
  useEffect(() => {
    if (!selectedDate) {
      setDateConcerts([]);
      return;
    }

    let isActive = true;

    const fetchConcertsByDate = async () => {
      try {
        setDateLoading(true);
        setDateError("");
        setDateConcerts([]);

        const response = await AxiosApi.getConcertsByDate(selectedDate);

        if (isActive) {
          const data = Array.isArray(response.data) ? response.data : [];
          setDateConcerts(data);
        }
      } catch (error) {
        console.error("날짜별 공연 조회 실패:", error);

        if (isActive) {
          setDateConcerts([]);
          setDateError("공연 목록을 불러오지 못했습니다.");
        }
      } finally {
        if (isActive) {
          setDateLoading(false);
        }
      }
    };

    fetchConcertsByDate();

    return () => {
      isActive = false;
    };
  }, [selectedDate]);

  // 공연 상세 페이지 이동
  const handleCardClick = (id) => {
    navigate(`/reservation/detail/${id}`);
  };

  // 캘린더 날짜 선택
  const handleDateSelect = (formattedDate) => {
    setSelectedDate(formattedDate);
  };

  // LocalTime 형식 "11:00:00"을 "11:00"으로 표시
  const formatShowTime = (time) => {
    return time ? time.substring(0, 5) : "";
  };

  return (
    <ContentWrapper>
      {/* 상단 인기 공연 영역 */}
      <ProductSection>
        <ViewAllLink to="/concertlist">상품 전체보기 &gt;</ViewAllLink>

        <TopSection>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((concert) => (
              <ProductCard
                key={concert.id}
                onClick={() => handleCardClick(concert.id)}
              >
                <div
                  style={{
                    height: "70px",
                    background: "#f0f0f0",
                    borderRadius: "6px",
                    overflow: "hidden",
                  }}
                >
                  {concert.posterUrl ? (
                    <img
                      src={concert.posterUrl}
                      alt={concert.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        color: "#888",
                        fontSize: "11px",
                      }}
                    >
                      이미지 준비중
                    </div>
                  )}
                </div>

                <h3>{concert.title}</h3>
                <p>{concert.location || "공연장 정보 없음"}</p>

                <span
                  style={{
                    fontSize: "12px",
                    color: "#c327eb",
                    fontWeight: "bold",
                  }}
                >
                  예약하기 &gt;
                </span>
              </ProductCard>
            ))
          ) : (
            <p>데이터를 불러오는 중입니다...</p>
          )}
        </TopSection>
      </ProductSection>

      {/* 캘린더 및 필터 영역 */}
      <BottomSection>
        <CustomCalendar onDateSelect={handleDateSelect} />

        <FilterBox>
          <h4>필터 버튼 키워드</h4>

          {keywords.map((keyword, index) => (
            <KeywordButton
              key={index}
              $active={selectedFilter === keyword}
              onClick={() => setSelectedFilter(keyword)}
            >
              {keyword}
            </KeywordButton>
          ))}
        </FilterBox>
      </BottomSection>

      {/* 선택한 날짜의 공연 목록 */}
      {selectedDate && (
        <DateConcertSection>
          <h3>{selectedDate} 공연 목록</h3>

          {dateLoading ? (
            <EmptyMessage>공연 목록을 불러오는 중입니다...</EmptyMessage>
          ) : dateError ? (
            <EmptyMessage>{dateError}</EmptyMessage>
          ) : dateConcerts.length > 0 ? (
            <DateConcertGrid>
              {dateConcerts.map((concert) => (
                <DateConcertCard
                  key={concert.concertId}
                  onClick={() => handleCardClick(concert.concertId)}
                >
                  <DatePoster>
                    {concert.posterUrl ? (
                      <img src={concert.posterUrl} alt={concert.title} />
                    ) : (
                      <div
                        style={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#888",
                          fontSize: "11px",
                        }}
                      >
                        이미지 준비중
                      </div>
                    )}
                  </DatePoster>

                  <DateConcertInfo>
                    <h4>{concert.title}</h4>

                    <p>{concert.location || "공연장 정보 없음"}</p>

                    <ShowTimeList>
                      {concert.concertTimes?.map((time, index) => (
                        <ShowTime key={index}>{formatShowTime(time)}</ShowTime>
                      ))}
                    </ShowTimeList>
                  </DateConcertInfo>
                </DateConcertCard>
              ))}
            </DateConcertGrid>
          ) : (
            <EmptyMessage>선택한 날짜에 등록된 공연이 없습니다.</EmptyMessage>
          )}
        </DateConcertSection>
      )}
    </ContentWrapper>
  );
};

export default Home;
