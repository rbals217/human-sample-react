// src/pages/mypage/MyPageMain.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; // styled-components 임포트

const MyPageMain = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>계정 관리</SectionTitle>
        <StyledLink to="/mypage/account">계정 정보</StyledLink>
        <StyledLink to="/mypage/customer-center">고객센터</StyledLink>
      </Section>

      <Section>
        <SectionTitle>예약 내역</SectionTitle>
        <StyledLink to="/mypage/reservations">예약 내역 보기</StyledLink>
      </Section>

      <Section>
        <SectionTitle>찜 목록</SectionTitle>
        <StyledLink to="/mypage/wishlist">찜 목록 보기</StyledLink>
      </Section>

      <Section>
        <SectionTitle>리뷰 관리</SectionTitle>
        <StyledLink to="/mypage/reviews">내가 쓴 리뷰</StyledLink>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 100px auto;
  padding: 60px;
  padding-left: 80px;
  padding-right: 80px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2);
`;

const Section = styled.div`
  margin-bottom: 24px;
`;
// 부제목 스타일
const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 10px;
  display: inline-block;
  background-color: #f9f9f9;
`;

// Link 컴포넌트에 스타일
const StyledLink = styled(Link)`
  display: block;
  padding: 16px 20px;
  background-color: white;
  color: #000;
  text-decoration: none;
  border-radius: 10px;
  font-size: 15px;
  border: 1px solid #bce6e6;
  box-shadow: 0px 0px 1px 1px gray;
  margin-top: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d8f6ff;
  }
`;

export default MyPageMain;
