import axios from "axios";

const HM_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // =========================
  // 회원 관련
  // =========================

  // 아이디 중복 확인
  memberExist: async (userId) =>
    axios.get(HM_DOMAIN + `/auth/exists/id/${userId}`),

  // 이메일 중복 확인
  emailExist: async (email) => axios.get(HM_DOMAIN + `/auth/exists/${email}`),

  // 회원가입
  memberSignup: async (userId, pwd, name, phone, email) =>
    axios.post(HM_DOMAIN + "/auth/signup", {
      userId,
      name,
      phone,
      email,
      pwd,
    }),

  // 로그인
  memberLogin: async (userId, pwd) =>
    axios.post(HM_DOMAIN + "/auth/login", {
      userId,
      pwd,
    }),

  // 마이페이지 회원정보 조회
  getMypage: (memberId) => axios.get(`${HM_DOMAIN}/auth/mypage/${memberId}`),
  // =========================
  // 게시판 관련
  // =========================

  boardWrite: async (title, content, email) =>
    axios.post(HM_DOMAIN + "/board/write", {
      title,
      content,
      email,
    }),

  boardList: async () => axios.get(HM_DOMAIN + "/board/list"),

  boardDetail: async (id) => axios.get(HM_DOMAIN + `/board/${id}`),

  // =========================
  // 공연 관련
  // =========================

  getAllConcerts: async () => axios.get(`${HM_DOMAIN}/concerts`),

  getReservationDetail: async (concertId) =>
    axios.get(`${HM_DOMAIN}/concerts/${concertId}`),

  // =========================
  // 회원 목록
  // =========================

  memberList: async () => axios.get(HM_DOMAIN + "/member/list"),

  // =========================
  // 예매 관련
  // =========================

  createReservation: async (reservationData) =>
    axios.post(HM_DOMAIN + "/reservations", reservationData),

  getReservation: async (reservationId) =>
    axios.get(HM_DOMAIN + `/reservations/${reservationId}`),

  // =========================
  // 공연 회차 관련
  // =========================

  getSchedules: async (concertId) =>
    axios.get(`${HM_DOMAIN}/concerts/${concertId}/schedules`),

  createSchedule: async (concertId, scheduleData) =>
    axios.post(HM_DOMAIN + `/concerts/${concertId}/schedules`, scheduleData),

  // =========================
  // 좌석 관련
  // =========================

  createSeats: async (scheduleId, seatNumbers) =>
    axios.post(HM_DOMAIN + `/seats/demo/${scheduleId}`, seatNumbers),

  getRemainingSeats: async (scheduleId) =>
    axios.get(HM_DOMAIN + `/seats/${scheduleId}/remaining`),

  getSeats: async (scheduleId) => axios.get(HM_DOMAIN + `/seats/${scheduleId}`),
};

export default AxiosApi;
