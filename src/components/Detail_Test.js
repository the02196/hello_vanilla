import React, { useState } from "react";
import { keyframes, styled } from "styled-components";
import { TypeAnimation } from "react-type-animation";
import { Slider } from "./Slider";
import Aos from "./Aos";
import BallLefttoRight from "./Animation";
import CodeEditor from "@uiw/react-textarea-code-editor";
import HowMoveBall from "./HowMoveBall";
import { NavLink } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import TopBall from "./TopBall";
import { LeftTypingBox, RightTypingBox } from "./TypingBox";

const GlobalWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fefefe;
`;

const Ball = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-image: url(../images/detail/ball.png);
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  right: ${(props) => props.right}%;
  bottom: ${(props) => props.bottom}%;
  transform: translate(0, -50%);
`;

const MainBg = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
const Creator = styled.div`
  padding: 10px 0;
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  top: 0;
  div {
    span {
      font-family: Fira Code;
      font-size: 16px;
      margin-left: 20px;
      color: #9d9d9d;
      &:nth-child(2) {
        margin-left: 20px;
      }
    }
  }
  span {
    a {
      font-size: 16px;
      margin-right: 20px;
      color: #9f9f9f;
      text-decoration: none;
    }
  }
`;

const DetailFooter = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f1f1f1;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 999;
  div {
    font-size: 15px;
    padding: 2px 0;
    color: #9d9d9d;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(1) {
      background-color: black;
    }
  }
`;

const CardWrap = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 400px auto;
  ul {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
`;

const Card = styled.li`
  background-color: #efefef;
  width: 300px;
  height: 300px;
  font-size: 20px;
  text-align: center;
  z-index: 100;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-sizing: border-box;
  position: relative;
  &.on {
    background-color: #fff;
  }
  span {
    position: absolute;
    font-size: 23px;
  }
`;
const Desc = styled.div`
  width: 100%;
  margin: 100px auto;
  h1 {
    font-size: 30px;
    margin-bottom: 80px;
  }
  h2 {
    margin-bottom: 40px;
  }
  span {
    font-size: 20px;
  }
`;

const ExampleBallWrap = styled.div`
  width: 100%;
  height: 220px;
  background-color: #fff;
  border: 1px solid black;
  position: relative;
`;
const CodeDescWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px auto;
`;
const CodeDescLeft = styled.div`
  font-size: 20px;
  width: 50%;
  height: 300px;
  display: flex;
  align-items: center;
  line-height: 30px;
`;


const CodeDescRight = styled.div`
  font-size: 20px;
  width: 50%;
  height: 300px;
  display: flex;
  align-items: center;
  line-height: 30px;
  text-align: right;
  justify-Content: flex-end;
`;


const GithubWrap = styled.div`
  width: 100%;
  background-color: black;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const GithubLogo = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("../images/detail/github.png");
  background-size: cover;
  margin-right: 20px;
`;

const GithubDownloadLink = styled.span`
  color: white;
  margin-right: 40px;
`;

function Detail_Test() {
  const CardContent = [
    {
      quiz: "quiz1",
      answer: "Lorem ipsum dolor sit amet. ",
    },
    {
      quiz: "quiz2",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, minus.",
    },
    {
      quiz: "quiz3",
      answer:
        "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, minus.",
    },
  ];

  return (
    <>
      <GlobalWrap>
        <Creator>
          <div>
            <span>&lt;&gt; creator. #dh3308 & #romi6342</span>
            <span>how we can move ball with js?</span>
          </div>
          <span>
            <NavLink to={"/main"}>메인 페이지로 가기</NavLink>
          </span>
        </Creator>
        <MainBg>
          <TopBall></TopBall>
          <LeftTypingBox
            text={
              "여기에 '공'이 있습니다. 공을 옮기는 방법을 한 번 상상해 보세요!"
            }
            marginTop={0}
            marginBtm={400}
          ></LeftTypingBox>
          <HowMoveBall />
          <RightTypingBox
            text={"와, 다양한 방법이 있네요!"}
            marginTop={0}
            marginBtm={0}
          ></RightTypingBox>
          <LeftTypingBox
            text={
              "틀린 방법은 없습니다. 다른 방법들만이 있을 뿐이죠! 바닐라 자바스크립트로는 어떻게 옮길 수 있는지 볼까요?"
            }
            marginTop={100}
            marginBtm={400}
          ></LeftTypingBox>
          <CardWrap>
            <ul>
              {BallLefttoRight()}
              {CardContent.map((e, i) => {
                return <Card key={i}>{e.answer}</Card>;
              })}
            </ul>
          </CardWrap>
          <Desc>
            <h1>바닐라 스크립트로 공 옮기기</h1>
            <h2>1 : 공의 모험 시작 </h2>
            <span>
              한 번에 한 발자국씩, 공이 어떻게 움직일 수 있는지 알아보도록
              해봅시다. 웹 페이지에 공을 그리기 위해 HTML을 사용할 거에요. 아래
              예시와 코드를 보세요.
            </span>
          </Desc>
          <ExampleBallWrap>
            <Ball left="2" top="50" right="" bottom="" />
          </ExampleBallWrap>
          <CodeDescWrap>
            <CodeDescLeft>
              여기서 &lt;div&gt; 엘리먼트를 사용해 우리의 공을 만들었습니다.{" "}
              <br />
              이제 이 공을 움직이려면 JavaScript를 사용해야 해요.
            </CodeDescLeft>
            <CodeBlock width={"650"} height={"400"} value={"test"}></CodeBlock>
          </CodeDescWrap>
          <CodeDescWrap>
            <CodeBlock width={"650"} height={"400"} value={"test"}></CodeBlock>
            <CodeDescRight>
              우리가 만든 HTML에 JavaScript를 연결해보겠습니다.
              <br /> "script.js" 파일을 만들고 아래 코드를 추가하세요.
            </CodeDescRight>
          </CodeDescWrap>
          <CodeDescWrap>
            <CodeDescLeft>
              이제 "script.js" 파일을 통해 공을 움직일 수 있게 되었습니다.
            </CodeDescLeft>
            <CodeBlock width={"650"} height={"400"} value={"test"}></CodeBlock>
          </CodeDescWrap>
          <ExampleBallWrap style={{ marginBottom: "200px" }}>
            <Ball left="" top="50" right="2" bottom="" />
          </ExampleBallWrap>
        </MainBg>
        <GithubWrap>
          <GithubLogo />
          <GithubDownloadLink>
            깃허브로 가서 코드 다운 받기 &nbsp; &gt;
          </GithubDownloadLink>
        </GithubWrap>
      </GlobalWrap>
      <DetailFooter>
        {Array(10)
          .fill()
          .map((e, i) => {
            return <div key={i}>Page {i + 1}</div>;
          })}
      </DetailFooter>
    </>
  );
}
export default Detail_Test;
