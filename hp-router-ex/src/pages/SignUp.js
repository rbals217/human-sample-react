import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";

/* ───────── 정규식 ───────── */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PWD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
const NAME_REGEX = /^[가-힣a-zA-Z]{2,10}$/;

export default function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  const isEmail = EMAIL_REGEX.test(id);
  const isPwd = PWD_REGEX.test(pwd);
  const isName = NAME_REGEX.test(name);
  // const [emailCheck, setEmailCheck] = useState(null);
  // const [checkedEmail, setCheckedEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmail) {
      alert("이메일 형식이 올바르지 않아요.");
      return;
    }
    if (!isPwd) {
      alert(
        "비밀번호는 8~20자, 영문+숫자+특수문자(!@#$%^&*)를 각각 1개 이상 포함해야 해요.",
      );
      return;
    }
    if (!isName) {
      alert("이름은 한글 또는 영문 2~10자로 입력해 주세요.");
      return;
    }

    try {
      const res = await AxiosApi.memberSignUp(id, pwd, name);
      console.log(res.data);
      if (res.data === true) {
        alert(`${name}님, 회원가입이 성공했습니다.`);
        navigate("/login", { replace: true });
      } else {
        alert("회원가입에 실패했습니다. 입력 정보를 확인해 주세요.");
      }
    } catch (err) {
      console.error(err);
      alert("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="Signup-page">
      <div className="Signup-box">
        <div className="title">SignUp Page</div>
        <div className="Signup-title">
          <form onSubmit={handleSubmit}>
            <p>ID (Email)</p>
            <input
              type="text"
              id="id"
              placeholder="Email Address"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            {id && (
              <p
                style={{
                  color: isEmail ? "green" : "red",
                  fontSize: "12px",
                  textAlign: "right",
                }}
              >
                {isEmail
                  ? "사용가능한 이메일입니다."
                  : "이메일 형식이 올바르지 않습니다."}
              </p>
            )}
            <br />
            <p>비밀번호</p>
            <input
              type="password"
              id="pwd"
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
            />
            {pwd && (
              <p
                style={{
                  color: isPwd ? "green" : "red",
                  fontSize: "12px",
                  textAlign: "right",
                }}
              >
                {isPwd
                  ? "사용가능한 비밀번호입니다."
                  : "8~20자, 영문+숫자+특수문자(!@#$%^&*)를 각각 1개 이상 포함해야 합니다."}
              </p>
            )}
            <br />
            <p>이름</p>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {name && (
              <p
                style={{
                  color: isName ? "green" : "red",
                  fontSize: "12px",
                  textAlign: "right",
                }}
              >
                {isName
                  ? "사용가능한 이름입니다."
                  : "한글 또는 영문 2~10자로 입력해 주세요."}
              </p>
            )}
            <br />
            <button type="submit" className="button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
