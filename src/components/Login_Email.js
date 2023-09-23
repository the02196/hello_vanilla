import React from 'react'
import Login from '../pages/Login'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'


const LoginBg = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url();
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`
const LoginNav = styled.div`
    width: 100%;
    position: absolute;
    height: 200px;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(black, white);
`
const LoginNav2 = styled.div`
    width: 100%;
    position: absolute;
    height: 50px;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(transparent, lightgray );
`
const Logo = styled.nav`

    font-family: "Monofett", monospace;
    font-size: 40px;
    display: inline-block;
    cursor: pointer;
    margin-top: 40px;
    margin-left: 30px;
    right: 0;
    position: relative;
    z-index: 100;
    color: whitesmoke;
`
const LoginBtn = styled.span`
    display: inline-block;
    margin-top: 40px;
    margin-right: 30px;
    color: #fff;
    font-weight: bold;
`

const FormBox = styled.div`
 width: 600px;
 height: 500px;
 padding-left: 50px;
 position: absolute;
bottom: 130px;
right: 70px;

span{
    width: 400px;
    font-size: 5px;
    display: flex;
    justify-content: end;
    color: #cccccc;
    margin-top: 10px;
    
    
}
`
const EmailCode = styled.h2`  
    font-size: 20px;
    font-weight: bold;
`   
const InputOne =styled.input`

`

function Login_Email() {
  return (
    <>
    <LoginBg>
                               
        <LoginNav>
                <Logo>HeLLO VanILLa</Logo>
                <LoginBtn><span>로그인</span><span> &nbsp; | &nbsp;  </span><span><NavLink to={"/login"}>회원가입</NavLink></span></LoginBtn>
        </LoginNav>
                   
                                   
                                 
                              


                   <FormBox>
                    <EmailCode>이메일로 전송된 인증 코드를 입력하세요.</EmailCode>
                   
                    
                   
                   </FormBox>
    
    
        <LoginNav2 />
    </LoginBg>
    </>
  )
}

export default Login_Email