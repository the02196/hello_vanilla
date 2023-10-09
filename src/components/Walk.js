import React, { useState } from 'react'
import { keyframes, styled } from 'styled-components'

function Walk() {
  const [isDust, setIsDust] = useState(false);


    const LeftFoot = styled.div`
         width: 49px;
        height: 100px;
        background-image: url("../images/walk/left_foot.png");
        background-size: cover;
        position: absolute;
        bottom: 80px;
        right: 40px;
        transform: rotate(-90deg);
        @media screen and (max-width: 1920px) {
          transform: rotate(-90deg) scale(0.9);
        }
    
    ` 

    const RightFoot = styled.div`
        width: 49px;
        height: 100px;
        background-image: url("../images/walk/right_foot.png");
        background-size: cover;
        position: absolute;
        top: 100px;
        right: 290px;
        transform: rotate(-90deg);
        @media screen and (max-width: 1920px) {
          top: 80px;
          right: 255px;
          transform: rotate(-90deg) scale(0.9);
        }
    ` 


const sandDustAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

 const SandDust = styled.div`
  position: relative;
  top: 100px;
  right: 290px;
  width: 0;
  height: 0;
  background: transparent;
  border-radius: 50%;
  &.active{
    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 1000px;
      height: 50px;
      top: 0;
      left: 0;
      z-index: 999;
      background: black;
      border-radius: 50%;
      opacity: 1;
      animation: ${sandDustAnimation} 0.5s forwards;
    }
  }
  
  &:before {
    left: -50px;
    top: -25px;
  }
  
  &:after {
    right: -50px;
    bottom: -25px;
  }
`;

const TransparentLayerForDebug = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  z-index: 20;
`
  return (
    <>
     <TransparentLayerForDebug onMouseEnter={()=>{setIsDust(true)}} onMouseOut={()=>{setIsDust(false)}}></TransparentLayerForDebug>
     <LeftFoot></LeftFoot>
     <RightFoot><SandDust className={isDust && ".active"}></SandDust></RightFoot>
     
    </>
  )
}

export default Walk