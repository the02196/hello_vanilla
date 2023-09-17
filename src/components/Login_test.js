import React, { useState } from 'react'
import styled from 'styled-components'
import Login from '../pages/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'




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
const IconWrap = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
`
const FacebookIcon = styled.img`
    width: 50px;
    height: 50px;
    background-image: url("../images/login/facebook.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 10px;
    background-color: #3A589B;
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
    background-color: #f5f5f5;
    
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
bottom: 230px;
right: 100px;

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
    font-size: 18px;
    position: relative;
    span{
    position: absolute;
    z-index: 50;
    color: hotpink;
    
  }
}
input{
    width: 400px;
    margin-top: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 5px;
    transition: border color 1.2s;
    
  &:focus{
    border-color: #007bff;  
    outline: none;
    
  }
 
}
`

const Password = styled.div`

p{
    margin-top: 30px;
    font-weight: bold;
    font-size: 18px;
}
input{
    width: 400px;
    margin-top: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    border-bottom: 1px solid #d7d7d7;
    padding-bottom: 10px;
    box-sizing: border-box;
    transition: border color 0.4s;
    
  &:focus{
    border-color: #d7d7d7;
    /* &:focus 클릭했을때 효과 */
    outline: none;
  }
}
`
const RePassword = styled.div`
p{
    margin-top: 20px;
    font-weight: bold;
    font-size: 18px;
}  
input{
    width: 400px;
    margin-top: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    border-bottom: 1px solid #d7d7d7;
    padding-bottom: 10px;
    box-sizing: border-box;
    transition: border color 0.4s;
}  
  &:focus{
    border-color: #d7d7d7;   
    outline: none;
  }
`

const Email = styled.div`
   
p{

    margin-top: 25px;
    font-weight: bold;
    font-size: 18px;
}
input{
    width: 400px;
    margin-top: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 10px;
    box-sizing: border-box;
    transition: border color 0.4s;
  &:focus{
    border-color: #007bff;  
    outline: none;
  }
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

const Input = styled.div`
    position: relative;
    width: 400px;
svg{  
    position: absolute;
    color: #cccccc;
    top: 20px;
    right: 10px;
    cursor: pointer;
    
    
   
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
   
    const [eye,setEye] = useState([0,0]);

    const toggleEye = (index) =>{
        const newEye = [...eye];
        newEye[index] = !newEye[index];
        setEye(newEye)
    }

  return (
    <>
    
    
        <LoginBg>
            
            <LoginNav>
                <Logo>Hello Vanilla</Logo>
                <LoginBtn>로그인</LoginBtn>
                
            </LoginNav>
            
            

            <FormBox>
               
                
                <Id><p>사용할 아이디를 입력하세요.</p><input type="text" name='user_id' id='user_id' /></Id><span>6자 에서 12자사이 특수문자 사용 X</span>
              
                
                <Email><p>이메일을 입력하세요.</p><input type='text' placeholder='example@gmail.com' name='user_email' id='user_email'></input></Email>
               
                <Password><p>비밀번호를 입력하세요.</p><Input><input type={eye[0] ? 'text' : "Password"  }  name='user_password' id='user_password'></input><FontAwesomeIcon icon={eye[0] ? faEye : faEyeSlash} onClick={()=> toggleEye(0)}/></Input></Password><span>6자 에서 18자사이 특수문자 포함</span>
               
                <RePassword><p>비밀번호를 한 번 더 입력해주세요.</p><Input><input type={eye[1] ? 'text' : 'password'} name='user_password' id='user_password'></input><FontAwesomeIcon icon={eye[1] ? faEye : faEyeSlash} onClick={()=> toggleEye(1)}/></Input></RePassword><span>6자 에서 18자사이 특수문자 포함</span>

                <AnotherService><p>또 다른 서비스 계정으로 가입</p><input type='checkbox' id="news"></input><label for='news'> 뉴스레터를 구독하겠습니까?</label>

               
                    
                
                </AnotherService>
                <IconWrap>
                    <GoogleIcon /><FacebookIcon /><GitIcon />
                </IconWrap>   
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