import "./App.css";
import Article from "./Article";
import Board from "./Board";


const data = [
  {
    id: 1,
    title: "React 시작하기",
    content: "React의 기본 개념을 알아봅니다.",
    name: "홍길동",
    regDate: "2026-10-01",
  },
  {
    id: 2,
    title: "컴포넌트란?",
    content: "UI를 재사용 가능한 조각으로 나누는 방법입니다.",
    name: "김영희",
    regDate: "2026-10-02",
  },
  {
    id: 3,
    title: "Props 이해하기",
    content: "부모에서 자식으로 데이터를 전달합니다.",
    name: "이철수",
    regDate: "2026-10-03",
  },
  {
    id: 4,
    title: "State 사용법",
    content: "useState로 컴포넌트 상태를 관리합니다.",
    name: "박민수",
    regDate: "2026-10-05",
  },
  {
    id: 5,
    title: "이벤트 처리",
    content: "onClick, onChange 이벤트를 다뤄봅니다.",
    name: "최지은",
    regDate: "2026-10-06",
  },
  {
    id: 6,
    title: "조건부 렌더링",
    content: "삼항 연산자와 && 연산자를 활용합니다.",
    name: "정하늘",
    regDate: "2026-10-08",
  },
  {
    id: 7,
    title: "리스트와 key",
    content: "map()으로 목록을 렌더링할 때 key가 필요합니다.",
    name: "강서준",
    regDate: "2026-10-09",
  },
  {
    id: 8,
    title: "useEffect 기초",
    content: "컴포넌트가 렌더링된 후 작업을 실행합니다.",
    name: "윤아름",
    regDate: "2026-10-11",
  },
  {
    id: 9,
    title: "폼 다루기",
    content: "입력값을 state와 연결하는 제어 컴포넌트입니다.",
    name: "한도윤",
    regDate: "2026-10-13",
  },
  {
    id: 10,
    title: "라우팅 입문",
    content: "React Router로 페이지를 나눠봅니다.",
    name: "오세린",
    regDate: "2026-10-15",
  },
];

function App() {
  return (
 //화면 그려주는 공간
 <>{posts && posts.map((e) = > <Board key ={e,id} post ={e} />)} </>
  );
}

export default App;
