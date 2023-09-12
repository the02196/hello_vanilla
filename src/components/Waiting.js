import React, { useEffect } from 'react'
import { styled } from 'styled-components'

const WaitingText = styled.p`
    font-family: 'Fira Code', monospace;
    margin: 0;
    position: absolute;
    text-align: center;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 29px;
    color: rgb(185, 185, 185);
    transition: 0.3s;
    overflow: hidden;
`

const WaitingDot = styled.span`
   font-size: 29px;
`

function Waiting() {
  useEffect(()=>{
let addDotsCount = -1;
const addWaitingDots = (waitingText, waitingDot) => {
    let dotsArray = [".", "..", "..."];
    const interval = setInterval(() => {
        addDotsCount++
        waitingText.appendChild(waitingDot);
        if(addDotsCount === 3){
            addDotsCount = 0;
        }
        waitingDot.textContent = `${dotsArray[addDotsCount]}`;
    }, 500);
    setTimeout(()=>{
        clearInterval(interval);
    }, 13200)
}

const hideWaiting = (waitingText) => {
    setTimeout(() => {
      waitingText.style.opacity = "0";
    }, 13200);
}

let changeTextCount = -1;
const changeWaitingTexts = (WaitingText) => {
    let textArray = ["세미콜론 빼먹은 것 확인 중", "미지의 세계로 들어가는 중"];
    const interval = setInterval(() => {
        changeTextCount++
        if(changeTextCount === 2){
            changeTextCount = 0;
        }
        WaitingText.textContent = `${textArray[changeTextCount]}`;
    }, 4500);
    setTimeout(()=>{
        clearInterval(interval);
    }, 13200)
    
}


  const waitingText = document.querySelector(".waitingText")
  const waitingDot = document.querySelector(".waitingDot")
  changeWaitingTexts(waitingText)
  addWaitingDots(waitingText, waitingDot)
  hideWaiting(waitingText)
}, [])

  return (
    <>
    <WaitingText className='waitingText'>
      버그 고치는 중
      <WaitingDot className='waitingDot'></WaitingDot>
    </WaitingText>
    </>
  )
}

export default Waiting