import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const EyeContainer = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 1px solid rgb(240, 234, 232);
  background: radial-gradient(circle, rgba(251, 251, 250, 1) 0%, rgba(251, 251, 251, 1) 34%, rgba(233, 228, 225, 1) 100%);
  box-shadow: rgba(0, 0, 0, 0.1) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.08) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.05) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.03) 0px 2px 1px, rgba(0, 0, 0, 0.05) 0px 4px 2px,
    rgba(0, 0, 0, 0.05) 0px 8px 4px, rgba(0, 0, 0, 0.05) 0px 16px 8px, rgba(0, 0, 0, 0.05) 0px 32px 16px,
    rgba(0, 0, 0, 0.1) 0px 60px 40px -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 1;
  z-index: 2;
`;

const Pupil = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url("./images/eye/pupil.png"); 
  filter: saturate(2) brightness(1.2);
  background-size: cover;
  background-position: center;
  border: 10px solid rgb(23, 21, 18);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: 0.5s;
`;

const Dot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(10, 9, 8);
`;

const Reflection = styled.div`
  width: 20px;
  height: 10px;
  border-radius: 50%;
  top: 35%; 
  right: 40%;
  transform: skewX(30deg);
  position: absolute;
  background-color: aliceblue;
`;

const Eye = () => {
  const eyeRef = useRef(null);

  useEffect(() => {
    const eye = eyeRef?.current;

    const eyeMove = (event) => {
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const deltaX = mouseX - eyeCenterX;
      const deltaY = mouseY - eyeCenterY;

      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(eyeRect.width / 5, eyeRect.height / 5);

      const pupilX = distance * Math.cos(angle);
      const pupilY = distance * Math.sin(angle);

      eye.querySelector(".pupil").style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    };

    eye?.addEventListener("mousemove", eyeMove);

    return () => {
      eye?.removeEventListener("mousemove", eyeMove);
    };
  }, []);

  return (
    <EyeContainer ref={eyeRef} className="eyePopUp">
      <Pupil className="pupil">
        <Dot />
      </Pupil>
      <Reflection />
    </EyeContainer>
  );
};

export default Eye;