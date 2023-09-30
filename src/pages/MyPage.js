import React, { useEffect, useState } from "react";
import MyPage_Test from "../components/MyPage_Test";
import { FetchPost } from "./service/Notice";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";

function MyPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(
          collection(getFirestore(), "notice"),
          orderBy("timestamp", "desc")
        );
        //desc - 내림차순 / asc -오름차순
        const snapShot = await getDocs(q); //데이터 다 가져오는건 snapShot으로 해야함 무조건
        const postArray = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //가져온 데이터를 반복문을 돌림 , id값은 임의로 데이터 값으로 추가해서 나오고 원래 데이터도 같이 나옴
        setPosts(postArray);
        console.log(postArray);
        // console.log(snapShot)
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <div>로딩중</div>;
  } // 데이터에 값이 없다면 로딩중으로 뜨게 만들기(로딩되고 있는 그림을 넣어보기 loading.io 사이트 참조하기)

  return (
    <>
      {posts.map((e) => {
        return (
          <p style={{ color: "black", position: "relative", zIndex: "999" }}>
            {e.title}
          </p>
        );
      })}
      <MyPage_Test />
    </>
  );
}

export default MyPage;
