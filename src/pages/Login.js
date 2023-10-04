import React, { useState } from "react";
import styled from "styled-components";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  firebaseAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "./../firebase";
import { NavLink, useNavigate } from "react-router-dom"; //로그인 성공시 이전페이지로 돌아가기 위해 필요함
import { collection, doc, getDoc, getDocs, getFirestore, orderBy, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { logIn, loggedIn } from "../store";
import { FacebookAuthProvider } from "firebase/auth";

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
  padding: 50px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  /* border-radius: 10px; */
  /* @media screen and (max-width: 1024px) {
    width: 60vw;
  }
  @media screen and (max-width: 640px) {
    width: 70vw;
  } */
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Logo = styled.nav`
  a {
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
  a {
    color: #fff;
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
  margin-top: 20px;
  padding: 13px 13px;
  background-color: #000000;
  /* border-radius: 5px; */
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  color: #fff;
`;
const IconWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

   div {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    margin-right: 20px;
  }
`;
const FacebookIcon = styled.div`
  background-color: #3a589b;
  background-image: url("../images/login/facebook.png");
  cursor: pointer;
`;
const GitIcon = styled.div`
  background-image: url("../images/login/GitHub.png");
  cursor: pointer;
`;
const GoogleIcon = styled.div`
  background-color: #f5f5f5;
  background-image: url("../images/login/google.png");
  cursor: pointer;
`;

const SignInWrap = styled.div`
  display: flex;
  width: 100%;
    margin-bottom: 0;
    display: flex;
    justify-content: flex-end;
    a {
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #ededed;
      font-size: 14px;
      box-sizing: border-box;
      font-weight: bold;
      text-align: center;
      padding: 12px 25px;
      color: black;
     &:nth-child(1){
      margin-right: 10px;
     }
      &:last-child {
        color: white;
        background-color: #036;
      }
    }
`

const BottomWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newAccount, setNewAccount] = useState(true);
  const [snsName, setSnsName] = useState("");
  const [snsEmail, setSnsEmail] = useState("");
  const [snsPhotoURL, setSnsPhotoURL] = useState("")
  const [snsNickname, setSnsNickname] = useState("");
  const [snsUid, setSnsUid] = useState([]);
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
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
      console.log(email);
    } else if (name === "password") {
      setPassword(value);
      console.log(password);
    }
  };

  //TODO  submit의 새로고침 기능을 막자.
  // const snsLogin = async (data) => {
  //   let provider;
  //   switch (data) {
  //     case "google":
  //       provider = new GoogleAuthProvider();

  //       break;

  //     case "github":
  //       provider = new GithubAuthProvider();

  //       break;

  //     case "facebook":
  //       provider = new FacebookAuthProvider();

  //       break;

  //     default:
  //       return;
  //   }
  //   // async는 function 앞에 위치합니다.
  //   // async가 붙은 함수는 반드시 프라미스를 반환하고, 프라미스가 아닌 것은 프라미스로 감싸 반환합니다. 그런데 async가 제공하는 기능은 이뿐만이 아닙니다. 또 다른 키워드 await는 async 함수 안에서만 동작합니다

  //   try {
  //     const result = await signInWithPopup(firebaseAuth, provider);
  //     const user = result.user;
  //     console.log(user);
  //     sessionStorage.setItem("users", user.uid);
  //     dispatch(logIn(user.uid));
  //     navigate("/member", {
  //       state: {
  //         name: user.displayName,
  //         email: user.email,
  //         photoURL: user.photoURL,
  //       },
  //     });
  //   } catch (error) {
  //     setError(errorMsg(error));
  //   }
  // };

  const snsLogin = async (data) => {
    let provider;
    switch (data) {
      case "google":
        provider = new GoogleAuthProvider();

        break;

      case "github":
        provider = new GithubAuthProvider();

        break;

      case "facebook":
        provider = new FacebookAuthProvider();

        break;

      default:
        return;
    }
    try {
 
      console.log(snsUid);
      const result = await signInWithPopup(firebaseAuth, provider);
      const user = result.user;
        const getSnsInfo = () => {
          setSnsName(user.displayName)
          setSnsNickname(user.displayName)
          setSnsEmail(user.email)
          setSnsPhotoURL(user.photoURL)
        }
        await getSnsInfo();
        console.log(user);
        sessionStorage.setItem("users", user.uid);
        dispatch(logIn(user.uid));
        navigate("/main", {
          state: {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          },
        });
        const userProfile = {
          uid : user.uid,
          name : user.displayName,
          nickname : user.displayName,
          photoURL : user.photoURL,
          email : user.email,
        };
        await setDoc(doc(getFirestore(), "users", user.uid), userProfile);
        sessionStorage.setItem("users", user.uid); //로그인 유지가 되어야하니깐
        dispatch(logIn(user.uid)); //logIn import 해주기
    } catch (error) {
      console.log(error);
    }
  };


  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  return (
    <>
      <LoginBg>
        <LoginNav>
          <Logo>
            <NavLink to={"/main"}>HeLLO VanILLa</NavLink>
          </Logo>
          <LoginBtn>
            <NavLink to={"/main"}>메인 페이지로 가기</NavLink>
          </LoginBtn>
        </LoginNav>

        <SignUp>
          <Title>로그인</Title>
          {/* {email}{password} */}
          <form onSubmit={LoginForm}>
            <InputWrapper>
              <Input
                type="email"
                className="email"
                y
                placeholder="이메일"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />

              {/* // {(e) => {
                //   setEmail(e.target.value);
                // }}
                // required */}

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

                // {(e) => {
                //   setPassword(e.target.value);
                // }}
                // required
              />
              <Label>패스워드</Label>
            </InputWrapper>
            <Button>로그인 하기</Button>
          </form>
          {/* <p>{error}</p> */}
          <BottomWrap>
            <IconWrap>
              <GoogleIcon
                onClick={() => {
                  snsLogin("google");
                }}
              />

              <FacebookIcon
                onClick={() => {
                  snsLogin("facebook");
                }}
              />

              <GitIcon
                onClick={() => {
                  snsLogin("github");
                }}
              />
            </IconWrap>
            <SignInWrap>

            <NavLink to="/findemail">이메일/비밀번호 재설정</NavLink>
            <NavLink to="/member">회원가입</NavLink>
            </SignInWrap>
          </BottomWrap>
        </SignUp>
        <LoginNav2></LoginNav2>
      </LoginBg>
    </>
  );
}

export default Login;
