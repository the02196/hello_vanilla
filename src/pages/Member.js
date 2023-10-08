import React, { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword, firebaseAuth } from "./../firebase";
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  collection,
  updateDoc,
  Firestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut, loggedIn } from "../store";
import { useEffect } from "react";
import Avatar from "./Avatar";
import { deleteUser, getAuth } from "firebase/auth";

//사용하는 이유?

const EmailWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckEmail = styled.div`
  width: 70px;
  text-align: center;
  line-height: 15px;
  padding: 11.5px;
  color: white;
  background-color: black;
  font-size: 15px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const Info = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

const LoginBg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url();
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
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
  width: 730px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  color: #aaa;
  span{
    color: lightgray;
  }
  a {
    font-weight: 500;
    color: #aaa;
    &:visited{
      color: #aaa;
    }
  }
`;

const SignUp = styled.div`
  margin-top: 50px;
  width: 35vw;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  position: relative;
  z-index: 222222222;
  /* border-radius: 10px; */
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  /* border-radius: 5px; */
  box-sizing: border-box;
`;
const Button = styled.button`
  width: 100%;
  margin: 10px 0px;
  padding: 10px;
  color: white;
  background-color: #000000;
  /* border-radius: 5px; */
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
`;
// input에는 before,after가 안 먹음
// 비밀번호를 보이게 할려면 눈모양을 사용해서..
const Password = styled.div`
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    right: 10px;
    top: 12.5px;
    cursor: pointer;
  }
`;
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div`
  flex-basis: 360px;
  background-color: #f7fcfc;
  padding: 60px 20px 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > svg {
    flex-basis: 100%;
    font-size: 80px;
    color: red;
  }
  > p {
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0;
  }
`;

function Member() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [eye, setEye] = useState([0, 0]); //눈이 2개라서 배열에 한번에 담기 위해서 ..
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  //0922-2
  
       const userState = useSelector((state) => state.user);
  
  
  
  
  
  console.log(userState);
  const [userUid, setUserUid] = useState(userState && userState.uid);

  
  //삼항연산자를 사용할려면 항상 useState에 값을 저장해둬야함
  const dispatch = useDispatch();
  //0922-1
  const initialMode = window.location.pathname.includes("member");
  // alert(initialMode); => 내가 입력한 주소가 멤버가 맞는지 아닌지 확인하는거 loggedIn이면 false logOut이라면 true가 뜸

  useEffect(() => {
    if (!initialMode) {
      firebaseAuth.onAuthStateChanged((user) => {
        //인증을 초기화해서 다시 가져오겠다
        if (user) {
          setUserUid(user.uid);
        }
      });
    }
  }, [initialMode]);

  const fetchUserData = async () => {
    const userRef = doc(getFirestore(), "users", userUid);
    const userSnap = await getDoc(userRef);
    // console.log(userSnap.data());

    if (userSnap.exists()) {
      const data = userSnap.data();
      setName(data.name);
      setNickname(data.nickname);
      setPhoneNumber(data.phoneNumber);
      setEmail(data.email);
    }
  };
  useEffect(() => {
    if (!initialMode && userUid) {
      fetchUserData();
    }
  }, [initialMode, userUid]);

  const toggelEye = (index) => {
    const newEye = [...eye];
    //원래 있던 eye의 배열값을 복사해 배열을 벗긴다.
    //[[0,0]]> []  없애는게 ... 표현 > 다시 말해서 같은값이 복사가 된다.
    newEye[index] = !newEye[index];
    // eye를 첫번째를 클릭했다면 newEye[0] = 부정 즉 false > true 로 변경된다. [1,0]
    setEye(newEye);
    //그리고 그 값을 쓰기전용인 setEye에 새로운 배열값을 저장한다.
  };

  const PhoneNumber = (e) => {
    let value = e.target.value;
    e.target.value = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/-{1,2}$/g, "");
    setPhoneNumber(value);
  };
  const errorMsg = (errorCode) => {
    const firebaseError = {
      "auth/admin-restricted-operation": "빈 데이터가 있다.",
      "auth/email-already-in-use": "이미 사용중인 이메일 주소 입니다",
      "auth/invalid-email": "유효하지 않은 이메일 주소 입니다",
      "auth/operation-not-allowed":
        "이메일/비밀번호 계정이 비활성화 되어있습니다. ",
      "auth/weak-password": "너무 짧은 비밀번호를 사용하였습니다.(6자리)",
      "invalid-argument": "빈 데이터가 있다.", //데이터베이스와 에러메세지 두개를 동시에 사용하기 때문에 이름,닉네임,번호중에 하나라도 누락되면 invaild-argument 라고 뜸
    };
    return firebaseError[errorCode] || "알 수 없는 에러가 발생하였습니다.";
  };

  const isValidPhone = (phoneNumber) => {
    const regex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/;
    return regex.test(phoneNumber);
  };
  const isValidEmail = (email) => {
    const regex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    return regex.test(email);
  };

  const signUp = async (e) => {
    e.preventDefault();
    let errorMessage = "";

    if (name.length === 0) {
      errorMessage = "이름";
    } else if (nickname.length === 0) {
      errorMessage = "닉네임";
    } else if (!isValidEmail(email)) {
      setError("이메일 주소를 입력해주세요.");
      setIsModal(!isModal);  
      return;
    } else if (password.length === 0 && initialMode) {
      errorMessage = "비밀번호";
    } else if (passwordConfirm.length === 0 && initialMode) {
      errorMessage = "비밀번호 확인";
    } else if (password !== passwordConfirm && initialMode) {
      setError("비밀번호가 일치하지 않습니다.");
      setIsModal(!isModal);
      return; 
    }else if (!isValidPhone(phoneNumber)) {
      setError("전화번호 를 입력해주세요.");
      setIsModal(!isModal);
      return;
    } 

    if (errorMessage) {
      setError(errorMessage + "을 입력해 주세요 !");

      setIsModal(!isModal);
      return;
    }
    try {
      const userProfile = {
        name,
        nickname,
        phoneNumber,
        email,
      };
      if (initialMode) {
        const { user } = await createUserWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );
        await setDoc(doc(getFirestore(), "users", user.uid), userProfile);

        sessionStorage.setItem("users", user.uid);


        dispatch(logIn(user.uid));



        alert("회원가입이 완료 되었습니다.");

      } else {
        //정보수정인 경우
        if (userUid) {
          const userRef = doc(getFirestore(), "users", userUid);
          
          
          await updateDoc(userRef, userProfile)          
          alert("정보 수정이 완료 되었습니다.");
        
        
        } else {
          setError("회원정보가 완료되었습니다.");
          setIsModal(!isModal);
          return;
        }
      }

      navigate("/main");
      //회원가입 완료시 알림창이 뜨고 메인페이지로 이동하게 됨!!!
    } catch (error) {
      setError(errorMsg(error.code));
      setIsModal(!isModal);
      console.log(error.code);



    }
  };
  const auth = getAuth();
  
  const user = auth.currentUser;

  
  
  const DeleteAccount = async () => {
    if (window.confirm("계정을 삭제하시겠습니까?")) {
      try {
        await deleteUser(user);
        navigate("/signout");
      } catch (error) {
        alert(error);
      }
    }
  };
  const CheckedEmail = async (email) => {
   
    if (!isValidEmail(email)) {
      setError("유효한 이메일 을 입력해 주세요");
      return;
    }
    try{
       const j = await query(collection(getFirestore(), 'users'), where("email", "==", email));
       const querySnapshot = await getDocs(j);
       if(querySnapshot.docs.length === 0){
        setError("사용가능한 이메일입니다. ^-^");
        setIsModal(!isModal);          
      }else{
         setError("중복된 이메일 입니다 다시 입력해 주세요. ㅜ_ㅜ");
         setIsModal(!isModal);
         return;
       }
     }catch(error){
      console.log(error)
     }          
  };

  return (
    <>
      {
        isModal && (
          <Modal
            error={error}
            onClose={() => {
              setIsModal(false);
            }}
          />
        )
        //내가 한거 error={error} isModal={isModal} setIsModal={setIsModal}
        //모달창을 닫는값만 보내주면 되니깐 false값만 보내주는거임
        //값이 있거나 참일때만 모달창을 보여준다는 의미임(display:none의 의미가 아님 => 많이 쓰이니깐 잘 알아놓기!)

        // <ModalBackground>
        //   {/* modal을 컴포넌트로 만드느것도 좋을거 같음 => 다른데도 사용해야하닊나 */}
        //   <ModalContent>
        //     <FontAwesomeIcon icon={faTriangleExclamation}/>
        //     <p>{error}</p>
        //     <Button onClick={()=>{setIsModal(!isModal)}}>확인</Button>
        //   </ModalContent>
        // </ModalBackground>
      }
      {userState.loggedIn && initialMode ? (
        <Modal
          error="이미 로그인 중입니다."
          onClose={() => {
            navigate("/modify");
          }}
        />
      ) : (
        // userState.loggedIn && initialMode ?  <Modal error="이미 로그인 중입니다." onClose={()=> navigate("/signup")}/> :

        <LoginBg>
          <LoginNav>
            <Logo>
              <NavLink to={"/main"}>HeLLO VanILLa</NavLink>
            </Logo>
            {/* <LoginBtn>
              <NavLink to={userState.loggedIn ? "/logout" : "/login"}>
                {userState.loggedIn ? "로그아웃" : "로그인"}
              </NavLink>{" "}
              &nbsp; | &nbsp; <NavLink to={"/main"}>메인 페이지로 가기</NavLink>{" "}
            </LoginBtn> */}
          </LoginNav>
          <SignUp>
            {initialMode ? <Title>회원가입</Title> : <Title>정보수정</Title>}
            {!initialMode && <Avatar />}
            <Info>이름</Info>
            <Input
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="name"
              placeholder="이름을 입력하세요."
            />
            <Info>닉네임</Info>
            <Input
              defaultValue={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
              type="text"
              className="nickname"
              placeholder="닉네임을 입력하세요."
            />
            <Info>이메일</Info>
            <EmailWrap>
              <Input
                style={initialMode ? { width: "84%" } : { width: "100%" }}
                defaultValue={email}
                type="email"
                className="email"
                placeholder="이메일을 입력하세요."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {initialMode && <CheckEmail onClick={()=>{CheckedEmail(email)}}>중복 확인</CheckEmail>}
            </EmailWrap>
            {initialMode && ( //회원가입일때 아래내용이 실행되어야함
              <>
                <Info>비밀번호</Info>
                <Password>
                  <Input
                    type={eye[0] ? "text" : "password"}
                    className="password"
                    placeholder="비밀번호를 입력하세요."
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={eye[0] ? faEye : faEyeSlash}
                    onClick={() => {
                      toggelEye(0);
                    }}
                  />
                </Password>
                <Info>비밀번호 확인</Info>
                <Password>
                  <Input
                    type={eye[1] ? "text" : "password"}
                    className="confirm_password"
                    placeholder="비밀번호를 다시 입력하세요."
                    onChange={(e) => {
                      setPasswordConfirm(e.target.value);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={eye[1] ? faEye : faEyeSlash}
                    onClick={() => {
                      toggelEye(1);
                    }}
                  />
                </Password>
              </>
            )}
            <Info>전화번호</Info>
            <Input
              defaultValue={phoneNumber}
              onInput={PhoneNumber}
              type="text"
              className="phone"
              placeholder="전화번호를 입력하세요."
              maxLength={13}
            />

            <Button onClick={signUp}>{initialMode ? "가입" : "수정"}</Button>
            {/* <p>{error}</p> */}
            {!initialMode && (
              <div
                style={{
                  marginTop: "10px",
                  fontWeight: "semibold",
                  fontSize: "15px",
                  width: "100%",
                  color: "#ccc",
                  display: "flex",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                }}
                onClick={() => {
                  DeleteAccount();
                }}
              >
                <span>회원 탈퇴하기</span>
              </div>
            )}
          </SignUp>
          <LoginNav2></LoginNav2>
      <LoginBtn>
        <NavLink to={userState.loggedIn ? "/logout" : "/login"}>
          {userState.loggedIn ? "로그아웃" : "로그인"}
        </NavLink>{" "}
       <span>&nbsp; | &nbsp;</span> <NavLink to={"/main"}>메인 페이지로 가기</NavLink>{" "}
      </LoginBtn>
        </LoginBg>
      )}
    </>
  );
}

export default Member;