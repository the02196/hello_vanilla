import React, { useState } from "react";
import styled from "styled-components";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  firebaseAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "./../firebase";
import { NavLink, Navigate, useNavigate } from "react-router-dom"; //로그인 성공시 이전페이지로 돌아가기 위해 필요함
import { collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { logIn, loggedIn } from "../store";
import { FacebookAuthProvider } from "firebase/auth";

function SnsLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [snsName, setSnsName] = useState("");
  const [snsEmail, setSnsEmail] = useState("");
  const [snsPhotoURL, setSnsPhotoURL] = useState("")
  const [snsNickname, setSnsNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

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
      const result = await signInWithPopup(firebaseAuth, provider);
      const user = result.user;
      console.log(user);
      sessionStorage.setItem("users", user.uid);
      dispatch(logIn(user.uid));
      Navigate("/member", {
        state: {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        },
      });
      setSnsName(user.displayName)
      setSnsNickname(user.displayName)
      setSnsEmail(user.email)
      setSnsPhotoURL(user.photoURL)
      const userProfile = {
        snsName,
        snsNickname,
        snsEmail,
        snsPhotoURL
      };
      await setDoc(doc(getFirestore(), "users", user.uid), userProfile);
      sessionStorage.setItem("users", user.uid); //로그인 유지가 되어야하니깐
      dispatch(logIn(user.uid)); //logIn import 해주기
      alert("회원가입이 완료 되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };
  return <div> SnsLogin</div>;
}

export default SnsLogin;
