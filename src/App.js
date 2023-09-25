import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Loading from "./pages/Loading";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Quick from "./pages/Quick";
import Login from "./pages/Login";
import AnimationTest from "./pages/AnimationTest";
import Obsidian from "./pages/Obsidian";
import Notice_Test from "./components/Notice_Test";
import Write from "./pages/Write";
import View from "./pages/View";
import { Provider, useDispatch } from "react-redux";
import store, { logIn, loggedIn } from "./store";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Member from "./pages/Member";
import { firestore } from "./firebase";
import Modal from "./components/Modal";
import styled from "styled-components";
import Service from "./pages/Service";
import Notice from "./pages/service/Notice";
import Notpage from "./pages/Notpage";

import MyPage from "./pages/MyPage";

import Auth from "./components/Auth";


const GlobalNavigation = styled.ul`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: white;
  padding: 2px;
  z-index: 999;
`;

const GlobalNavigationTitle = styled.p`
  color: white;
`;

const GlobalNavigationButton = styled.li`
  width: 80px;
  padding: 10px;
  font-size: 13px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  &:hover {
    background-color: white;

    color: black;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalNavigation>
        <NavLink to={"/"}>
          <GlobalNavigationButton>Loading</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/main"}>
          <GlobalNavigationButton>Main</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/login"}>
          <GlobalNavigationButton>Log in</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/member"}>
          <GlobalNavigationButton>Sign In</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/detail"}>
          <GlobalNavigationButton>detail</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/service/notice"}>
          <GlobalNavigationButton>Notice(View)</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/write/notice"}>
          <GlobalNavigationButton>Notice(Write)</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/quick"}>
          <GlobalNavigationButton>Quick Links</GlobalNavigationButton>
        </NavLink>
        <NavLink to={"/mypage"}>
          <GlobalNavigationButton>Test</GlobalNavigationButton>
        <NavLink to={"/auth"}>
          <GlobalNavigationButton>Auth Test</GlobalNavigationButton>
        </NavLink>
      </GlobalNavigation>
      <Provider store={store}>
        <Inner />
      </Provider>
    </>
  );
}

function Inner() {
  const dispatch = useDispatch();
  const uid = sessionStorage.getItem("users");

  useEffect(() => {
    if (uid) {
      dispatch(logIn(uid));
    }
    const fetchUser = async () => {
      if (!uid) return;
      const userDoc = doc(collection(getFirestore(), "users"), uid);
      console.log(userDoc);
      try {
        const docSnapshot = await getDoc(userDoc);
        console.log(docSnapshot);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          dispatch(loggedIn(userData));
          //로그인에서 로그아웃으로 바껴야하니깐 데이터를 불러옴
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [dispatch, uid]); //0919-4 dispatch,uid를 추가해주면

  // 대괄호 안에 변수값이 들어가면 변수가 바뀔떄마다 실행되는거고, 비어있다면 한번만 실행됨
  //0920-5

  const [isModal, setIsModal] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Loading />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/quick" element={<Quick />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/edit/:board/" element={<Write />}></Route>
          <Route path="/view/:board/:view" element={<View />}></Route>
          <Route path="/write/:board" element={<Write />}></Route>
          <Route
            path="/view/:board"
            element={
              isModal && (
                <Modal
                  error="유효하지 않는 경로입니다."
                  onClose={() => {
                    navigate("/main");
                  }}
                />
              )
            }
          ></Route>
          <Route path="/member" element={<Member />}></Route>

          <Route path="/mypage" element={<MyPage />}></Route>

          <Route path="/auth" element={<Auth />}></Route>

          <Route path="/service" element={<Service />}>
            <Route path="notice" element={<Notice />}></Route>
          </Route>
          <Route path="/*" element={<Notpage />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
