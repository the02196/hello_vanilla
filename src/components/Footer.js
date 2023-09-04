import React from 'react'
import { styled } from 'styled-components'


function Footer() {
    const FooterWrap = styled.div`
        width: 100%;
        height: 300px;
        background: linear-gradient(0deg, transparent 0%, rgba(251,251,251,0.5) 6%, rgba(0,0,0,1) 100%);
        position: relative;
    `
    const Mountain = styled.div`
      width: 0;
      height: 0;
      border-bottom: 30px solid transparent;
      border-top: 30px solid transparent;
      border-left: 60px solid black;
      border-right: 60px solid transparent;
      transform: rotate(-90deg);
      margin-bottom: 2px;
      position: absolute;
      top: -30%;
      &:nth-child(2){
        top: -48%;
        left: 25px;
        border-bottom: 50px solid transparent;
        border-top: 50px solid transparent;
        border-left: 100px solid black;
        border-right: 100px solid transparent;
      }
      &:nth-child(3){
        left: 130px;
      }
      &:nth-child(4){
        right: 0px;
      }
      &:nth-child(5){
        top: -20%;
        right: 60px;
        border-bottom: 25px solid transparent;
        border-top: 25px solid transparent;
        border-left: 45px solid black;
        border-right: 45px solid transparent;
      }
    `;

    const HouseRoof = styled.div`
      width: 0;
      height: 0;
      border-bottom: 20px solid transparent;
      border-top: 20px solid transparent;
      border-left: 10px solid black;
      border-right: 10px solid transparent;
      transform: rotate(-90deg);
      position: absolute;
      top: -15%;
      left: 350px;
    `;

    const HouseBody = styled.div`
      width: 20px;
      height: 20px;
      background-color: #000;
      top: -5%;
      left: 350px;
      position: absolute;
    `

  return (
    <>
        <FooterWrap>
          <Mountain />
          <Mountain />
          <Mountain />
          <Mountain />   
          <Mountain />
          <HouseRoof />
          <HouseBody />           
        </FooterWrap>
    </>
  )
}

export default Footer