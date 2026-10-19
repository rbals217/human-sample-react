import { useState, useEffect } from "react"; // 상태관리, 생명 주기 관리

// 이름, 닉네임, 주소를 입력받아 출력 :useState사용
// useEffet가 언제 호출되는지 확인 해보기 :같이함

const Infomation = () => {
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const [nickname, setNickName] = useState("");

  useEffect(() => {
    console.log("랜더링 완료 이후 호출 !!!!");
    console.log({ name, nickname, addr });
  }, []);

  return (
    <>
      <label>
        이름
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>{" "}
      <br />
      <label>
        닉네임{" "}
        <input value={nickname} onChange={(e) => setNickName(e.target.value)} />
      </label>{" "}
      <br />
      <label>
        주소 <input value={addr} onChange={(e) => setAddr(e.target.value)} />
      </label>{" "}
      <br />
      <div>
        <p>이름 : {name}</p>
        <p>닉네임 : {nickname}</p>
        <p> 주소 : {addr}</p>
      </div>
    </>
  );
};
export default Infomation;
