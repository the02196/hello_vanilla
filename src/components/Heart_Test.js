import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const db = getFirestore();


function Heart_Test() {
  const userState = useSelector((state) => state.user);
  const [one, setOne] = useState("one");
  const [two, setTwo] = useState("two");
  const [three, setThree] = useState("three");
  const [heartCount, setHeartCount] = useState(0)

  const addHeart = async (number) => {
    const userRef = doc(getFirestore(), "users", userState.uid);
    const userSnapshot = await getDoc(userRef);
    const userNickname = userSnapshot.data().nickname;

    // 첫 번째 콜렉션과 첫 번째 도큐먼트를 생성하기 전에 설정(?) 해놓는 함수
    const postRef = doc(getFirestore(), "like", number);
    
    const myUid = doc(postRef, "liked", userState.uid)
    const UID = await getDoc(myUid && myUid);
    

    const expensesCol = collection(postRef, 'liked');
    const snapshot = await getCountFromServer(expensesCol);
    const totalCount = snapshot.data().count;
    
    try {
      const test1 = doc(postRef, 'liked', userState.uid);
      const testSnap = await getDoc(test1)
      if(testSnap.exists()){
        await deleteDoc(doc(postRef, "liked", userState.uid));   
        setHeartCount(totalCount)
        return;
      }
      await setDoc(doc(postRef, "liked", userState.uid), {
        nickname: userNickname,
        liked: true
      });
      setHeartCount(totalCount)
      
      

    } catch (error) {
      console.log(error);
    }
  };




  return (
    <>
      <div style={{ fontSize: "200px" }} onClick={addHeart}>
        Heart_Test
        {heartCount}
      </div>
      <div
        style={{ fontSize: "200px" }}
        onClick={() => {
          addHeart(one);
        }}
      >
        One
      </div>
      <div
        style={{ fontSize: "200px" }}
        onClick={() => {
          addHeart(two);
        }}
      >
        Two
      </div>
      <div
        style={{ fontSize: "200px" }}
        onClick={() => {
          addHeart(three);
        }}
      >
        Three
      </div>
    </>
  );
}

export default Heart_Test;
