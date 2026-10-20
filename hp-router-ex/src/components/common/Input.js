import { useState } from "react";
import Input from "./Input";

function Signup() {
  const [form, setForm] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Input
      label="이메일"
      type="email"
      name="email"
      placeholder="example@email.com"
      value={form.email}
      onChange={handleChange}
      error={errors.email}
    />
  );
}

export default Signup;
