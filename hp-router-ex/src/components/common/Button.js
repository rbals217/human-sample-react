import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  background-color: orangered;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }

  & + & {
    margin-top: 10px;
  }
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
