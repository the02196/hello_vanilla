import React from "react";
import styled from "styled-components";

const HowMoveBallWrap = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  filter: saturate(0.7) contrast(0.7);
  margin-bottom: 500px;
`;

const ContentText = styled.span`
  width: 200px;
  font-size: 15px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
`;

const ContentWrap = styled.div`
  position: absolute;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  right: ${(props) => props.right}%;
  bottom: ${(props) => props.bottom}%;
`;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-image: url(../images/detail/ball.png);
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
`;

const Elephant = styled.div`
  display: inline-block;
  position: absolute;
  background-size: cover;
  width: 430px;
  height: 300px;
  background-image: url(../images/detail/elephant.png);
`;
const Player = styled.div`
  display: inline-block;
  position: absolute;
  background-size: cover;
  width: 200px;
  height: 230px;
  background-image: url(../images/detail/soccer.png);
`;
const Mountain = styled.div`
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 100px solid transparent;
  border-top: 100px solid transparent;
  border-left: 160px solid black;
  border-right: 160px solid transparent;
  transform: rotate(-90deg);
`;
const Canon = styled.div`
  display: inline-block;
  width: 200px;
  height: 160px;
  position: absolute;
  background-size: cover;
  background-image: url(../images/detail/canon.png);
`;

const Push = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  z-index: 100;
  position: absolute;
  background-size: cover;
  background-image: url(../images/detail/push.png);
`;

const Wand = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  position: absolute;
  background-size: cover;
  background-image: url(../images/detail/wand.png);
  transform: rotate(90deg);
`;

const Twinkle = styled.span`
  font-size: 20px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
`

function PutContentText({ text, left, top, right, bottom }) {
  return (
    <ContentText left={left} top={top} right={right} bottom={bottom}>
      {text}
    </ContentText>
  );
}

function HowMoveBall() {
  return (
    <>
      <HowMoveBallWrap>
        <ContentWrap left="-20" top="" right="" bottom="42">
          <PutContentText
            text={"코끼리 보고 끌라고 시키기"}
            left={"140"}
            top={"-40"}
            right={""}
            bottom={""}
          />
          <Elephant>
            <Ball left="" top="" right="-20" bottom="2" />
          </Elephant>
        </ContentWrap>
        <ContentWrap left="" top="" right="50" bottom="10">
          <PutContentText
            text={"차기"}
            left={"0"}
            top={"-20"}
            right={""}
            bottom={""}
          />
          <Player>
            <Ball left="" top="" right="10" bottom="0" />
          </Player>
        </ContentWrap>
        <ContentWrap left="-2" top="-30" right="" bottom="">
          <PutContentText
            text={"산에서 굴리기"}
            left={"0"}
            top={"30"}
            right={""}
            bottom={""}
          />
          <Mountain>
            <Ball left="" top="" right="10" bottom="25" />
          </Mountain>
        </ContentWrap>
        <ContentWrap left="" top="" right="10" bottom="30">
          <PutContentText
            text={"대포로 쏘기"}
            left={"-10"}
            top={"-35"}
            right={""}
            bottom={""}
          />
          <Canon>
            <Ball left="" top="-50" right="-210" bottom="" />
          </Canon>
        </ContentWrap>
        <ContentWrap left="32" top="33" right="" bottom="">
          <PutContentText
            text={"밀기"}
            left={"-5"}
            top={"-65"}
            right={""}
            bottom={""}
          />
          <Push></Push>
          <Ball left="-18" top="-6" right="" bottom="" />
        </ContentWrap>
        <ContentWrap left="" top="0" right="23" bottom="">
          <PutContentText
            text={"마법 쓰기"}
            left={"0"}
            top={"0"}
            right={""}
            bottom={""}
          />
          <Wand>
            <Twinkle left="-20" top="0" right="" bottom="" >*</Twinkle>
            <Twinkle left="10" top="-20" right="" bottom="" >*</Twinkle>
            <Twinkle left="0" top="35" right="" bottom="" >*</Twinkle>
            <Ball left="-70" top="-100" right="" bottom="" />
          </Wand>
        </ContentWrap>
      </HowMoveBallWrap>
    </>
  );
}

export default HowMoveBall;
