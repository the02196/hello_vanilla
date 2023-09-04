import React from "react";
import styled, { keyframes } from "styled-components";

const rotationAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-left: 800px;
`;

const Li = styled.li`
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  animation: ${rotationAnimation} linear infinite;
  &:nth-child(1) {
    animation-duration: 10s;
    z-index: 10;
  }
  &:nth-child(2) {
    animation-duration: 8s;
    z-index: 9;
  }
  &:nth-child(3) {
    animation-duration: 15s;
    z-index: 8;
  }
  &:nth-child(4) {
    animation-duration: 4s;
    z-index: 7;
  }
  &:nth-child(5) {
    animation-duration: 20s;
    z-index: 6;
  }
  &:nth-child(6) {
    animation-duration: 17s;
    z-index: 5;
  }
  &:nth-child(7) {
    animation-duration: 14s;
    z-index: 4;
  }
  &:nth-child(8) {
    animation-duration: 25s;
    z-index: 3;
  }
  &:nth-child(9) {
    animation-duration: 30s;
    z-index: 2;
  }
`;

const Planet = styled.div`
  width: 13px;
  height: 13px;
  background-color: rgb(58, 58, 58);
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
`;



const SolarSystem = () => {
  const areaArray = [];

  for (let i = 1; i < 10; i++) {
    areaArray.push(50 * i);
  }

  return (
    <Ul>
      {areaArray.map((area, index) => (
        <Li key={index} style={{ width: `${area}px`, height:`${area}px` }}>
          <Planet className="planet" />
        </Li>
      ))}
    </Ul>
  );
};

export default SolarSystem;