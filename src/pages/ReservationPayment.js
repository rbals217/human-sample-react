import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/common/Button";
import BottomBar from "../Components/common/BottomBar";
import AxiosApi from "../api/AxiosApi";
import AxiosInstance from "../api/AxiosInstance";
/* ───────── 스타일 컴포넌트 ───────── */
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 20px 100px;
  box-sizing: border-box;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionBox = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 8px 0;
    border-bottom: 2px solid #f1f5f9;
    padding-bottom: 8px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #475569;

  span:last-child {
    font-weight: 600;
    color: #0f172a;
  }
`;

const TotalPriceRow = styled(InfoRow)`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px dashed #e2e8f0;

  span:last-child {
    color: #c327eb;
  }
`;

/* ───────── 메인 컴포넌트 ───────── */
const ReservationPayment = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // 이전 페이지(좌석 선택)에서 전달받은 데이터
  const { reservation } = location.state || {};

  const date = reservation?.concertDate;
  const concertTime = reservation?.concertTime?.slice(0, 5);
  const seats = reservation?.seats || [];
  const totalAmount = reservation?.price || 0;

  // 결제 완료 버튼 클릭 시
  // 결제하기 버튼 클릭
  // 결제하기 버튼 클릭

  const handlePaymentSubmit = () => {
    // 로그인 여부 확인
    const isLogin = localStorage.getItem("isLogin") === "TRUE";

    if (!isLogin) {
      alert("로그인 정보가 없습니다. 로그인해주세요.");
      navigate("/login");
      return;
    }

    // 예매 ID 확인
    const reservationId = Number(reservation?.reservationId ?? id);

    if (!Number.isInteger(reservationId) || reservationId <= 0) {
      alert("예매 정보를 확인할 수 없습니다.");
      return;
    }

    // 토스 결제 페이지로 이동
    navigate(`/payment/widget?reservationId=${reservationId}`, {
      state: {
        reservation,
      },
    });
  };
  return (
    <Container>
      {/* 1. 예매 정보 요약 박스 */}
      <SectionBox>
        <h3>예매 정보 확인</h3>
        <InfoRow>
          <span>상품 번호</span>
          <span>상품 {reservation?.concertId ?? "-"}</span>
        </InfoRow>
        <InfoRow>
          <span>관람 일시</span>
          <span>
            {date} ( {concertTime} )
          </span>
        </InfoRow>
        <InfoRow>
          <span>선택 좌석</span>
          <span>{seats && seats.join(", ")}</span>
        </InfoRow>
      </SectionBox>

      {/* 2. 결제 금액 박스 */}
      <SectionBox>
        <h3>결제 금액</h3>
        <InfoRow>
          <span>티켓 금액 ({seats ? seats.length : 0}매)</span>
          <span>{totalAmount.toLocaleString()}원</span>
        </InfoRow>
        <InfoRow>
          <span>할인 금액</span>
          <span>0원</span>
        </InfoRow>
        <TotalPriceRow>
          <span>총 결제 금액</span>
          <span>{totalAmount.toLocaleString()}원</span>
        </TotalPriceRow>
      </SectionBox>

      {/* 하단 공통 결제 버튼 */}
      <BottomBar>
        <div>
          <Button enabled={true} onClick={handlePaymentSubmit}>
            {totalAmount.toLocaleString()}원 결제하기
          </Button>
        </div>
      </BottomBar>
    </Container>
  );
};

export default ReservationPayment;
