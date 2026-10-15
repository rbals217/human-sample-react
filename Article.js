// 기사제목
// 내용
// 작성일
// 작성자
// props로 전달 받아 표시하기
// 기본값 설정 ,구조 분해 사용

const Article = ({data}) => {
  return (
    <>
    <h2>제목 : {data.title}</h2>
    <p>내용 : {data.content}</p>
    <p>작성자: {data.writer}</p>
    <p>날짜 : {data.date}</p>
    </>
  );
};

export default Article;
