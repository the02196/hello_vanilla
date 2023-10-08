import React from 'react'
import styled, { keyframes } from 'styled-components'

function BallLefttoRight(){

  const boxAnimation = keyframes`
  0%{
    left: 5%;
  }

  100%{
    left: 80%;
    transform: rotate(570deg);
  }
`

const Ball = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-image: url("./images/detail/ball.png");
  background-size: cover;
  top: 19%;

  background-position: center;
  position: absolute;
  animation: ${boxAnimation} 3s linear infinite forwards;
`
  
  return(
    <Ball></Ball>
  )
}

function Animation() {
  const boxAnimation2 = keyframes`
  0%{
    transform:translate3d(0,0,0);
  }
  50%{
    transform: translate3d(0,100px,0);
  }
  75%{
    transform: translate3d(0,50px,0);
  }
  100%{
    transform: translate3d(0,0px,0);
  }
  `
  const Ball2 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url("./images/ball/ball_detail.png");
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  animation: ${boxAnimation2} 0.5s infinite alternate cubic-bezier(.5, 0.05, 1, .5) ;
`
  return (
    <>

    <Ball2></Ball2>
    </>
  )
}

export default BallLefttoRight;