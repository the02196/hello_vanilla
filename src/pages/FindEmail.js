import React from 'react'
import { collection, query, where, getDoc, getFirestore, getDocs } from 'firebase/firestore'
import { firebaseAuth, sendPasswordResetEmail } from '../firebase'
import styled from 'styled-components'
import Modal from '../components/Modal'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'



// <>를 그냥 쓰면 key값을 사용할 수 없어서 풀네임(React.Fragment)으로 써주면 key값을 넣을 수 있다.


const LoginBg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url();
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5; //다크모드 불러와서 써야함
  align-items: center; // 화면 정가운데로 옮기고 싶으면 height 값 주고 aic 하면됨
`;
const LoginNav = styled.div`
  width: 100%;
  position: absolute;
  height: 200px;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(black, transparent);
`;


const LoginNav2 = styled.div`
  width: 100%;
  position: absolute;
  height: 100px;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: linear-gradient(transparent, lightgray);
`;
const Logo = styled.nav`
  a{
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
  @media screen and (max-width: 1920px) {
          font-size: 32px;
      }
  }
`;
const LoginBtn = styled.span`
  display: inline-block;
  margin-top: 40px;
  margin-right: 30px;
  color: #fff;
  margin-top: 47px;
      margin-right: 30px;
      a{
        color: #fff;
      }
`;

const Container =styled.div`
  height: calc(100vh - 86px);
  display: flex;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  
`
const FindMail =styled.div`
  width: 35vw; padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: #fff;
  /* border-radius: 10px; */
  @media screen and (max-width: 1024px) { width: 60vw; 
  }
  @media screen and (max-width: 640px) { width: 70vw; 
  }
`
const Title =styled.h1`
font-size: 24px; text-align: center; margin-bottom: 20px;

`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  /* border-radius: 5px; */
  box-sizing: border-box;
  padding-left: 45px;
  transition: border-color 0.4s;
  &:focus {
    border-color: #ededed;
    outline: none;
  }
  &::placeholder {
    opacity: 0;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  
  input:focus + label,
  input:not(:placeholder-shown) + label {
    //글자를 남겨두는거
    top: 4px;
    left: 4px;
    font-size: 8px;
    font-weight: 600;
    color: #000000;
  
  }
`;
const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;
  color: #999;
  transition: all 0.3s;
  pointer-events: none;
`;

const Button =styled.button`
 width: 100%;
  padding: 10px;
  background-color: #000000;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  color: #fff;
`

 


function Findemail() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [resultEmail, setResultEmail] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
   
    const PhoneNumber = (e) =>{
    
        let value = e.target.value;
        
        e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/-{1,2}$/g, "");
    
        
        setPhoneNumber(value)
      }
      const isValidPhone = (phone) =>{
        const regex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/
         
        //[]안은 사용 가능한 숫자 범위 / {}중괄호 안은 자릿 수   
          return regex.test(phone)
        
        // 정규식 검사 (true , false 값 검사)
        // test() : 문자열에 일치하는 부분이 있는지 확인하고, true 혹은 false를 return
      }
      

    const findID = async () => {
    
      if(name.length === 0){
        setModalOpen(!isModalOpen);
        setMessage('이름이 비어있습니다.');
      }else if(!isValidPhone(phoneNumber)){
        setMessage("유효한 전화번호를 입력해주세요");
        setModalOpen(!isModalOpen)
        return;
      }
      
      try{

        const userQuery = query(
            collection(getFirestore(),'users'),
            where('phoneNumber', '==', phoneNumber),
            where('name', '==', name)

        );
        const querySnapShot = await getDocs(userQuery);
        console.log(querySnapShot)

        if(querySnapShot.empty){
            setMessage("가입한 계정이 없습니다.");
            setModalOpen(!isModalOpen)
            return;
        }
        const userDoc = querySnapShot.docs[0];
        const userData = userDoc.data();
        console.log(userData)
        const email = userData.email;
        setResultEmail(email);
        // 이메일 저장

        if(!email){
            setMessage("이메일 정보를 찾을 수 없습니다.");
            setModalOpen(!isModalOpen)
            return;
        }
        const maskEmail = email.replace(/(.{3}).+(@.+)/, '$1*****$2')
        setModalOpen(!isModalOpen);
        setMessage(`귀하의 이메일 주소는 ${maskEmail} 입니다.`)
        
       

      }catch(error){
        setMessage(error);
        setModalOpen(!isModalOpen)
        return;
      }
    }
    const passwordEdit = ()=>{
        sendPasswordResetEmail(firebaseAuth, resultEmail)
        .then(function(){
            setMessage(`귀하의 ${resultEmail.replace(/(.{3}).+(@.+)/, '$1*****$2')}로 메일을 발송 하였습니다.`);
            setModalOpen(!isModalOpen)
            return;
        })
    }
    
   
  return (
   <>
   <LoginBg>
        <LoginNav>
          <Logo><NavLink to={"/main"}>HeLLO VanILLa</NavLink></Logo>
          <LoginBtn><NavLink to={"/main"}>메인 페이지로 가기</NavLink></LoginBtn>
        </LoginNav>



    <Container>
        <FindMail>
            
            <Title>이메일 찾기 및 비밀번호 재설정</Title>
            
            <InputWrapper>
                < Input type='text' placeholder='이름을 입력해주세요' value={name} onChange={(e)=> setName(e.target.value)} />
                <Label htmlFor='name'>이름</Label>
            </InputWrapper>
           
            <InputWrapper>
                <Input type='text' placeholder='전화번호를 입력해주세요' value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} onInput={PhoneNumber} maxLength={13}></Input>
                <Label htmlFor='phoneNumber'>전화번호</Label>            
            </InputWrapper>
        
                {/* <p>{message}</p> */}
        
        <InputWrapper>
            <Button onClick={findID}>이메일 찾기</Button>       
        </InputWrapper>
        <InputWrapper>
        {resultEmail && <Button onClick={passwordEdit}>패스워드 재설정</Button>}
        </InputWrapper>
        {/* 가리기 위해 정규식으로 썼다. */}
        </FindMail>
       
    </Container>
    
    {isModalOpen && <Modal error={message} onClose={()=>{setModalOpen(false)}}></Modal>}
      
      <LoginNav2></LoginNav2>
     </LoginBg>
    
   </>

  )
}

export default Findemail