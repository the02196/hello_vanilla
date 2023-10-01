import React, { useEffect, useState } from "react";
import MyPage_Test from "../components/MyPage_Test";
import { FetchPost } from "./service/Notice";
import {
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function MyPage() {
  const userState = useSelector((state) => state.user);
  const [likes, setlikes] = useState([]);
  const [likeds, setlikeds] = useState([]);
  const [heartCount, setHeartCount] = useState(0)
  const [comments, setComments] = useState([]);
  const [documentId, setDocumentId] = useState([]);
  const [name, setName] = useState([]);
  const [likedParam, setLikedParam] = useState([]);

  
  useEffect(() => {
    const FetchLiked = async () => {
      try {
        const LikeCollection = collection(getFirestore(), "like");
        const likeSnapShot = await getDocs(LikeCollection);
    
        const likedArray = await Promise.all(
          likeSnapShot.docs.map(async (doc) => {
            const likedCollection = collection(doc.ref, "liked");
            const likedSnapshot = await getDocs(likedCollection);
            const totalCount = likedSnapshot.size;
    
            return {
              id: doc.id,
              totalcount: totalCount,
              ...doc.data(),
            };
          })
        );
    
        setlikeds(likedArray);
      } catch (error) {
        alert(error);
      }
    };

    const fetchPosts = async () => {
      try {
        const likeCollection = collection(getFirestore(), "like")
        const likeSnapShot = await getDocs(likeCollection)
        const likeArray = likeSnapShot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data(),
        }))
        setlikes(likeArray);


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
    FetchLiked();
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


  
  // const addHeart = async (id) => {
  //   const userNickname = userState.nickname;

  //   const postRef = collection(getFirestore(), "like", id);
  //   const expensesCol = doc(postRef, 'liked');
  //   const snapshot = await getCountFromServer(expensesCol);
  //   const totalCount = snapshot.data().count;
  //   try {
  //     const test1 = doc(postRef, 'liked', userState.uid);
  //     const testSnap = await getDoc(test1)
  //     if(testSnap.exists()){
  //       await deleteDoc(doc(postRef, "liked", userState.uid));   
  //       setHeartCount(totalCount)
  //       return;
  //     }
  //     await setDoc(doc(postRef, "liked", userState.uid), {
  //       nickname: userNickname,
  //       liked: true
  //     });
  //     setHeartCount(totalCount)
      
      

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const addHeart = async (id, index) => {
    const userRef = doc(getFirestore(), "users", userState.uid);
    const userSnapshot = await getDoc(userRef);
    const userNickname = userSnapshot.data().nickname;

    // 첫 번째 콜렉션과 첫 번째 도큐먼트를 생성하기 전에 설정(?) 해놓는 함수
    const postRef = doc(getFirestore(), "like", id);
    
    const myUid = doc(postRef, "liked", userState.uid)
    const UID = await getDoc(myUid && myUid);

    let copy;
    let copy2;
    
    try {
      const test1 = doc(postRef, 'liked', userState.uid);
      const testSnap = await getDoc(test1)
      if(testSnap.exists()){
        await deleteDoc(doc(postRef, "liked", userState.uid));   
       
        copy = likeds[index] = likeds[index].totalcount - 1
        setlikeds(...copy)
        return;
      }
      await setDoc(doc(postRef, "liked", userState.uid), {
        nickname: userNickname,
        liked: true
      });
      copy2 = likeds[index] = likeds[index].totalcount + 1
      setlikeds(...copy2)

    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      {likes.map((e, i) => {
        return (
          <>
            <p style={{ color: "black"}}>
              {e.id} 요게 댓글이에요~
            </p>
              <button onClick={()=>{deletePost(e.id)}} style={{marginBottom: "20px", fontSize: "20px", marginRight: "20px"}}>삭제 버튼 </button>
              <button onClick={()=>{addHeart(e.id, i)}} style={{marginBottom: "20px", fontSize: "20px"}}>하트 버튼</button>
              {likes[i].id}
             <h2>{likeds[i]?.totalcount}</h2>
          </>
        );
      })}
      <MyPage_Test />
    </>
  );
}

export default MyPage;
