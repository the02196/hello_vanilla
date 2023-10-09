import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BallLefttoRight from "./Animation";
import HowMoveBall from "./HowMoveBall";
import { NavLink } from "react-router-dom";
import CodeBlock, { CodeBlocka, CodeBlockb, CodeBlockc, CodeBlockd } from "./CodeBlock";
import TopBall from "./TopBall";
import { LeftTypingBox, LeftTypingBox1, LeftTypingBox2 } from "./TypingBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
  margin: 600px auto;
  position: relative;
  h1{
    padding-bottom: 70px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    position: relative;
    column-gap: 80px;
  }
`;
const Card = styled.li`
  background-color: #8AA6A3;

  width: 300px;
  height: 200px;
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  text-align: center;
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
    background-color: #e9bd15;
    color: black;
    font-weight: bold;
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
  margin: 100px auto 100px;
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
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
  font-size: 18px;
  width: 50%;
  
  height: 300px;
  display: flex;
  align-items: center;
  line-height: 30px;
  div{
line-height: 2.2rem;
  }
`;
const CodeDescRight = styled.div`
  font-size: 18px;
  width: 50%;
  height: 300px;
  display: flex;
  align-items: center;
  line-height: 30px;
  text-align: right;
  justify-Content: flex-end;
    div{
line-height: 2.2rem;
  }
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

const VanillaJS = styled.li`
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 50;
  right: 15px;
  top: 30px;
  background-image: url("../images/main/JS.svg");
  transform: rotate(20deg);
`

function Detail_Test() {
  const [offsetY, setOffsetY] = useState(0);
  const [leftStart, setLeftStart] = useState(false);
  const [offsetY1, setOffsetY1] = useState(0);
  const [leftStart1, setLeftStart1] = useState(false);
  const [offsetY2, setOffsetY2] = useState(0);
  const [leftStart2, setLeftStart2] = useState(false);
  
  useEffect(() => {
    const scrollY = window.scrollY;
    const headerPosition = Math.floor(scrollY + document.querySelector("#leftTypingBox").getBoundingClientRect().top);
    setOffsetY(headerPosition)
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[offsetY]);  

  useEffect(() => {
    const scrollY = window.scrollY;
    const headerPosition = Math.floor(scrollY + document.querySelector("#leftTypingBox2").getBoundingClientRect().top);
    setOffsetY2(headerPosition)
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[offsetY2]);  

  useEffect(() => {
    const scrollY = window.scrollY;
    const headerPosition = Math.floor(scrollY + document.querySelector("#leftTypingBox1").getBoundingClientRect().top);
    setOffsetY1(headerPosition)
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[offsetY1]);    

  function handleScroll(){
    const scrollY = window.scrollY;
    if(scrollY > offsetY-300){
      setLeftStart(true)
    }
    if(scrollY > offsetY1){
      setLeftStart1(true)
    }
    if(scrollY > offsetY){
      setLeftStart2(true)
    }
  }
  const CardContent = [
    {
      quiz: "quiz1",
      answer: "@Keyframes",
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
            <span>"addEventListener"</span>
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
              // `안녕하세요, 여러분! 오늘은 동적인 움직임을 구현하는 방법에 대해 함께 이야기 해보려해요. 화면에 보이는 공을 움직이게 만들고 싶다면 어떻게 하면 될까요? 상상력을 발휘해 볼까요?`
              `화면에 보이는 공을 움직이게 만들고 싶다면 어떻게 하면 될까요? 함께 상상력을 발휘해 볼까요?`
            }
            marginTop={0}
            marginBtm={600}
            leftStart={leftStart}
          ></LeftTypingBox>
          </div>
          
          <HowMoveBall />
          <div id="leftTypingBox2">
          <LeftTypingBox2 
           text={
            `다양한 방법이 있군요! 자 이제 바닐라 자바스크립트로 구현하는 방법을 알아볼까요?`
          }
          marginTop={600}
          marginBtm={600}
          leftStart2={leftStart2}
          ></LeftTypingBox2>
          </div>
          <CardWrap>
            {/* <h1>요점 정리</h1> */}
            <ul>
              {BallLefttoRight()}
              {CardContent.map((e, i) => {
                return <Card key={i}>{e.answer}</Card>;
              })}
          <VanillaJS></VanillaJS>
            </ul>
          </CardWrap>
          
          <Desc>
            <h1><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> &nbsp; 같이 해보기</h1>
            <span>"첫 걸음 부터 차근차근, <strong>HTML</strong>부터 <strong>바닐라 스크립트</strong> 까지! 함께 코드를 짜볼까요?"</span>
          </Desc>
          <ExampleBallWrap>
            <Ball left={"2"} top={"50"} ></Ball>
          </ExampleBallWrap>
          <CodeDescWrap>      
            <CodeDescLeft>
            <div>
            먼저 해야 할 일은 <strong>html 구조</strong>를 만드는 거예요.<br></br> <span style={{textDecoration:"underline"}}>myBall 이라는 class명을 가진 div태그 하나와 Button을 만들어 볼까요?</span>
            </div>
            </CodeDescLeft>
            <CodeBlock width={"650"} height={"400"} value={"test"}></CodeBlock>
          </CodeDescWrap>
          <CodeDescWrap>
            <CodeBlocka width={"650"} height={"460"} value={"test"}></CodeBlocka>
            <CodeDescRight>
              <div>

            CSS에서 애니메이션을 만드는 방법은 <strong>@keyframes</strong>를 사용하는 것입니다.<br/>'animate' 클래스에 애니메이션 세부사항을 적고나면, <br/> 공이 화면에서 움직이게 될거에요.
              </div>
            </CodeDescRight>
          </CodeDescWrap>
          <CodeDescWrap>
            <CodeDescLeft>
              <div>
            이제 <strong>Javascript</strong>를 이용해 'Start Animation'버튼 클릭 시<br></br>'animate'클래스를 추가하여 애니메이션이 시작되도록 <span style={{textDecoration:"underline"}}>함수를 작성</span>해볼거에요.
              </div>
            </CodeDescLeft>
            <CodeBlockb width={"650"} height={"250"} value={"test"}></CodeBlockb>
          </CodeDescWrap>
          <CodeDescWrap>
            <CodeBlockc width={"650"} height={"30"} value={"test"}></CodeBlockc>
            <CodeDescRight>
              <div>

            이제 <strong>가장 중요한 단계</strong>가 남았어요. <br/><span style={{textDecoration:"underline"}}>버튼에 우리가 만든 함수를 클릭하면 실행할 수 있는 기능을 달아줄거에요!</span>
              </div>
            </CodeDescRight>
          </CodeDescWrap>
          <CodeDescWrap>
            <CodeDescLeft>
            최종적으로 완성된 코드는 다음과 같아요.<br></br><br></br>
            굴러가는 공을 바라보는 것도 좋겠지만, css에서 색깔을 바꾸거나 공을 꾸며보는 등, <br></br>혼자만의 도전을 해보시면 더 도움이 될거에요!
            </CodeDescLeft>
            <CodeBlockd width={"650"} height={"800"} value={"test"}></CodeBlockd>
          </CodeDescWrap>
          <ExampleBallWrap>
            <Ball right={"2"} top={"50"} ></Ball>
          </ExampleBallWrap>
        </MainBg>
        <div id="leftTypingBox1">
       
          <LeftTypingBox1
            text={
              // `기억하셔야 할 것은, 코드에는 정답이 없습니다. 우리가 앞으로 기술을 이용해 만들어나갈 세상은 여러분 앞에 무한히 펼쳐져 있습니다. 오늘 배운 내용을 시작으로 여러분만의 웹페이지, 웹어플리케이션을 구상해보세요!`
              `기억하셔야 할 것은, 코드에는 정답이 없습니다. 오늘 배운 내용을 시작으로 여러분만의 웹페이지, 웹어플리케이션을 구상해보세요!`
            }
            text2={""}
            marginTop={200}
            marginBtm={200}
            leftStart1={leftStart1}
          ></LeftTypingBox1>
          </div>
        <GithubWrap>
          <GithubLogo />
          <GithubDownloadLink>
            깃허브로 가서 코드 다운 받기 &nbsp; &gt;
          </GithubDownloadLink>
        </GithubWrap>
      </GlobalWrap>
      {/* <DetailFooter>
        {Array(10)
          .fill()
          .map((e, i) => {
            return <div key={i}>Page {i + 1}</div>;
          })}
      </DetailFooter> */}
    </>
  );
}
export default Detail_Test;
