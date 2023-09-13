import React from 'react'
import styled, { keyframes } from 'styled-components'

function Animation() {
  const boxAnimation = keyframes`
  0%{
    left: 5%;
  }
  16.6666667%{
    left: 14%;
  }
  33.3333333%{
    left: 24%
  }
  50%{
    left: 37%;
  }
  66.666667%{
    left: 50%;
  }
  83.3333333%{
    left: 66%;
  }
  100%{
    left: 80%
  }
  `
  const Ball = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url("./images/ball/ball_detail.png");
  background-size: cover;
  background-position: center;
  margin: 500px auto;
  position: absolute;
  animation: ${boxAnimation} 3s infinite linear;
`
  return (
    <Ball>
    </Ball>
  )
}

export default Animation