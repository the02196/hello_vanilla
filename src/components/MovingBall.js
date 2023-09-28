import React, { useState } from "react";
import { keyframes, styled } from "styled-components";


const MoveBall = keyframes`
    0% { left: -18%; }
    100% { left: 20%;}
`;

const ShowSpeed = keyframes`
    0% { left: -30%; opacity: 0.1; 
    }
    100% { left: 6%; opacity: 1; }
`

const ShowSpeed_1920 = keyframes`
  0% { left: -30%; opacity: 0.1;}
  100% {left: 2.5%; opacity: 1}
`

const BallWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Ball = styled.div`
  width: 150px;
  height: 150px;
  background-image: url("../images/ball/ball_background_pupple.png");
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  z-index: 100;
  left: -18%; 
  &.on{
    animation: ${MoveBall} 1.3s forwards ease-in-out ;
  }
  filter: contrast(1.2) grayscale(0.3);
  @media screen and (max-width: 1920px) {
          transform: scale(0.9);
      }
      
  
`;

const TriangleWrap = styled.div`
  position: relative;
  z-index: 1;
  left: -30%; 
  opacity: 0.1;
  &.on{
    animation: ${ShowSpeed} 1.3s forwards ease-in-out ;
  }
  @media screen and (max-width: 1920px) {
          transform: scale(0.9);
          &.on{
            animation: ${ShowSpeed_1920} 1.3s forwards ease-in-out;
          }
      }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-left: 70px solid black;
  border-right: 70px solid transparent;
  transform: rotate(180deg);
  margin-bottom: 2px;
`;

function MovingBall() {
const [moveBall, setMoveBall] = useState(false);
  return (
    <>
      <BallWrap onMouseEnter={() => {setMoveBall(!moveBall)}} onMouseOut={() => {setMoveBall(!setMoveBall)}}>
        <Ball className={moveBall && "on"}>
        </Ball>
          <TriangleWrap className={moveBall && "on"}>
            <Triangle />
            <Triangle />
            <Triangle />
            <Triangle />
          </TriangleWrap>
      </BallWrap>
    </>
  );
}

export default MovingBall;
