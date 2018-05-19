import Link from "next/link";
import styled from "styled-components";

const Title = styled.p`
  color: paleturquoise;
  font-size: 18px;
  margin: 0 1.3rem;
  padding: 1rem 0;
  display: inline-block;
  cursor: pointer;
  :hover {
    text-shadow: 1px 1px 7px black;
  }
`;
const HeaderWrapper = styled.div`
  background-color: palevioletred;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
`;

const Header = () => (
  <HeaderWrapper>
    <Link href="/">
      <Title>Home</Title>
    </Link>
    <Link href="/about">
      <Title>About</Title>
    </Link>
    <Link href="/contact">
      <Title>Contact</Title>
    </Link>
  </HeaderWrapper>
);

export default Header;