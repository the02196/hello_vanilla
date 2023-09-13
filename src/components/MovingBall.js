import React from "react";
import { keyframes, styled } from "styled-components";


const MoveBall = keyframes`
    0% { left: -30%; }
    100% { left: 20%;}
`;

const ShowSpeed = keyframes`
    0% { left: -42%; opacity: 0.1; 
    }
    100% { left: 6%; opacity: 1; }
`

const ShowSpeed_1920 = keyframes`
  0% { left: -42%; opacity: 0.1;}
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
  animation: ${MoveBall} 5s forwards ease-in-out infinite;
  z-index: 100;
  filter: contrast(1.2) grayscale(0.3);
  @media screen and (max-width: 1920px) {
          transform: scale(0.9);
      }
      
  
`;

const TriangleWrap = styled.div`
  position: relative;
  animation: ${ShowSpeed} 5s forwards ease-in-out infinite;
  z-index: 1;
  @media screen and (max-width: 1920px) {
          transform: scale(0.9);
          animation: ${ShowSpeed_1920} 5s forwards ease-in-out infinite;
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
  return (
    <>
      <BallWrap>
        <Ball>
        </Ball>
          <TriangleWrap>
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
