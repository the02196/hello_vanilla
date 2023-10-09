import React from 'react'
import { styled } from 'styled-components'
import Greeting from "../components/Greeting";


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

    const InfoWrap = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 30px;
    `

    const Copyright = styled.div`
      color: #B6B6B6;
      font-size: 10px;
      margin-bottom: 10px;
    `

    const InfoDetail = styled.div`
      color: #B6B6B6;
      font-size: 10px;
    `

  return (
    <>
        <FooterWrap>
          <Mountain />
          <Mountain />
          <Mountain />
          <Mountain />   
          <Mountain />
          <Greeting />
          <HouseRoof />
          <HouseBody />
          <InfoWrap>
            <Copyright>Copyright © 2023 Hello Vanilla 모든 권리 보유.</Copyright>
            <InfoDetail>사업자등록번호 : 120-81-OOOOO | 통신판매업신고번호 : 제 2011-OOOO-00810호 | 대표이사 : OOO OOOOO | 주소 : 서울 특별시 OOO OOOOO | 대표전화 : OO-OOO-OOOO | 팩스 : OO-OOO-OOOO</InfoDetail>
          </InfoWrap>           
        </FooterWrap>
    </>
  )
}

export default Footer