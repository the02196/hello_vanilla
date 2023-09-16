import React from "react";
import { NavLink } from "react-router-dom";
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
    font-size: 40px;
    color: whitesmoke;
    display: inline-block;
    cursor: pointer;
    margin-top: 40px;
    margin-left: 30px;
    @media screen and (max-width: 1920px) {
          font-size: 32px;
      }
  `;
  
  const ProfileImg = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-image: url("../images/nav/profile_img.png");
    background-size: cover;
    margin-top: 30px;
    margin-right: 30px;
    cursor: pointer;
  `
  
    const WelcomeTextWrap = styled.div`
      width: 1810px;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      margin: 0 auto;
      @media screen and (max-width: 1920px) {
          width: 1430px;
      }
    `
    const TextWrap = styled.span`
      margin-top: 40px;
      margin-right: 30px;
      span{
        font-size: 20px;
      color: white;
      font-weight: 500;
       &:nth-child(3){
        font-weight: 400;
        font-size: 14px;
       }
       a{
        font-size: 20px;
        color: white;
        font-weight: 500;
        &:visited{
          color:white;
        }
       }
      }
    `


    const WelcomeText = styled.span`
    font-family: 'Inter', sans-serif;
    display: inline-block;
    font-size: 30px;
    color: white;
    background-color: transparent;
    @media screen and (max-width: 1920px) {
          font-size: 27px;
      }
    `

  return (
    <>
      <NavWrap>
        <LogoText>Hello Vanilla</LogoText>
        <TextWrap>
        <span><NavLink to={"/quick"}>퀵링크 &nbsp;&nbsp;&nbsp;&nbsp;</NavLink></span><span>로그인</span><span> &nbsp; | &nbsp;  </span><span><NavLink to={"/login"}>회원가입</NavLink></span>
        </TextWrap>
        {/* <ProfileImg /> */}
        <WelcomeTextWrap><WelcomeText>안녕하세요, 여행자님!</WelcomeText></WelcomeTextWrap>
      </NavWrap>
    </>
  );
}

export default Nav;
