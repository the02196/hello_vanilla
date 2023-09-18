import React from 'react'
import Login from '../pages/Login'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'



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
const SignIn = styled.h2`
    font-size: 30px;
    font-weight: bold;
`   
const CheckButton =styled.div`
    width: 400px;
    margin-top: 40px;
    display: flex;
    justify-content: end;
    cursor: pointer;
    position: relative;
    color: #838383;

svg{
    position: absolute;
    right: -12px;
    bottom: 1px;
    color: #838383;
    
}
` 



function Login_End() {
  return (
    <>
    
        <LoginBg>         
            
            <LoginNav>
                <Logo>HeLLO VanILLa</Logo>
                <LoginBtn>로그인</LoginBtn>
            </LoginNav>

            <FormBox>
            <SignIn>가입이 완료되었습니다.</SignIn>

            <CheckButton>로그인 페이지로 바로가기<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></CheckButton>


            </FormBox>
    
        </LoginBg> 
    
    </>
  )
}

export default Login_End