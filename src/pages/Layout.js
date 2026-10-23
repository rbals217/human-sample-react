import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  height: 100vh;
  margin: 10px auto;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 10px;
  height: 20px;
  background-color: bisque;
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  padding: 10px;
  height: 20px;
  background-color: cyan;
`;

const Layout = () => {
  return (
    <Container>
      <Header>여기는 헤더 영역 입니다.</Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>여기는 푸터 영역 입니다.</Footer>
    </Container>
  );
};

export default Layout;
