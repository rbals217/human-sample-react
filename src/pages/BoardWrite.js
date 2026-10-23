import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 24px;
`;

// 공통 Input과 같은 느낌의 여러 줄 입력창
const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  min-height: 300px;
  padding: 1em;
  font-size: 15px;
  font-family: inherit;
  border: 1px solid #999;
  border-radius: 18px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: orange;
  }
`;

const BtnRow = styled.div`
  display: flex;
  gap: 10px;
`;

const CancelBtn = styled.button`
  width: 100%;
  height: 50px;
  color: white;
  background-color: #999;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 18px;
  cursor: pointer;
`;
