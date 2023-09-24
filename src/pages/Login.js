import React, { useState } from "react";
import styled from "styled-components";
import { firebaseAuth, signInWithEmailAndPassword } from "./../firebase";
import { NavLink, useNavigate } from "react-router-dom"; //로그인 성공시 이전페이지로 돌아가기 위해 필요함
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { logIn, loggedIn } from "../store";
import Modal from "../components/Modal";

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

const SignUp = styled.div`
  width: 35vw;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    width: 60vw;
  }
  @media screen and (max-width: 640px) {
    width: 70vw;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
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

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
    margin-top: 20px;
    justify-content: flex-end;
    display: flex;
    column-gap: 20px;
    a {
      background-color: #ededed;
      font-size: 14px;
      text-align: center;
      padding: 5px 20px;
      color: black;
      border-radius: 5px;
      &:last-child {
        color: white;
        background-color: #036;
      }
    }
  }
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
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

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;
  color: #999;
  transition: all 0.3s;
  pointer-events: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000000;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  color: #fff;
`;

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorMsg = (errorCode) => {
    const firebaseError = {
      "auth/user-not-found": "이메일 혹은 비밀번호가 잘못 되었습니다.",
      "auth/wrong-password": "이메일 혹은 비밀번호가 잘못 되었습니다.",
      "auth/invalid-email": "이메일 혹은 비밀번호가 잘못 되었습니다.",
    };
    return firebaseError[errorCode] || "알 수 없는 에러가 발생했습니다."; //firebaseError가 반환되거나 알수없는 에러가 발생했습니다 라고 둘중에 하나가 리턴이 됨
  };
  const LoginForm = async (e) => {
    //async: 함수내에서 만 사용가능하며, function 앞에 붙어서 사용함. 무엇가를 준비한다.
    // try,catch 문:try문의 코드는 오류가 있을수있지만 실행해주세요~ catch문에는 오류가 있을 시 아래 코드를 실행해주세요
    e.preventDefault();

    try {
      const userLogin = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      //await는 변수를 설정할때 같이 사용하는데 잠깐 기다리는라는 말임. (async랑 같이 사용해야만 함. )
      // console.log(userLogin);
      const user = userLogin.user;
      console.log(user);
      sessionStorage.setItem("users", user.uid);
      dispatch(logIn(user.uid));

      const userDoc = doc(collection(getFirestore(), "users"), user.uid);
      //collection은 데이터 하나만 가져온다는 뜻
      const userDocSnapshot = await getDoc(userDoc);
      // console.log(userDocSnapshot.data());
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        dispatch(loggedIn(userData));
        navigate("/main");
      }
    } catch (error) {
      setError(errorMsg(error.code));
      console.log(error.code);
    }
  };

  return (
    <>
      <LoginBg>
        <LoginNav>
          <Logo><NavLink to={"/main"}>HeLLO VanILLa</NavLink></Logo>
          <LoginBtn><NavLink to={"/main"}>메인 페이지로 가기</NavLink></LoginBtn>
        </LoginNav>

        <SignUp>
          <Title>로그인</Title>
          {/* {email}{password} */}
          <form onSubmit={LoginForm}>
            <InputWrapper>
              <Input
                type="email"
                className="email"
                placeholder="이메일"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              {/* required는 input에서 코드가 있는지 없는지 확인하는것 */}
              <Label>이메일</Label>
            </InputWrapper>
            <InputWrapper>
              <Input
                type="password"
                className="password"
                placeholder="비밀번호"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <Label>패스워드</Label>
            </InputWrapper>
            <Button>로그인</Button>
          </form>
          {/* <p>{error}</p> */}
          <InputWrapper>
            <NavLink to="/findemail">이메일/비밀번호 재설정</NavLink>
            <NavLink to="/member">회원가입</NavLink>
          </InputWrapper>
        </SignUp>
        <LoginNav2></LoginNav2>
      </LoginBg>
    </>
  );
}

export default Login;
