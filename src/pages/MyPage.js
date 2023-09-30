import React, { useEffect, useState } from "react";
import MyPage_Test from "../components/MyPage_Test";
import { FetchPost } from "./service/Notice";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { Navigate } from "react-router-dom";

function MyPage() {
  const [comments, setComments] = useState([]);
  const [documentId, setDocumentId] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(
          collection(getFirestore(), "comments")
          // orderBy("timestamp", "desc")
        );
        //desc - 내림차순 / asc -오름차순
        const snapShot = await getDocs(q); //데이터 다 가져오는건 snapShot으로 해야함 무조건
        const postArray = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //가져온 데이터를 반복문을 돌림 , id값은 임의로 데이터 값으로 추가해서 나오고 원래 데이터도 같이 나옴
        setComments(postArray);
        console.log(postArray);
        // console.log(snapShot)
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  if (comments.length === 0) {
    return;
  } // 데이터에 값이 없다면 로딩중으로 뜨게 만들기(로딩되고 있는 그림을 넣어보기 loading.io 사이트 참조하기)

  if (comments.length === 0) {
    return <div>로딩중</div>;
  } // 데이터에 값이 없다면 로딩중으로 뜨게 만들기(로딩되고 있는 그림을 넣어보기 loading.io 사이트 참조하기)


  const deletePost = async (id) => {
    if(window.confirm("정말로 삭제하시겠습니까?")){
      const docRef = doc(getFirestore(), "comments", id);
      await deleteDoc(docRef);
      alert("게시물이 삭제 되었습니다.");
    }else{

      
    }
  }
  return (
    <>
      {comments.map((e) => {
        return (
          <>
            <p style={{ color: "black"}}>
              {e.text} 요게 댓글이에요~
            </p>
              <button onClick={()=>{deletePost(e.id)}} style={{marginBottom: "20px"}}>버튼 = </button>
          </>
        );
      })}
      <MyPage_Test />
    </>
  );
}

export default MyPage;
