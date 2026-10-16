// props : 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터 propertis

// 함수형 컴포넌트 생성: 화살표 함수
// props: 객체로 이루어져 있음 (키, 밸류  구성된 속성들 묶인게 properties(props))
// 구조 분해 // 비 구조화 할당:  {}
// 기본값 인자 사용 ( 값이 없으면 대체)
const WelcomeProp = ({
  name = "없음",
  gender = "F",
  age = 0,
  addr = "서울",
}) => {
  // const {name, gender, age, addr} =props; // 변수를 상수안에 할당하면  구조 분해 (혹은 위에 props에 변수를 할당하면 비구조화 )
  return (
    <>
      <h3> 이름: {name}</h3>
      <p>성별: {gender}</p>
      <p>나이: {age}</p>
      <p>주소: {addr}</p>
    </>
  );
};

export default WelcomeProp;
