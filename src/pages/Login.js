import AxiosApi from "../api/AxiosApi";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await AxiosApi.memberLogin(id, pwd);
      console.log(res.data);

      if (res.data === true) {
        localStorage.setItem("email", id);
        navigate("/home");
      } else {
        alert("ID 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch (err) {
      console.error(err);
      alert("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="title">Login Page</div>
        <div className="login-title">
          <form onSubmit={handleSubmit}>
            <p>ID</p>
            <input
              type="text"
              id="id"
              placeholder="Email Address"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
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
            <br />
            <button type="submit" className="button">
              Login
            </button>
            <br />
            <Link to="/SignUp">Register</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
