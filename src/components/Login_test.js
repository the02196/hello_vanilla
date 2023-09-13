import React from 'react'
import styled from 'styled-components'
import Login from '../pages/Login'


const LoginBg = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(../images/login/login_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`
const LoginNav = styled.div`
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.nav`
font-family: "Monofett", monospace;
    font-size: 40px;
    color: whitesmoke;
    display: inline-block;
    cursor: pointer;
    margin-top: 40px;
    margin-left: 30px;
`
const LoginBtn = styled.span`
    display: inline-block;
    color: whitesmoke;
    margin-top: 40px;
    margin-right: 30px;
`
// const FormBoxWrap = styled.div`
// width: 100%;
// height: 100%;

// `
const FormBox = styled.div`
 width: 600px;
 height: 500px;
 padding-left: 50px;
 position: absolute;
bottom: 50px;
left: 50px;






`

const Id = styled.div`

p{
    color: whitesmoke;
    margin-top: 50px;
    font-weight: bold;
}
input{
    width: 400px;
    margin-top: 30px;
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
}
`

const Password = styled.div`
p{
    color: whitesmoke;
    margin-top: 50px;
    font-weight: bold;
}
input{
    width: 400px;
    margin-top: 30px;
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
}
`
const Email = styled.div`
   
p{
    color: whitesmoke;
    margin-top: 50px;
    font-weight: bold;
}
input{
    width: 400px;
    margin-top: 30px;
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
}
`
const Yourjob = styled.div`

        color: whitesmoke;
        margin-top: 30px;
        display: flex;
        
` 
const YourjobBox = styled.div`
    width: 70px; height: 20px; background-color: hotpink;

ul{
    
}
li{
    
}
`
const NextButton = styled.button`
    
    
    `
const  LoginDog = styled.img`
    
`

const loginHuman= styled.img`
`



function Login_test() {
  return (
    <>
        <LoginBg>
            
            <LoginNav>
                <Logo>HeLL VanILLa</Logo>
                <LoginBtn>로그인</LoginBtn>
            </LoginNav>
            

            <FormBox>
               
                <Id><p>사용할 아이디를 입력하세요.</p><input type="text" placeholder='#' name='user_id' id='user_id'></input></Id>
               
                <Password><p>비밀번호를 입력하세요.</p><input type='text' name='user_password' id='user_password'></input></Password>
                
                <Email><p>이메일을 입력하세요.</p><input type placeholder='example@gmail.com' name='user_email' id='user_email'></input></Email>
                
                <Yourjob><p>당신의 직업은 무엇입니까?</p>
                    <ul>
                        <li>
                            <YourjobBox>탐구자</YourjobBox>
                        </li>
                        <li>
                            <YourjobBox>학생</YourjobBox>
                        </li>
                        <li>
                            <YourjobBox>교육자</YourjobBox>
                        </li>
                        <li>
                            <YourjobBox>개발자</YourjobBox>
                        </li>
                        <li>
                            <YourjobBox>기업인</YourjobBox>
                        </li>
                    </ul>
                   
                    </Yourjob>



            </FormBox>
        
        </LoginBg>
            
        
   
    </>
  )
}

export default Login_test