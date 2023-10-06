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
  
  
  
  
  
  function TextAreaEdit({id, text, onCancel, setIsModal, setErrorMessage}) {
    
    const [editText, setEditText] = useState(text)
    
    // if(editText===undefined){
    //   setEditText("")
    // }
    
    const editComment = async () => {
      if(editText.length===0){
        setErrorMessage("댓글을 입력해주세요.");
        setIsModal(true);
        return;
      }
      if (window.confirm("정말 수정하시겠습니까?")) {
        try {
          const commentRef = doc(getFirestore(), "comments", id);
          await updateDoc(commentRef, {
            text: editText
          });
          onCancel()
        }catch(error){
          console.log(error)
        }
      }
    }
  
    return (
      <>
        <textarea
          onChange={(e) => {
              setEditText(e.target.value);
          }}
          rows={4}
          cols={40}
          value={editText}
        />   
        <button onClick={editComment}>수정완료</button>
        <button onClick={onCancel}>취소</button>
      </>
    );
  }
  
  export default TextAreaEdit;
  