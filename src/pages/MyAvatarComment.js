import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { Link, NavLink } from "react-router-dom";

const AvatarListWrap = styled.ul`
    height: ${(props)=> props.isActive === true ? "110px" : "0"};
    overflow: hidden;
    position: relative;
    width: 96%;
    top: -50px;
    transition: 0.3s;
    display: flex;
    flex-direction: column; 
    justify-content: flex-end;
    border: 1px solid white;
    align-items: center;
    background-color: black;
`;

const Logout = styled.li`
  margin-bottom: 15px;
`;

const Mypage = styled.li`
 margin-bottom: 10px;
`;

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const AvatarWrap = styled.label`
  width: 70px;
  overflow: hidden;
  height: 70px;
  border-radius: 50%;
  /* cursor: pointer; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 900;
  svg {
    color: white;
    width: 50px;
    height: 50px;
  }
`;
const AvatarImg = styled.img`
  width: 100%;
`;
const AvatarInput = styled.input`
  display: none;
`;
const Name = styled.span`
  font-size: 22px;
`;

function MyAvatarComment({ width, height }) {
  const [isActive, setIsActive] = useState(false);
  const [nickName, setNickName] = useState("");
  const [URL, setURl] = useState("");
  const userState = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState(userState ? URL : null);

  const onAvatarChange = async (e) => {
    const { files } = e.target;
    if (!userState) return;
    if (files && files.length === 1) {
      const file = files[0];
      const locationRef = ref(getStorage(), `avatars/${userState.uid}`);
      const result = await uploadBytesResumable(locationRef, file);
      const avatarUrl = await getDownloadURL(result.ref);
      setAvatar(avatarUrl);

      const userDocRef = doc(
        collection(getFirestore(), "users"),
        userState.uid
      );

      await updateDoc(userDocRef, {
        photoURL: avatarUrl,
      });
    }
  };

  const FetchNickName = async () => {
    const userRef = doc(getFirestore(), "users", userState.uid);
    const userSnapshot = await getDoc(userRef);
    const userNickname = userSnapshot.data().nickname;
    setNickName(userNickname);
  };

  const FetchAvatar = async () => {
    const userRef = doc(getFirestore(), "users", userState.uid);
    const userSnapshot = await getDoc(userRef);
    const userAvatar = userSnapshot.data().photoURL;
    setURl(userAvatar);
  };

  useEffect(() => {
    if (!userState.uid) {
      return;
    } else {
      FetchNickName();
      FetchAvatar();
    }
  }, []);

  useEffect(() => {
    if (!userState.uid) {
      return;
    } else {
      FetchAvatar();
    }
  }, [avatar]);

  return (
    <Wrapper>
      <AvatarWrap onClick={()=>{setIsActive(!isActive)}}>
        {Boolean(URL) ? (
          <AvatarImg
            style={{ width: { width }, height: { height } }}
            src={URL}
          />
        ) : (
          <AvatarImg
            style={{ width: { width }, height: { height } }}
            src={"../images/portraits/default_7.png"}
          ></AvatarImg>
        )}
      </AvatarWrap>
      <AvatarListWrap >
       
      </AvatarListWrap>
      <AvatarInput
        onChange={onAvatarChange}
        id="avatar"
        type="file"
        accept="image/*"
      />
      {/* <Name>{nickName ?? "Anonymous"}</Name> */}
    </Wrapper>
  );
}

export default MyAvatarComment;
