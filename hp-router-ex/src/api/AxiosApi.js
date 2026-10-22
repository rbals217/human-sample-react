import axios from "axios"; //\비동기 통신 라이브러리
const HM_DOMAIN = "https://localhost:8111";

const AxiosApi = {
  // auth controller
  // 회원 가입 여부 (get)
  memberExist : async(email) => {
    return await axios.get(HM_DOMAIN + `/auth/exists/${email}`)
  },
  // 회원 가입 (post)
  memberSignUp:async (email,pwd, name) => {
    return await axios.post(HM_DOMAIN + "/auth/signup",{email,pwd,name});
  }
  // 로그인  (post)
  memberLogin:async (email,pwd) => {
    return await axios.post(HM_DOMAIN +"/auth/login",{email,pwd});
  }
  //--------------------------------//
  //board controller
  // 게시글 쓰기 (post)
  //게시글 전체 목록 조회 (get)
  // 게시글 상세 조회
  // 게시글 페이지 조회
  //게시글 수정
  //게시글 삭제
  //게시글 검색
  //---------------------------------//
  //comment controller
  //댓글 쓰기
  //댓글 목록 조회
  //댓글수정
  //댓글 삭제
  //---------------------------------//
  //member controller
  //회원 목록 조회
  //회원 정보 수정
  //회원 목록 조회 수정
};

export default AxiosApi;
