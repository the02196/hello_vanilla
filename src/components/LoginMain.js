import React, { useState } from 'react'
import styled from 'styled-components'
import Login from '../pages/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'



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
    margin-top: 40px;
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

const CheckButton =styled.div`
    width: 400px;
    text-decoration: underline;
    text-underline-offset: 10px;  
    margin-top: 40px;
    display: flex;
    justify-content: end;
    cursor: pointer;
    position: relative;
    transition: 0.4s;
        
svg{
    position: absolute;
    right: -15px;
    top: 4px;
    color: gray;
}
` 

function LoginMain() {
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
                <Logo>HeLLO VanILLa</Logo>
                <LoginBtn>회원가입</LoginBtn>
            </LoginNav>

                
              
           
    
<FormBox>

            <SignIn>로그인</SignIn>

            <Id><p>아이디 또는 이메일을 입력하세요.</p><input  type="text" value={"#"} name='user_id' id='user_id' /></Id>
              
            <Password><p>비밀번호를 입력하세요.</p><Input><input type={eye[0] ? 'text' : "Password" && eye[1] ? 'password' : 'password' }  name='user_password' id='user_password'></input><FontAwesomeIcon icon={eye[0] ? faEye : faEyeSlash} onClick={()=> toggleEye(0)}/></Input></Password>

            <CheckButton>바닐라 유니버스로 이동하기<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></CheckButton>
         


    </FormBox>
        
        
        
        </LoginBg>
            
   </>
  )
}

export default LoginMain