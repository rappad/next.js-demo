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
  display: fixed;
  width: 100vw;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
`;

const Header = () => (
  <HeaderWrapper>
    <Link prefetch href="/" as="/nextjs-demo">
      <Title>Home</Title>
    </Link>
    <Link prefetch href="/about" as="/nextjs-demo/about">
      <Title>About</Title>
    </Link>
    <Link prefetch href="/contact" as="/nextjs-demo/contact">
      <Title>Contact</Title>
    </Link>
  </HeaderWrapper>
);

export default Header;
