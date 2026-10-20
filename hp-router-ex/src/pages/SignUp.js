import styled from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  width: 500px;
  margin: 10px auto;
  flex-direction: column;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  margin: 10px auto;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0 0 12px;
  text-align: center;
  font-size: 1rem;
`;

function Signup() {
  const [form, setForm] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Container>
      <Form>
        <Title>회원가입</Title>

        <Input
          label="이메일"
          type="email"
          name="email"
          placeholder="example@email.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Button type="submit">가입하기</Button>
      </Form>
    </Container>
  );
}

export default Signup;
