import { useState } from "react";

const Count = () => {
  // const [number, setNumber] = useState(0);
  const [flag, setflag] = useState(false);
  let number = 0;

  const numInc = () => {
    number++;
    console.log(number);
    setflag(!flag);
  };
  const numDec = () => {
    number--;
    console.log(number);
    setflag(!flag);
  };
  return (
    <>
      <h3>현재 카운트는{number}</h3>
      <button onClick={numInc}> 증가</button>
      <button onClick={numDec}> 감소</button>
    </>
  );
};

export default Count;
