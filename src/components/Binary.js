import React, { useEffect } from 'react'
import { styled } from 'styled-components'

const BinaryWrap = styled.div`
   position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 50px;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
`

const BinaryCode = styled.span`
    font-family: 'Fira Code', monospace;
    margin-right: 15px;
    font-size: 25px;
    font-weight: 400;
    visibility: hidden;
    transition: 0.4s;
    color: lightgray;
    opacity: 0;
    &:last-child {
      margin-right: 0;
    }
`

function Binary() {
  
  let BinaryArray = [];
  let binaryHelloVaniila = [1101000, 1100101, 1101100, 1101100, 1101111, 100000, 1110110, 1100001, 1101110, 1101001, 1101100, 1101100, 1100001]
  let candidate = [];
  (function CreateBinaryCodes() {
    for (let i = 0; i < 13; i++) {
      BinaryArray.push(<BinaryCode key={i} className="binary" />);
      candidate.push(i);
    }
  })();
  
useEffect(()=> {
  let chosenNum = [];
  let eighteenNum = [];
  
const suffle = () => {
    for (let i = 0; i < 13; i++){
        eighteenNum = candidate.splice(Math.floor(Math.random() * (13 - i)), 1)[0];
        chosenNum.push(eighteenNum)
    }
    console.log('chosenNum', chosenNum);
    console.log('candidate', candidate)
    console.log('eighteenNum', eighteenNum)
}

const binaryWrapTransform = (binaryWrap) => {
  
  binaryWrap.style.height = 0;
}


const scaleUpBinaryCodes = (binaryCodes) => {
  binaryCodes.forEach((code) => {
    code.style.transition = "5s"; 
    code.style.fontSize = "26px"; 
  })
}

let fixedCount = -1

const binaryFixedAccent = (binaryCodes) => {
  setTimeout(() => {
    binaryCodes.forEach((code)=>{
      code.style.transition = "0.15s";
    })
    binaryCodes[fixedCount].style.transform = "scale(1.15)";
    binaryCodes[fixedCount].style.color = "black";
  }, 50);
  setTimeout(() => {
    binaryCodes[fixedCount].style.transform = "scale(1)";
  }, 80);
}


const binaryCodesFixed = (binaryCodes) => {
  const interval = setInterval(() => {
    fixedCount++
    binaryCodes[fixedCount].textContent = binaryHelloVaniila[fixedCount];
    binaryFixedAccent(binaryCodes)
    if(fixedCount === 12){
      clearInterval(interval)
    }
  }, 90);
}


let binaryArray = [];
let intervalCount = 0;
let count = -1;

const pushSixBinaryCodes = (binaryCodes) => {
  for(let i = 0; i < 7; i++){
    let zeroOrOne = Math.floor(Math.random() * 2);
    binaryArray.push(zeroOrOne)
    if(i % 7 === 0){
      if(count === 12){
        count = -1;
      }else if (count === 5){
        binaryCodes[5].textContent = `${binaryArray[0]}${binaryArray[1]}${binaryArray[2]}${binaryArray[3]}${binaryArray[4]}${binaryArray[5]}`
      }
      count++
      binaryCodes[count].textContent = `${binaryArray[0]}${binaryArray[1]}${binaryArray[2]}${binaryArray[3]}${binaryArray[4]}${binaryArray[5]}${binaryArray[6]}`;    
      binaryArray = [];
    }
  }
}

let showCodeCount = -1;

const showBinaryCodes = (binaryCodes) => {
  suffle()
  binaryCodes.forEach((code)=>{
    code.style.opacity = "1"
  })
  const interval = setInterval(() => {
    showCodeCount++
    if(showCodeCount === 12){
      clearInterval(interval)
    }
    binaryCodes[chosenNum[showCodeCount]].style.visibility = "visible";
  }, 200);
}


const autoChangeBinaryCodes = (binaryCodes) => {
  showBinaryCodes(binaryCodes)
  const interval = setInterval(() => {
    intervalCount++
    if (intervalCount === 1500) {
      binaryCodesFixed(binaryCodes)
      clearInterval(interval);
    } else {
      pushSixBinaryCodes(binaryCodes)
    }
  }, 0.001);
}     



  const binaryWrap = document.querySelector(".binaryWrap");
  const binaryCodes = document.querySelectorAll(".binary");
  console.log(binaryCodes)
  const animation = (binaryWrap, binaryCodes) => {
    setTimeout(() => {
      scaleUpBinaryCodes(binaryCodes)
      autoChangeBinaryCodes(binaryCodes)
    }, 5000);
    setTimeout(() => {
      binaryWrapTransform(binaryWrap)
    }, 13000);}
    animation(binaryWrap, binaryCodes)
  },[])
  
  return (
    <>
      <BinaryWrap className='binaryWrap'>
        {BinaryArray}
      </BinaryWrap>
    </>
  )
}

export default Binary

