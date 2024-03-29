import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Page = styled.div`
    position: fixed;
    width: 100%; height: 100%;
    background-color: #f6f6f6;
    left: 0; top: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2%;
    box-sizing: border-box;

`
const PageContent = styled.div`
 max-width: 1200px;
 margin: 0 auto;
 line-height: 1.4;
 padding: 40px;
 background-color: #fff;
 border-radius: 10px;
 width: 100%;
 -webkit-box-shadow: 0 15px 15px -10px rgba(0,0,0,0.1); //실무에서 많이 쓰이고, 크로스 브라우징 때문에 씀
 box-shadow: 0 15px 15px -10px rgba(0,0,0,0.1);
 text-align: center;
 h3{
    font-size: 130px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #262626;
    span{
        color: red;
    }
 }
 p{
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
 }
`

const Button = styled.button`
background-color: #fff;
border: 1px solid #ddd;
padding: 10px 30px;
border-radius: 5px;
margin: 20px 0;
font-size: 26px;
cursor: pointer;
`

function Notpage() { 
    
    const navigate = useNavigate();
    const [countDown,setCountDown] =useState(5);
    useEffect(()=>{
        if(countDown > 0){
            const timer = setTimeout(()=>{
                setCountDown(countDown - 1)
            }, 1000)
            return() => clearTimeout(timer); //return을 여기에 쓴 이유?
        }else{
            navigate("/")
        }
    },[countDown,navigate]) 
  
    return (
    <Page>
        <PageContent>
            <h3>4<span>0</span>4</h3>
            <p>페이지를 찾을 수 없습니다.</p>
            <p>주소를 다시 한번 확인해주세요.</p>
            <p>{countDown}초 후에 이동 됩니다.</p>
            <Button onClick={()=>navigate("/")}>메인으로 가기</Button>
        </PageContent>
    </Page>
  )
}

export default Notpage