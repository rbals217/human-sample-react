import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  max-width: 500px;
  min-height: 600px;
  border: 1px solid #000000;
  padding: 40px 30px;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 3. 결제수단 목록 영역
const MethodListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 4. 개별 결제수단 아이템 박스
const MethodItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #ffffff;
`;

// 5. 주 거래 설정 별표 버튼
const StarButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.$isPrimary ? "#d8ff4d" : "#ccc")};
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.9);
  }
`;

// 6. 카드/계좌 아이콘 박스
const CardIcon = styled.div`
  width: 50px;
  height: 35px;
  border: 1px solid #000000;
  border-radius: 6px;
  background-color: #fafafa;
`;

// 7. 텍스트 정보 영역
const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: #333333;
  }

  .number {
    font-size: 13px;
    color: #666666;
  }
`;

// 8. 결제수단 추가하기 버튼 (+ 버튼)
const AddButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #e6f4f8;
  border: 1px solid #bce0ed;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #0066cc;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d4eff6;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const PaymentManagePage = () => {
  const navigate = useNavigate();

  // 결제수단 목록 상태 (어떤 것이 주 거래인지 관리)
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, name: "토스뱅크", number: "100-00-00**-**0", isPrimary: false },
    { id: 2, name: "토스뱅크", number: "100-00-00**-**0", isPrimary: false },
    { id: 3, name: "토스뱅크", number: "100-00-00**-**0", isPrimary: true },
  ]);

  // 주 거래 카드 설정 함수 (클릭한 항목만 true로 변경)
  const handleSetPrimary = (id) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isPrimary: method.id === id,
      })),
    );
  };

  // 결제수단 추가 페이지로 이동하는 함수
  const handleNavigateToAdd = () => {
    navigate("/payment-register");
  };

  return (
    <ScreenWrapper>
      <Container>
        {/* 결제수단 목록 */}
        <MethodListWrapper>
          {paymentMethods.map((method) => (
            <MethodItem key={method.id}>
              {/* 별표 아이콘 (클릭 시 주 거래 설정) */}
              <StarButton
                onClick={() => handleSetPrimary(method.id)}
                $isPrimary={method.isPrimary}
                title="주 거래 설정"
              >
                ★
              </StarButton>

              <CardIcon />

              <InfoArea>
                <span className="title">{method.name}</span>
                <span className="number">{method.number}</span>
              </InfoArea>
            </MethodItem>
          ))}
        </MethodListWrapper>

        {/* 결제수단 추가하기 버튼 */}
        <AddButton onClick={handleNavigateToAdd}>+ 결제수단 추가하기</AddButton>
      </Container>
    </ScreenWrapper>
  );
};

export default PaymentManagePage;
