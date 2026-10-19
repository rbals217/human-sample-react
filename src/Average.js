import { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중");
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b); // a+ b + c 라면 a+b를 한다음 a, b를 소모하고 유희왕같은거 for문을 안쓰는것도 클로드한테물어보기
  // for문을 안쓰고 reduce를 씀
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onInsert = () => {
    const nextList = [...list, parseInt(number)];
    setList(nextList);
    setNumber("");
  };
  return (
    <>
      <label>
        정수입력{""}
        <input value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list && list.map((e, index) => <li key={index}>{e}</li>)}
        <p> 평균값: {getAverage(list)}</p>
      </ul>
    </>
  );
};

export default Average;
