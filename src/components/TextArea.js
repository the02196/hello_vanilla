import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";





function TextArea() {
  const memberProfile = useSelector((state) => state.user);
  const [commentValue, setCommentValue] = useState("");
  const [postData, setPostData] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState("");
  const [postUid, setPostUid] = useState();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState("");

  // useEffect(() => {
  //   if (postData) {
  //     setCommentValue(postData.content);
  //   }
  // }, [postData]);

  // useEffect(() => {
  //   if ("comments" && memberProfile.uid) {
  //     //수정버튼 눌렀다는 뜻
  //     const fetchData = async () => {
  //       const postRef = doc(getFirestore(), "comments", memberProfile.uid);
  //       const postSnapShot = await getDoc(postRef);
  //       if (postSnapShot.exists()) {
  //         setIsModal(false);
  //         setPostData(postSnapShot.data());
  //         // setTxtTitle(postSnapShot.data().title)
  //         setPostUid(postSnapShot.data().uid);
  //         console.log(postSnapShot.data().uid);
  //       } else if (postSnapShot.data().uid !== memberProfile.uid) {
  //         setIsModal(true);
  //         setMessage("해당 문서가 존재하지 않습니다.");
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [memberProfile.uid]);

  // const dataSubmit = async () => {
  //   if (commentValue.length === 0) {
  //     setIsModal(!isModal);
  //     setMessage("내용을 입력해주세요");
  //     return;
  //   }
  
  //   try {
  //     if (commentValue !== 0) {
  //       // 댓글 수정시 필드의 프로퍼티인 value의 값을 업데이트 하는 과정
  //       const postRef = doc(getFirestore(), "comments", memberProfile.uid);
  //       await updateDoc(postRef, {
  //         value: commentValue,
  //       });
  
  //       alert("게시글이 성공적으로 등록되었습니다.");
  //     } else {
  //       // 최초 댓글 등록 시, comments 콜렉션의 도큐멘트 = uid 값으로 이름이 지정되어있는 = 안의 필드에 프로퍼티 네임 값과 value 값을 넣는 과정
  //       await addDoc(collection(getFirestore(), "comments"), {
  //         //setDoc은 지정 user만들어감 addDoc은 랜덤user로 추가됨
  //         value: commentValue,
  //         view: 1,
  //         uid: memberProfile.uid,
  //         name: memberProfile.data.name,
  //         email: memberProfile.data.email,
  //         nickname: memberProfile.data.nickname,
  //         timestamp: serverTimestamp(),
  //       });
  //       alert("게시글이 성공적으로 등록되었습니다.");
  //     }
  
  //     //! page의 y값을 구해서 댓글 등록 시, 최하단으로 내리는 로직이 필요합니다.
  //   } catch (error) {
  //     setIsModal(!isModal);
  //     setMessage(error);
  //   }
  // };



  const addComment = async () =>{
    
    // const postRef = doc(getFirestore(), "comments", memberProfile.uid);
    try {
      await addDoc(collection(getFirestore(),"comments"), {
        text: commentValue,
        uid : memberProfile && memberProfile.uid,
        nickname : memberProfile && memberProfile.data.nickname,
        createdate : serverTimestamp(),
        lastreply: 0,
        replies: 0,
        views: 0,
        users: 0,
        likes: 0,
        links: 0
      })
    }
    catch(error){
      console.log(error)
    }
  }


  // const addReply = () =>{
  //   const postRef = doc(getFirestore(), "comments", "여기 누른 댓글의 uid 값이 들어가야 됨");
  //   const commentRef = collection(postRef, "comments");
  //   addDoc(commentRef, {
  //     uid : memberProfile && memberProfile.uid,
  //     nickname : memberProfile && memberProfile.data.nickname,
  //     createdate : serverTimestamp(),
  //     text: commentValue
      
      
  //   })
  // }

  return (
    <>
    <textarea
      onChange={(e) => {
        setCommentValue(e.target.value);
      }}
      name="postContent"
      placeholder="댓글을 입력하세요!"
      rows={4}
      cols={40}
      value={commentValue}
    />
    <button onClick={addComment}>보내기</button>
    </>
  );
}

export default TextArea;
