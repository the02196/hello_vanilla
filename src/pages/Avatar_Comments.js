import React from "react";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
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
  getDocs,
  getFirestore,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

/*
    * 순서 
    
    comments 콜렉션에서 각 도큐멘트의 uid 값을 가져온다. doc, map() getdoc, data().uid
    users 콜렉션에서 각 도큐멘트 id 값을 가져와 위의 uid 값과 비교한다.
    두 값이 같으면 id 값에 해당하는 도큐멘트에 photoURL을 가져온다.
    */

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const AvatarUpload = styled.label`
  width: 50px;
  overflow: hidden;
  height: 50px;
  border-radius: 50%;
  background-color: black;
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

function Avatar_Comments() {
  const [commentsArray, setCommentArray] = useState([]);
  const [usersArray, setUsersArray] = useState([]);

  const GetDocsFromUsers = async () => {
    try {
      const ref = collection(getFirestore(), "users");
      const snapShot = await getDocs(ref);
      const array = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsersArray(array);
    } catch (error) {
      console.log(error);
    }
  };

  const GetDocsFromComments = async () => {
    try {
      const q = query(
        collection(getFirestore(), "comments"),
        orderBy("createdate", "asc")
      );
      const snapShot = await getDocs(q);
      const array = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCommentArray(array);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetDocsFromUsers();
    GetDocsFromComments();
  }, []);

  const getPhotoURLForMatchingIds = (commentsArray, usersArray) => {
    const matchedUsers = [];

    for (const comment of commentsArray) {
      const matchingUser = usersArray.find((user) => user.id === comment.uid);

      if (!matchingUser) {
        return;
      }
      matchedUsers.push({
        id: comment.uid,
        photoURL: matchingUser.photoURL,
      });
    }

    return matchedUsers;
  };

  const matchingUsers = getPhotoURLForMatchingIds(commentsArray, usersArray);

  return (
    <>
      {/* {commentsArray.map((e) => {
        return <p style={{ fontSize: "30px", color: "black" }}>{e.uid}</p>;
      })}
      {usersArray.map((e) => {
        return <p style={{ fontSize: "30px", color: "black" }}>{e.id}</p>;
      })} */}
      {matchingUsers.map((matchingUser) => (
        <img
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          src={matchingUser.photoURL}
          alt={matchingUser.id}
          key={matchingUser.id}
        />
      ))}
    </>
  );
}

export default Avatar_Comments;
