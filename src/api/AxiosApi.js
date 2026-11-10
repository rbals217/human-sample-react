import AxiosInstance from "./AxiosInstance";
const HM_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 회원 관련

  // 아이디 중복 확인
  memberExist: async (userId) =>
    AxiosInstance.get(HM_DOMAIN + `/auth/exists/id/${userId}`),

  // 이메일 중복 확인
  emailExist: async (email) =>
    AxiosInstance.get(HM_DOMAIN + `/auth/exists/${email}`),

  // 회원 가입 (POST)
  memberSignup: async (email, pwd, name) => {
    return await AxiosInstance.post("/auth/signup", {
      email,
      pwd,
      name,
    });
  },
  memberLogin: async (userId, pwd) =>
    AxiosInstance.post(HM_DOMAIN + "/auth/login", {
      userId,
      pwd,
    }),

  // 마이페이지 회원정보 조회
  getMypage: (memberId) =>
    AxiosInstance.get(`${HM_DOMAIN}/auth/mypage/${memberId}`),

  // 게시판 관련
  boardWrite: async (title, content, email) =>
    AxiosInstance.post(HM_DOMAIN + "/board/write", {
      title,
      content,
      email,
    }),

  boardList: async () => AxiosInstance.get(HM_DOMAIN + "/board/list"),

  boardDetail: async (id) => AxiosInstance.get(HM_DOMAIN + `/board/${id}`),

  memberList: async () => AxiosInstance.get(HM_DOMAIN + "/member/list"),

  // 예매 생성
  createReservation: async (reservationData) =>
    AxiosInstance.post(HM_DOMAIN + "/reservations", reservationData),
  // 예매 상세 조회
  getReservation: async (reservationId) =>
    AxiosInstance.get(HM_DOMAIN + `/reservations/${reservationId}`),

  // 공연 회차 관련
  getSchedules: async (concertId) =>
    AxiosInstance.get(HM_DOMAIN + `/concerts/${concertId}/schedules`),
  //공연 회차 등록
  createSchedule: async (concertId, scheduleData) =>
    AxiosInstance.post(
      HM_DOMAIN + `/concerts/${concertId}/schedules`,
      scheduleData,
    ),

  // 좌석 관련
  createSeats: async (scheduleId, seatNumbers) =>
    AxiosInstance.post(HM_DOMAIN + `/seats/demo/${scheduleId}`, seatNumbers),
  // 회차별 잔여 좌석 수 조회
  getRemainingSeats: async (scheduleId) =>
    AxiosInstance.get(HM_DOMAIN + `/seats/${scheduleId}/remaining`),
  //회차별 좌석 목록조회
  getSeats: async (scheduleId) =>
    AxiosInstance.get(HM_DOMAIN + `/seats/${scheduleId}`),

  // 💡 [추가] ReservationDetail.js 에러를 해결하기 위한 별칭 함수 추가
  getReservationDetail: async (reservationId) =>
    AxiosInstance.get(HM_DOMAIN + `/reservations/${reservationId}`),

  // 💡 [추가] 콘서트(상품) 상세 정보 조회
  getConcertDetail: async (concertId) =>
    AxiosInstance.get(HM_DOMAIN + `/concerts/${concertId}`),

  // 💡 [추가] 전체 콘서트 목록 조회 (AllConcertMenu.js 에러 해결용)
  getAllConcerts: async () => AxiosInstance.get(HM_DOMAIN + "/concerts"),
};

export default AxiosApi;
