import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import { Slider } from "./Slider";
import BallLefttoRight from "./Animation";
import HowMoveBall from "./HowMoveBall";
import { NavLink } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import TopBall from "./TopBall";
import { LeftTypingBox, LeftTypingBox1, LeftTypingBox2, RightTypingBox, RightTypingBox1 } from "./TypingBox";

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
      margin-left: 25px;
      color: #9d9d9d;
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
  margin: 200px auto;
  ul {
    display: flex;
    justify-content: space-between;
    position: relative;
    column-gap: 80px;
  }
`;
const Card = styled.li`
  background-color: #8AA6A3;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  z-index: 100;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-sizing: border-box;
  position: relative;
  &:nth-child(3){
    
    background-color: #038C73;
  }
  &:nth-child(4){
    background-color: #127369;
  }
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
  const [offsetY, setOffsetY] = useState(0)
  const [leftStart, setLeftStart] = useState(false);
  
  useEffect(() => {
    const scrollY = window.scrollY;
    const headerPosition = Math.floor(scrollY + document.querySelector("#leftTypingBox").getBoundingClientRect().top);
    setOffsetY(headerPosition)
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[offsetY]);  

  function handleScroll(){
    const scrollY = window.scrollY;
    if(scrollY > offsetY-500){
      setLeftStart(true)
    }
  }
  const CardContent = [
    {
      quiz: "quiz1",
      answer: "@Keyframe",
    },
    {
      quiz: "quiz2",
      answer:
        "Position",
    },
    {
      quiz: "quiz3",
      answer:
        "ClickEvent"
    }
  ];

  return (
    <>
      <GlobalWrap>
        <Creator>
          <div>
            <span>&lt;&gt; creator. #dh3308 & #romi6342</span>
            <span>how we can move ball with js?</span>
            <span>"querySelector"</span>
          </div>
          <span>
            <NavLink to={"/main"}>메인 페이지로 가기</NavLink>
          </span>
        </Creator>
        <MainBg>
          <TopBall></TopBall>
          <div id="leftTypingBox">
          <LeftTypingBox
            text={
              `안녕하세요, 여러분! 오늘은 동적인 움직임을 구현하는 방법에 대해 함께 이야기 해보려해요. 화면에 보이는 공을 움직이게 만들고 싶다면 어떻게 하면 될까요? 상상력을 발휘해 볼까요?`
            }
            marginTop={0}
            marginBtm={600}
            leftStart={leftStart}
          ></LeftTypingBox>
          </div>
          <HowMoveBall />
          <CardWrap>
            <ul>
              {BallLefttoRight()}
              {CardContent.map((e, i) => {
                return <Card key={i}>{e.answer}</Card>;
              })}
            </ul>
          </CardWrap>
          <Desc>
            <h1>같이 해보기</h1>
            <span>
            먼저 해야 할 일은 HTML 구조를 만드는 거예요. myBall이라는 class명을 가진 div태그 하나와 Button을 만든 후 CSS를 통해 조금만 꾸며볼까요?
            </span>
          </Desc>
          <CodeDescWrap>
            <CodeDescLeft/>
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
            <CodeBlock id="myTextarea" width={"650"} height={"400"} value={
              `\<test\> \n      document \n            세번째 글`  
              }></CodeBlock>
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
