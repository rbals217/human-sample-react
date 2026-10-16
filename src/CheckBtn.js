import { useState } from "react";

// 좋아하는 차량 선택하기: 체크박스 (여러 개 선택 가능)

const CheckBox = () => {
  const cars = ["그랜저", "산타페", "제네시스", "코나", "투산"];

  // 선택된 값이 여러 개이므로 배열 state
  const [checkCars, setCheckCars] = useState([]);

  // 개별 체크박스가 바뀔 때 실행할 함수
  const onChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckCars([...checkCars, value]); // 체크 → 배열에 추가
    } else {
      setCheckCars(checkCars.filter((car) => car !== value)); // 해제 → 배열에서 제거
    }
  }; // ← 빠져 있던 부분

  // 전체 선택 여부: 선택된 개수와 전체 개수가 같으면 true
  const isAllChecked = checkCars.length === cars.length;

  // 전체 선택 체크박스가 바뀔 때 실행할 함수
  const onChangeAll = (e) => {
    setCheckCars(e.target.checked ? [...cars] : []);
  };

  return (
    <>
      <p>체크박스</p>

      {/* 전체 선택 */}
      <label style={{ marginRight: "12px" }}>
        <input type="checkbox" checked={isAllChecked} onChange={onChangeAll} />
        전체 선택
      </label>

      {cars.map((car) => (
        <label key={car} style={{ marginRight: "12px" }}>
          <input
            type="checkbox"
            value={car}
            checked={checkCars.includes(car)}
            onChange={onChange}
          />
          {car}
        </label>
      ))}
      <h3>
        {checkCars.length > 0
          ? `선택한 차량: ${checkCars.join(", ")}`
          : "차량을 선택하세요."}
      </h3>
    </>
  );
};

export default CheckBox;
