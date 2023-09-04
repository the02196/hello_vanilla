import React from "react";
import { styled } from "styled-components";

function Nav() {
  const NavWrap = styled.div`
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
  `;

  
  const LogoText = styled.span`
    font-family: "Monofett", monospace;
    font-size: 50px;
    color: whitesmoke;
    display: inline-block;
    cursor: pointer;
    margin-top: 40px;
    margin-left: 30px;
  `;
  
  const ProfileImg = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-image: url("../images/nav/profile_img.png");
    background-size: cover;
    margin-top: 30px;
    margin-right: 30px;
    cursor: pointer;
  `
    const WelcomeText = styled.span`
    font-family: 'Inter', sans-serif;
    display: inline-block;
    font-size: 30px;
    color: white;
    background-color: transparent;
    position: absolute;
    bottom: 20px;
    right: 50px; 
    `

  return (
    <>
      <NavWrap>
        <LogoText>Hello Vanilla</LogoText>
        <ProfileImg />
        <WelcomeText>안녕하세요, 여행자 <code>#love5820</code> 님!</WelcomeText>
      </NavWrap>
    </>
  );
}

export default Nav;
