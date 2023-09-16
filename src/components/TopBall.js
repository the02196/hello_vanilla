import React from 'react'
import styled, { keyframes } from 'styled-components'

const Bounce = keyframes`
0% {top: -150px;
		-webkit-animation-timing-function: ease-in;
	}
	10% {}
	20% {top: 0px;
		-webkit-animation-timing-function: ease-out;
	}
	35% {top: -100px;  ;
		-webkit-animation-timing-function: ease-in;}
    55% {top: 0;
		-webkit-animation-timing-function: ease-out;}
        65% {top: -50px; ;
		-webkit-animation-timing-function: ease-in;}
        75% {top: 0;
		-webkit-animation-timing-function: ease-out;}
        85% {top: -25px; ;
		-webkit-animation-timing-function: ease-in;}
	95% {top: 0;
		-webkit-animation-timing-function: ease-out;}
	100% {top: 0;
		-webkit-animation-timing-function: ease-in;
	}
`

const ShadowAnimation = keyframes`
   0% {opacity: 0.1; width: 50px;
		-webkit-animation-timing-function: ease-in;
	}
	10% {}
	20% {opacity: 1;  width: 150px;
		-webkit-animation-timing-function: ease-out;
	}
	35% {opacity: 0.5;  width: 50px;
		-webkit-animation-timing-function: ease-in;}
    55% {opacity: 1;  width: 150px;
		-webkit-animation-timing-function: ease-out;}
        65% {opacity: 0.75;  width: 90px;
		-webkit-animation-timing-function: ease-in;}
        75% {opacity: 1;  width: 150px;
		-webkit-animation-timing-function: ease-out;}
        85% {opacity: 0.9;  width: 120px;
		-webkit-animation-timing-function: ease-in;}
	90% {
		-webkit-animation-timing-function: ease-out;}
	100% {opacity: 1;  width: 150px;
		-webkit-animation-timing-function: ease-in;
	}

`

const TopBallWrap = styled.div`
    height: 900px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TopBallShadow = styled.div`
    border-radius: 50%;
    height: 10px;
    background-color: darkgrey;
    position: absolute;
    bottom: 372px;
    opacity: 0;
    animation: ${ShadowAnimation} 1.8s forwards;
    
`

  const Ball = styled.div`
  width: 150px;
  height: 150px;
  transform: translateY(-50%, -50%);
  border-radius: 50%;
  z-index: 100;
  background-image: url("./images/detail/ball.png");
  background-size: cover;
  background-position: center;
  position: relative;
  animation: ${Bounce} 1.8s alternate cubic-bezier(.5, 0.05, 1, .5) ;
  animation-iteration-count : 1; 
  `

function TopBall() {
  return (
    <TopBallWrap><Ball></Ball><TopBallShadow></TopBallShadow></TopBallWrap>
  )
}

export default TopBall