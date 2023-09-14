import React, { useEffect } from "react";
import { styled } from "styled-components";

const MorseWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MorseCode = styled.span`
font-family: 'Fira Code', monospace;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: black;
    transition: 0.05s;
  }
  &:nth-child(7)::after,
  &:nth-child(11)::after,
  &:nth-child(14)::after,
  &:nth-child(15)::after,
  &:nth-child(16)::after,
  &:nth-child(21)::after,
  &:nth-child(23)::after,
  &:nth-child(24)::after,
  &:nth-child(29)::after,
  &:nth-child(33)::after,
  &:nth-child(37)::after {
    width: 15px;
    height: 5px;
    border-radius: 0;
  }
  &:nth-child(17) {
    margin-right: 22px;
  }
  &:nth-child(17)::after {
    width: 4px;
    height: 20px;
    border-radius: 0;
    transform: skewX(-15deg);
  }
  &:nth-child(4),
&:nth-child(5),
&:nth-child(9),
&:nth-child(13),
&:nth-child(16),
&:nth-child(21),
&:nth-child(23),
&:nth-child(25),
&:nth-child(27),
&:nth-child(31),
&:nth-child(35){
    margin-right: 22px;
}

`;

function Morse() {
  let countA = -1;
  let countB = -1;

  let MorseArray = [];
  (function CreateMorseCodes() {
    for (let i = 0; i < 37; i++) {
      MorseArray.push(<MorseCode key={i} className="morse" />);
    }
  })();

  function StrechingMorses(get) {
    return setTimeout(() => {
      get.forEach((code) => {
        code.style.transform = "scale(0)";
        code.style.transition = "transform 3s, opacity 3s";
      });
    }, 1000);
  }

  function OpacityZeroMorses(get) {
    return setTimeout(() => {
      get.forEach((code) => {
        code.style.opacity = "0";
      });
    }, 1500);
  }

  function SizeInitMorses(get) {
    return get.forEach((code) => {
      code.style.fontSize = "13px";
    });
  }

  function SizeUpMorses(get) {
    return setTimeout(() => {
      const interval = setInterval(() => {
        if (countA === 36) {
          clearInterval(interval);
        } else {
          countA++;
          get[countA].classList.add("morse-active");
        }
      }, 70);
    }, 200);
  }

  function SizeBackMorses(get) {
    return setTimeout(() => {
      const interval = setInterval(() => {
        if (countB === 36) {
          StrechingMorses(get);
          OpacityZeroMorses(get);
          clearInterval(interval);
        } else {
          countB++;
          get[countB].classList.remove("morse-active");
        }
      }, 70);
    }, 400);
  }

  useEffect(() => {
    const MorseCodes = document.querySelectorAll(".morse");
    function MorseAnimation() {
      SizeInitMorses(MorseCodes);
      SizeUpMorses(MorseCodes);
      SizeBackMorses(MorseCodes);
    }

    MorseAnimation();
  }, []);

  return <MorseWrap className="MorseWrap">{MorseArray}</MorseWrap>;
}

export default Morse;
