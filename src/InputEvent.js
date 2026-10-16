// 이름
// 비밀번호
// 나이
// 주소
// 이메일을 입력 받기
// 전부 입력 완료 되었을 때 확인 버튼 누르면 입력 받은 결과를 출력 하기

import { useState } from "react";

const InputEvent = () => {
  // 입력값마다 useState() 선언
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  // 확인 버튼을 눌렀을 때 결과 출력
  const [result, setResult] = useState(null);

  // 입력값마다 onChange 핸들러 따로 작성
  const onChangeName = (e) => setName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeAge = (e) => setAge(e.target.value);
  const onChangeAddress = (e) => setAddress(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

  // 모든 값이 입력되었는지 확인 (공백만 입력한 경우도 미입력 처리)
  const isAllFilled =
    name.trim() !== "" &&
    password.trim() !== "" &&
    age.trim() !== "" &&
    address.trim() !== "" &&
    email.trim() !== "";

  // 확인 버튼 클릭
  const onSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 새로 고침 방지

    if (!isAllFilled) {
      alert("모든 항목을 입력 해주세요.");
      return;
    }

    // 확인을 누른 시점의 값을 저장
    setResult({ name, password, age, address, email });
  };

  // 초기화 버튼 클릭
  const onReset = () => {
    setName("");
    setPassword("");
    setAge("");
    setAddress("");
    setEmail("");
    setResult(null);
  };

  return (
    <>
      <p>입력 연습 (각각의 useState)</p>

      <form onSubmit={onSubmit}>
        <div>
          <label>
            이름 :{" "}
            <input value={name} onChange={onChangeName} placeholder="이름" />
          </label>
        </div>
        <div>
          <label>
            비밀번호 :{" "}
            <input
              type="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호"
            />
          </label>
        </div>
        <div>
          <label>
            나이 :{" "}
            <input
              type="number"
              value={age}
              onChange={onChangeAge}
              placeholder="나이"
              min="0"
            />
          </label>
        </div>
        <div>
          <label>
            주소 :{" "}
            <input
              value={address}
              onChange={onChangeAddress}
              placeholder="주소"
            />
          </label>
        </div>
        <div>
          <label>
            이메일 :{" "}
            <input
              type="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="example@email.com"
            />
          </label>
        </div>

        {/* 전부 입력해야 확인 버튼 활성화 */}
        <button type="submit" disabled={!isAllFilled}>
          확인
        </button>
        <button type="button" onClick={onReset}>
          초기화
        </button>
      </form>

      {/* 결과 출력 */}
      {result && (
        <div>
          <h3>입력 결과</h3>
          <p>이름 : {result.name}</p>
          <p>비밀번호 : {"*".repeat(result.password.length)}</p>
          <p>나이 : {result.age}</p>
          <p>주소 : {result.address}</p>
          <p>이메일 : {result.email}</p>
        </div>
      )}
    </>
  );
};

export default InputEvent;
