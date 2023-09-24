import React, { useEffect, useState } from "react";
import VendingMachine from "../components/VendingMachine";
import { styled } from "styled-components";
import Eye from "../components/Eye";
import MovingBall from "../components/MovingBall";
import Dog from "../components/Dog";
import SolarSystem from "../components/SolarSystem";
import Nav from "../components/Nav";
import TrueOrFalse from "../components/TrueOrFalse";
import Footer from "../components/Footer";
import Walk from "../components/Walk";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { firebaseAuth } from "../firebase";
import { Firestore } from "firebase/firestore";

function Main() {

  const [work_VendingMachine, setWork_VendingMachine] = useState(false);


  const MainWrap = styled.div`
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    filter: grayscale(0.6) contrast(0.95) brightness(1.05);
  `;
  const MainBottomWrap = styled.div`
    width: 100%;
    height: 1280px;
    position: relative;
    background-size: cover;
    background-image: url("../images/main/main_bottom_background.avif");
    background-repeat: no-repeat;
    background-position: center;
  `;
  const MainTopWrap = styled.div`
    display: flex;
    padding: 400px 50px 0;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 10px;
    background-size: contain;
    position: relative;
    background-image: url("../images/main/main_top_background.avif");
    justify-content: center;
  `;

  const AboutWrap = styled.div`
      width: 1780px;
      height: 30px;
      padding: 10px 20px;
      position: absolute;
      background-color: black;
      top: 200px;
      left: 50%;
      border: 1px solid lightblue;
      display: flex;
      justify-content: space-between;
      transform: translateX(-50%);
      z-index: 100;
      @media screen and (max-width: 1920px){
        width: 1400px;
      }
  `
  const AboutContent = styled.div`
      line-height: 30px;
      font-size: 18px;
      font-weight: 400;
      color: white;
      a{
         color: white;
      }
      &:nth-child(2){
        font-size: 15px;
        color: lightgray;
        font-weight: 600;
      }
      @media screen and (max-width: 1920px){
        font-size: 15px;
      }
      img {
        width: 20px; 
        vertical-align: middle; 
        height: 20px; 
        margin: 0px 10px 4px 10px;
      }
  `
  
  const MiniBoxWrap = styled.div`
    width: 1810px;
    display: flex;
    justify-content: space-between;
    div {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        width: 445px;
        height: 445px;
        margin: 0;
      }
      &:nth-child(2) {
        background-image: url("../images/main/dog_foots.png");
      }
      &:nth-child(3) {
        background-image: url("../images/main/dummy_background.avif");
      }
    }
    @media screen and (max-width: 1920px) {
      width: 1430px;
      div {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        width: 350px;
        height: 350px;
        margin: 0;
      }
    }
  }
  `;


  const TestBox = styled.div`
    width: 900px;
    height: 450px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 300;
    background-color: #fff;
    transition: 0.5s;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    filter: contrast(0.9);
    &:hover {
      z-index: 500;
      transform: scale(1.03);
      filter: contrast(1);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    }
    &:nth-child(1) {
      background-image: url("../images/main/TFbackground.png");
      filter: brightness(1.15) contrast(1);
      &:hover {
        filter: brightness(1.25) contrast(1);
      }
    }
    &:nth-child(2) {
      background-image: url("../images/main/solar_system_background.avif");
    }
    &:nth-child(3) {
      background-image: url("../images/main/eye_background.avif");
    }
    &:nth-child(4) {
      background-color: #edf9ed;
    }
    &:nth-child(5) {
      width: 1810px;
      height: 300px;
      background-color: #f3fefd;
      a{
        &:visited{
          color: black;
        }
      }
    }
    &:nth-child(6) {
      width: 1810px;
      flex-wrap: wrap;
      height: 450px;
    }
    @media screen and (max-width: 1920px) {
      width: 710px;
      height: 370px;
      &:nth-child(5) {
        width: 1430px;
        height: 280px;
        background-color: #f3fefd;
      }
      &:nth-child(6) {
        width: 1430px;
        flex-wrap: wrap;
        height: 360px;
      }
    }
  `;

  const WhiteGradientToTop = styled.div`
    width: 120vw;
    height: 1000px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(251, 251, 251, 0.9) 50%,
      transparent 100%
    );
    transform: translateX(-5%);
    position: absolute;
    bottom: 0;
  `;
  const WhiteGradientToBottom = styled.div`
    width: 100%;
    height: 500px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(251, 251, 251, 0.5) 30%,
      transparent 100%
    );
    position: absolute;
    transform: rotate(180deg);
    top: 0;
  `;

  const GrayFloor = styled.div`
    flex-basis: 12.5%;
    height: 50%;
    background-color: #473f51;
    position: relative;
  `;
  const WhiteFloor = styled.div`
    flex-basis: 12.5%;
    height: 50%;
    background-color: #fef7eb;
    position: relative;
  `;
  const TestBoxTitle = styled.p`
    font-size: 33px;
    position: absolute;
    font-weight: 600;
    top: 40px;
    left: 40px;
    font-family: "Inter", sans-serif;
    &.box_sixth_default{
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
    @media screen and (max-width: 1920px) {
      font-size: 30px;
      &.box_sixth_1920{
        font-size: 24px !important;
      }
    }
    
  `;

  const TestBoxDesc = styled.p`
    font-size: 13px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    font-family: "Inter", sans-serif;
    color: white;
    &.desc_seventh_default {
      left: 450px;
    }
    @media screen and (max-width: 1920px) {
      &.desc_seventh_1920{
        left: 320px;
      }
      &.box_sixth_1920{
        left: 6.3% !important;
      }
    }
  `;

  const TestBoxCode = styled.p`
    font-size: 12px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-weight: 600;
    color: rgb(44, 44, 44);
    z-index: 200;
  `;

 const VeryEasy = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px 20px;
    background-color: purple;
    z-index: 500;
    font-size: 15px;
    color: white;
 `

  const Easy = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px 20px;
    background-color: black;
    color: white;
    z-index: 500;
    font-size: 15px;
    box-sizing: border-box;
  `

  const Normal = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px 20px;
    background-color: #515151;
    color: white;
    z-index: 500;
    font-size: 15px;
    box-sizing: border-box;
  `

  const Hard = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px 20px;
    background-color: white;
    color: black;
    z-index: 500;
    font-size: 15px;
    font-weight: 500;
    box-sizing: border-box;
  `
function PutSixthTestBox(){
  return(
    <>
     <GrayFloor />
            <WhiteFloor />
            <GrayFloor />
            <WhiteFloor />
            <GrayFloor />
            <WhiteFloor />
            <GrayFloor>
              <TestBoxTitle className="box_sixth_default box_sixth_1920"
                style={{
                  width: "100%",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                위대한 첫 걸음
              </TestBoxTitle>
            </GrayFloor>
            <WhiteFloor />
            <WhiteFloor />
            <GrayFloor />
            <WhiteFloor />
            <GrayFloor />
            <WhiteFloor />
            <GrayFloor />
            <WhiteFloor />
            <GrayFloor />
    </>
  )
}

  return (
    <>
      <MainWrap>
        <Nav />
        <AboutWrap>
          <AboutContent><FontAwesomeIcon style={{marginRight: "13px"}} icon={faRocket}></FontAwesomeIcon>즐거운 여정으로 바닐라 스크립트<img src="../images/main/js.svg"></img>를 배워보세요!&nbsp; 입문자부터 전문가까지 모두를 위한 다양한 콘텐츠가 기다리고 있습니다.</AboutContent>
          <AboutContent><NavLink to={"/notice"}>2023.09.18 &nbsp;새로운 업데이트 확인하기</NavLink></AboutContent>
        </AboutWrap>
        <MainTopWrap>
          <TestBox>
            <Easy>초급</Easy>
            <TrueOrFalse />
            <TestBoxTitle>진실 혹은 거짓?</TestBoxTitle>
            <TestBoxDesc>바닐라 스크립트로 진실과 거짓 구별하기</TestBoxDesc>
            <TestBoxCode>true와 false</TestBoxCode>
          </TestBox>
          <TestBox>
            <Normal>중급</Normal>
            <SolarSystem />
            <TestBoxTitle style={{ color: "white" }}>광활한 우주</TestBoxTitle>
            <TestBoxDesc style={{ left: "120px" }}>
              바닐라 스크립트로 태양계 만들기
            </TestBoxDesc>
            {/* <TestBoxCode>array와 for문</TestBoxCode> */}
          </TestBox>
          <TestBox>
            <Hard>고급</Hard>
            <Eye />
            <TestBoxTitle style={{ color: "white" }}>더 깊이 보기</TestBoxTitle>
            <TestBoxDesc>
              바닐라 스크립트로 따라다니는 눈동자 만들기
            </TestBoxDesc>
            <TestBoxCode style={{ color: "lightgray" }}>
              Math.cos와 Math.sin{" "}
            </TestBoxCode>
          </TestBox>
          {/* <TestBox onMouseEnter={() => {setWork_VendingMachine(!work_VendingMachine)}} onMouseOut={() => {setWork_VendingMachine(!work_VendingMachine)}} > */}
          <TestBox>
            <Easy>초급</Easy>
            <VendingMachine Work={work_VendingMachine} />
            <TestBoxTitle>무엇이 들었을까?</TestBoxTitle>
            <TestBoxDesc style={{ color: "black", left: "120px" }}>
              바닐라 스크립트로 자판기 만들기
            </TestBoxDesc>
            <TestBoxCode style={{ color: "#4C4A4D" }}>Click Event </TestBoxCode>
          </TestBox>
          <TestBox>
            <VeryEasy>입문</VeryEasy>
          <NavLink style={{display: "inline", width: "100%", height: "100%"}} to={"/detail"}>
            <MovingBall />
            <TestBoxTitle>움직임</TestBoxTitle>
            <TestBoxDesc style={{ color: "black", left: "145px" }}>
              바닐라 스크립트로 움직이는 공 만들기
            </TestBoxDesc>
            <TestBoxCode style={{ color: "darkgray" }}>
              querySelector
            </TestBoxCode>
          </NavLink>
          </TestBox>
          <TestBox>
            <Easy>초급</Easy>
            <PutSixthTestBox />
            <TestBoxDesc className="box_sixth_1920" style={{ color: "black", left: "115px" }}>
              바닐라 스크립트로 걷기
            </TestBoxDesc>
            <TestBoxCode style={{ color: "lightgray" }}>
              if와 else, 홀수와 짝수
            </TestBoxCode>
            <Walk />
          </TestBox>
          <MiniBoxWrap>
            <TestBox>
              <Dog />
              <TestBoxTitle>무한한 식량</TestBoxTitle>
              <TestBoxDesc className="desc_seventh_default desc_seventh_1920"
                style={{color: "black", width: "100%" }}
              >
                바닐라 스크립트로 무한히 사료 주기
              </TestBoxDesc>
              <TestBoxCode style={{ color: "darkgray", left: "20px" }}>
                setinterval
              </TestBoxCode>
              <Hard style={{border: "1px solid black"}}>고급</Hard>
            </TestBox>
            <TestBox></TestBox>
            <TestBox></TestBox>
            <TestBox></TestBox>
          </MiniBoxWrap>
          <WhiteGradientToTop />
        </MainTopWrap>
        <MainBottomWrap>
          <WhiteGradientToBottom />
        </MainBottomWrap>
        <Footer />
      </MainWrap>
    </>
  );
}

export default Main;
