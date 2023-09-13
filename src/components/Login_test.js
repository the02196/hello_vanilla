import React from 'react'
import styled from 'styled-components'
import Login from '../pages/Login'


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
const FacebookIcon = styled.img`
    width: 50px;
    height: 50px;
    background-image: url("../images/login/facebook.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 10px;
`
const GitIcon = styled.img`
    width: 50px;
    height: 50px;
    background-image: url("../images/login/GitHub.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 10px;
    
`
const GoogleIcon = styled.img`
    width: 50px;
    height: 50px;
    background-image: url("../images/login/google.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 10px;
    
`
const LoginBtn = styled.span`
    display: inline-block;
    margin-top: 40px;
    margin-right: 30px;
    color: #fff;
    font-weight: bold;
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
bottom: 200px;
right: 50px;

span{
    width: 400px;
    font-size: 5px;
    display: flex;
    justify-content: end;
    color: #cccccc;
    margin-top: 10px;
    
    
}



`

const Id = styled.div`
p{
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
    border-bottom: 1px solid black;
    padding-bottom: 10px;
}
`

const Password = styled.div`
p{
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
    border-bottom: 1px solid black;
    padding-bottom: 10px;
}
`
const Email = styled.div`
   
p{
    color: black;
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
    border-bottom: 1px solid black;
    padding-bottom: 10px;
}
`

const AnotherService = styled.div`
width: 400px;
display: flex; justify-content: space-between;

label{
  
    font-size: 10px;
    display: flex;
    justify-content: end;
    color: #cccccc;
    margin-top: 10px;
}
p{  
    font-size: 15px; 
    color: #cccccc;
    margin-top: 10px;
}
input{
    margin-left: 50px;
}

`
// const Yourjob = styled.div`
//         width: 100%;  
//         margin-top: 30px;
       
      
       
// ` 
// const YourjobboxWrap = styled.div`
//     width: 400px;
//     height: 100%;
//     margin-top: 30px;
//     display: flex;
//     justify-content: space-between;

    
// `
// const YourjobBox = styled.div`
//     width: 70px; height: 20px; background-color: hotpink;
//     border: 2px solid black;
//     display: flex;
//     justify-content: space-around;
// `
const NextButton = styled.button`
    
    
`
const  LoginDog = styled.img`
    
`

const loginHuman = styled.img`
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
               
                <Id><p>사용할 아이디를 입력하세요.</p><input type="text" placeholder='#' name='user_id' id='user_id'></input></Id><span>6자 에서 12자사이 특수문자 사용 X</span>

                <Email><p>이메일을 입력하세요.</p><input type='text' placeholder='example@gmail.com' name='user_email' id='user_email'></input></Email>
               
                <Password><p>비밀번호를 입력하세요.</p><input type='password' name='user_password' id='user_password'></input></Password><span>6자 에서 18자사이 특수문자 포함</span>
               
                <Password><p>비밀번호를 한번 더 입력해주세요.</p><input type='text' name='user_password' id='user_password'></input></Password><span>6자 에서 18자사이 특수문자 포함</span>

                <AnotherService><p>또 다른 서비스 계정으로 가입</p><input type='checkbox' id="news"></input><label for='news'> 뉴스레터를 구독하겠습니까?</label>
                    
                
                </AnotherService>
                 
                 <GoogleIcon /><FacebookIcon /><GitIcon />
                
                {/* <Yourjob> 
                    <p>당신의 직업은 무엇입니까?</p>
                </Yourjob> 
                    
                <YourjobboxWrap> 
                            
                            <YourjobBox>탐구자</YourjobBox>
                        
            
                            <YourjobBox>학생</YourjobBox>
                       
                            <YourjobBox>교육자</YourjobBox>
                       
                            <YourjobBox>개발자</YourjobBox>
                     
                            <YourjobBox>기업인</YourjobBox>
                    
                    </YourjobboxWrap>   
                                                                        */}
                    
            </FormBox>
        </LoginBg>
            

    </>
  )
}

export default Login_test