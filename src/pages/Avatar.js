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
import { collection, doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const AvatarUpload = styled.label`
  width: 70px;
  overflow: hidden;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
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

function Avatar({width, height}) {
  const [nickName, setNickName] = useState("");
  const [URL, setURl] = useState("")
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

      const userDocRef = doc(collection(getFirestore(), "users"), userState.uid);

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
  }

  const FetchAvatar = async () => {
    const userRef = doc(getFirestore(), "users", userState.uid);
    const userSnapshot = await getDoc(userRef);
    const userAvatar = userSnapshot.data().photoURL;
    setURl(userAvatar);
  }
  
  useEffect( () => {
    if(!userState.uid){
      return;
    }else{
      FetchNickName()
      FetchAvatar()
    }
  },[])

  useEffect(() => {
    if(!userState.uid){
      return;
    }else{
      FetchAvatar()
    }
  }, [avatar])

  return (
    <Wrapper>
      <AvatarUpload htmlFor="avatar">
        {Boolean(URL) ? (
          <AvatarImg style={{width: {width}, height: {height}}} src={URL} />
        ) : (
          <AvatarImg style={{width: {width}, height: {height}}} src={"../images/portraits/default_7.png"}></AvatarImg>
        )}
      </AvatarUpload>
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

export default Avatar;