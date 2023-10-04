import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Avatar from "../pages/Avatar";

function Nav({ userState }) {
  const [nickName, SetNickName] = useState("");
  const uid = sessionStorage.getItem("users");
  const NavWrap = styled.div`
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
  `;

  const LogoText = styled.span`
    a {
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
  `;

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
  `;
  const TextWrap = styled.span`
    margin-top: 47px;
    margin-right: 30px;
    div {
      display: flex;
      align-items: center;
      span {
        font-size: 17px;
        color: white;
        &:nth-child(3) {
          font-weight: 400;
          font-size: 13px;
        }
        a {
          font-size: 17px;
          color: white;
          &:visited {
            color: white;
          }
        }
      }
    }
  `;

  const WelcomeText = styled.span`
    font-family: "Inter", sans-serif;
    display: inline-block;
    font-size: 30px;
    color: white;
    background-color: transparent;
    @media screen and (max-width: 1920px) {
      font-size: 27px;
    }
  `;

  const FetchNickName = async () => {
    const userRef = doc(getFirestore(), "users", userState.uid);
    const userSnapshot = await getDoc(userRef);
    const userNickname = userSnapshot.data().nickname;
    SetNickName(userNickname);
  };

  useEffect(() => {
    if (!userState.uid) {
      return;
    } else {
      FetchNickName();
    }
  }, [userState.uid]);

  return (
    <>
      <NavWrap>
        <LogoText>
          <NavLink to={"/main"}>Hello Vanilla</NavLink>
        </LogoText>
        <TextWrap>
          <div>
          <span>
            <NavLink to={"/quick"}>퀵 링크 &nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
          </span>
          <span>
            <NavLink to={userState?.data ? "/logout" : "/login"}>
              {userState?.data ? "로그아웃" : "로그인"}
            </NavLink>
          </span>
          <span>&nbsp; | &nbsp;</span>
          <span style={userState?.data && {marginRight: "30px"}}>
            <NavLink to={userState?.data ? "/modify" : "/member"}>
              {userState?.data ? "정보수정" : "회원가입"}
            </NavLink>
          </span>
          <span>
            {userState?.data && <Avatar />}
          </span>
          </div>
        </TextWrap>
        {/* <ProfileImg /> */}
        <WelcomeTextWrap>
          <WelcomeText>안녕하세요, {nickName} 여행자님!</WelcomeText>
        </WelcomeTextWrap>
      </NavWrap>
    </>
  );
}

export default Nav;
