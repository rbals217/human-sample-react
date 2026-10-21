import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState(() => localStorage.getItem("id") || "");
  const [pwd, setPwd] = useState(() => localStorage.getItem("pwd") || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedId = localStorage.getItem("id");
    const savedPwd = localStorage.getItem("pwd");

    if (savedId === id && savedPwd === pwd) {
      navigate("/home");
    } else {
      alert("ID 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
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
        </form>
      </div>
    </div>
  );
}
