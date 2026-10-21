import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("id", id);
    localStorage.setItem("pwd", pwd);

    navigate("/login");
  };

  return (
    <div className="signup-box">
      <div className="title">SignUp Page</div>
      <div className="signup-title">
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
