import React from "react";
import styled from "styled-components";

const ScreenWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 600px;
  border: 1px solid #000000;
  border-radius: 12px;
  padding: 40px 30px;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
// 등록 버튼 스타일
const RegisterButton = styled.button`
  width: 100%;
  max-width: 360px;
  height: 55px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const PaymentRegisterPage = () => {
  const handleAccountRegister = () => {
    alert("계좌 등록 페이지로 이동합니다.");
  };

  const handleCardRegister = () => {
    alert("카드 등록 페이지로 이동합니다.");
  };

  return (
    <ScreenWrapper>
      <Container>
        <RegisterButton onClick={handleAccountRegister}>
          계좌 등록하기
        </RegisterButton>
        <RegisterButton onClick={handleCardRegister}>
          카드 등록하기
        </RegisterButton>
      </Container>
    </ScreenWrapper>
  );
};

export default PaymentRegisterPage;
