import { useState } from "react";

// 운전하고 싶은 차량 선택하기: 라디오 버튼
// 라디오 버튼은 여러 개 중에 단 한 개만 선택하는 것

const RadioBtn = () => {
  const cars = ["그랜저", "산타페", "제네시스", "코나", "투산"];

  // 선택된 값은 하나이므로 state 한 개로 관리
  const [selectedCar, setSelectedCar] = useState("");

  return (
    <>
      <p>라디오 버튼</p>
      {cars.map((car) => (
        <label key={car} style={{ marginRight: "12px" }}>
          <input
            type="radio"
            name="car"
            value={car}
            checked={selectedCar === car}
            onChange={(e) => setSelectedCar(e.target.value)}
          />
          {car}
        </label>
      ))}
      <h3>
        {selectedCar
          ? `선택한 차량: ${selectedCar}`
          : "운전하고 싶은 차량을 선택하세요."}
      </h3>
    </>
  );
};

export default RadioBtn;
