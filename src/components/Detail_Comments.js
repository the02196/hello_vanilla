import {
  faAngleDown,
  faBookmark,
  faHeart,
  faLink,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { textValue } from "../store";
import TextArea from "./TextArea";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import TextAreaEdit from "./TextAreaEdit";
import Avatar from "../pages/Avatar";

/*
  #### Wrappers ####
  */

const GlobalWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: white;
`;

const CommentWrap = styled.div`
  width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: white;
  color: black;
  ul {
    li {
      display: flex;
      padding: 40px 0;
      border-bottom: 1px solid #ededed;
    }
  }
`;

const ProfileWrap = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  textarea {
    width: 100%;
    resize: none;
    box-sizing: border-box;
  }
  button {
    padding: 10px 20px;
    background-color: black;
    cursor: pointer;
    color: white;
  }
`;

const ContentTopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`;
const ContentCenterWrap = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;
const ContentBottomWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 60px;
  div {
    margin-left: 40px;
    line-height: 28px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const TopicWrap = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  background-color: #ededed;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 20px;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p.title {
      font-size: 18px;
      color: #555555;
      font-weight: 500;
    }
    p.count {
      font-size: 28px;
      font-weight: 600;
      color: #555555;
      height: 35px;
    }
    div.inner-wrap {
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      div.profile {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
      }
      p.date-from,
      p.date-wroten {
        font-size: 22px;
        font-weight: 400;
        margin-left: 8px;
      }
    }
    div.large-profile {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      margin-left: 7px;
    }
  }
`;

const TopicButtonWrap = styled.div`
  width: 80px;
  height: 100%;
  background-color: #b4b4b4;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;

/*
TextArea
*/

const FormWrapper = styled.div``;

/*
  #### Profile ####
  */

const Profile = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

/*
  #### Top Contents ####
  */

const NickName = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

const Date = styled.span`
  font-size: 18px;
`;

/*
  #### Center Contents ####
  */

const Comment = styled.p`
  font-size: 18px;
  line-height: 1.4;
`;

/*
  #### Bottom Contents ####
  */

const Count = styled.div`
  font-size: 18px;
`;

const Love = styled.div`
  margin-left: 15px !important;
`;

const Share = styled.div``;

const Reply = styled.div``;

/*
  #### Topics ####
  */

const Created = styled.div`
  width: 10%;
  align-items: flex-start !important;
  p.title {
  }
  div.inner-wrap {
    div.profile {
      background-image: url("../images/portraits/man_1.png");
    }
    div.date-wroten {
    }
  }
`;

const LastReply = styled.div`
  width: 10%;
  align-items: flex-start !important;
  div.inner-wrap {
    div.profile {
      background-image: url("../images/portraits/woman_7.png");
    }
    div.date-from {
    }
  }
`;

const Replies = styled.div`
  width: 4%;
  p.count {
  }
  p.title {
  }
`;

const Views = styled.div`
  width: 4%;
  p.count {
  }
  p.title {
  }
`;

const Users = styled.div`
  width: 4%;
  p.count {
  }
  p.title {
  }
`;

const Likes = styled.div`
  width: 4%;
  p.count {
  }
  p.title {
  }
`;

const Link = styled.div`
  width: 4%;
  p.count {
  }
  p.title {
  }
`;

const RepliedUsers = styled.div`
  width: 25%;
  flex-direction: row !important;
  justify-content: flex-start !important;
  div.large-profile:nth-child(1) {
    background-image: url("../images/portraits/woman_8.png");
  }
  div.large-profile:nth-child(2) {
    background-image: url("../images/portraits/man_4.png");
  }
  div.large-profile:nth-child(3) {
    background-image: url("../images/portraits/woman_4.png");
  }
`;

function Detail_Comments() {
  const [nickName, SetNickName] = useState("");
  const [date, setDate] = useState("");
  const [contentText, SetContentText] = useState("");
  const [heartCount, setHeartCount] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [LastReplyDate, setLastReplyDate] = useState("");
  const [repliesCount, setRepliesCount] = useState("");
  const [viewsCount, SetViewsCount] = useState("");
  const [usersCount, setUsersCount] = useState("");
  const [likesCount, setLikesCount] = useState("");
  const [linkCount, setLinkCount] = useState("");
  const [createdProfileLink, setCreatedProfileLink] = useState("");
  const [lastReplyProfileLink, setLastReplyProfileLink] = useState("");
  const [repliedUserProfileLink, setUserProfileLink] = useState("");
  const [repliedUserProfileLink2, setUserProfileLink2] = useState("");
  const [repliedUserProfileLink3, setUserProfileLink3] = useState("");
  const [post, setPost] = useState();
  const [postUid, setPostUid] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const userState = useSelector((state) => state.user);
  const [likeds, setlikeds] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
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

useEffect(()=>{
  GetDocsFromUsers();
  GetDocsFromComments();
},[])

  const getPhotoURLForMatchingIds = (commentsArray, usersArray) => {
    const matchedUsers = [];

    for (const comment of commentsArray) {
      const matchingUser = usersArray.find((user) => user.id === comment.uid);
      if (matchingUser) {
        matchedUsers.push({
          id: comment.uid,
          photoURL: matchingUser?.photoURL
            ? matchingUser.photoURL
            : "..images/portraits/default_3.png",
        });
      }
    }

    return matchedUsers;
  };

  const matchingUsers = getPhotoURLForMatchingIds(commentsArray, usersArray);

  useEffect(() => {
    const commentRef = collection(getFirestore(), "comments");

    const q = query(commentRef, orderBy("createdate", "asc"));

    const dataSnap = onSnapshot(q, (item) => {
      const fetchComment = item.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      FetchLiked();
      setComments(fetchComment);
      getPhotoURLForMatchingIds(commentsArray, usersArray);
    });
    return dataSnap;
  }, []);

  const fetchPosts = async () => {
    try {
      const q = query(
        collection(getFirestore(), "comments"),
        orderBy("createdate", "asc")
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addHeart = async (id, index) => {
    const userRef = doc(getFirestore(), "users", userState.uid);
    const userSnapshot = await getDoc(userRef);
    const userNickname = userSnapshot.data().nickname;

    // 첫 번째 콜렉션과 첫 번째 도큐먼트를 생성하기 전에 설정(?) 해놓는 함수
    const postRef = doc(getFirestore(), "comments", id);

    // const myUid = doc(postRef, "liked", userState.uid)
    // const UID = await getDoc(myUid && myUid);

    try {
      const test1 = doc(postRef, "liked", userState.uid);
      const testSnap = await getDoc(test1);
      if (testSnap.exists()) {
        await deleteDoc(doc(postRef, "liked", userState.uid));

        let copy = [...likeds];
        copy[index].totalcount -= 1;
        setlikeds(copy);
        return;
      }
      await setDoc(doc(postRef, "liked", userState.uid), {
        nickname: userNickname,
        liked: true,
      });
      let copy2 = [...likeds];
      copy2[index].totalcount += 1;
      setlikeds(copy2);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        const commentRef = doc(getFirestore(), "comments", id);
        await deleteDoc(commentRef);
        FetchLiked();
      } catch (error) {
        console.log(error);
      }
    }
  };

  /*
  #### Fetch Contents Functions
  */

  const FetchContentTop = ({ nickname, createdate }) => {
    return (
      <ContentTopWrap>
        <NickName>{nickname}</NickName>
        <Date>{createdate}</Date>
      </ContentTopWrap>
    );
  };

  const FetchContentCenter = ({ text, id }) => {
    return (
      <ContentCenterWrap>
        {editId === id ? (
          <TextAreaEdit id={id} text={text} onCancel={() => setEditId(null)} />
        ) : (
          <Comment>{text}</Comment>
        )}
      </ContentCenterWrap>
    );
  };

  const FetchContentBottom = ({ id, index }) => {
    return (
      <ContentBottomWrap>
        <Count>{likeds[index]?.totalcount}</Count>
        <Love
          style={{ cursor: "pointer" }}
          onClick={() => {
            // setHeartCount(heartCount)
            addHeart(id, index);
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </Love>
        <Share>
          <FontAwesomeIcon icon={faLink} />
        </Share>
        <Reply>
          <FontAwesomeIcon icon={faShare} />
        </Reply>
      </ContentBottomWrap>
    );
  };

  const FetchTopics = () => {
    return (
      <>
        <Created>
          <p className="title">created</p>
          <div className="inner-wrap">
            <div className="profile"></div>
            <p className="date-wroten">date</p>
          </div>
        </Created>
        <LastReply>
          <p className="title">last reply</p>
          <div className="inner-wrap">
            <div className="profile"></div>
            <p className="date-from">date</p>
          </div>
        </LastReply>
        <Replies>
          <p className="count">1</p>
          <p className="title">replies</p>
        </Replies>
        <Views>
          <p className="count">1</p>
          <p className="title">views</p>
        </Views>
        <Users>
          <p className="count">1</p>
          <p className="title">users</p>
        </Users>
        <Likes>
          <p className="count">1</p>
          <p className="title">likes</p>
        </Likes>
        <Link>
          <p className="count">1</p>
          <p className="title">link</p>
        </Link>
        <RepliedUsers>
          <div className="large-profile"></div>
          <div className="large-profile"></div>
          <div className="large-profile"></div>
        </RepliedUsers>
        <TopicButtonWrap>
          <FontAwesomeIcon icon={faAngleDown} />
        </TopicButtonWrap>
      </>
    );
  };

  const FetchComment = ({ nickname, text, createdate, profile }) => {
    return (
      <li>
        <ProfileWrap>
          <Profile src={"./images/portraits/woman_5.png"} />
        </ProfileWrap>
        <ContentWrap>
          <FetchContentTop nickname={nickname} createdate={createdate} />
          <FetchContentCenter text={text} />
          <FetchContentBottom />
          <TopicWrap>
            <FetchTopics />
          </TopicWrap>
        </ContentWrap>
      </li>
    );
  };

  const FetchReply = ({ key, i, nickname, text, createdate }) => {
    //   const [likeCount, setLikeCount] = useState(0);
    //   useEffect(() => {
    //     const fetchLikes = async () => {
    //         const count = await getLikeCount(i);
    //         setLikeCount(count);
    //     };
    //     fetchLikes();
    // }, [i]);
    return (
      <li key={i}>
        <ProfileWrap>
          <Profile />
        </ProfileWrap>
        <ContentWrap>
          <FetchContentTop nickname={nickname} createdate={createdate} />
          <FetchContentCenter text={text} />
          <FetchContentBottom id={key} index={i} />
        </ContentWrap>
      </li>
    );
  };

  const FetchTextBox = () => {
    return (
      <li>
        <ProfileWrap>
          <Avatar width={"70px"} height={"70px"} />
        </ProfileWrap>
        <ContentWrap>
          <FormWrapper method="post" onSubmit={handleSubmit}>
            <TextArea />
          </FormWrapper>
        </ContentWrap>
      </li>
    );
  };

  const TextBox = ({text}) => {
    return (
      <TextArea GetDocsFromComments={GetDocsFromComments} GetDocsFromUsers={GetDocsFromUsers} FetchLiked={FetchLiked} text={text}/>
    )
  }
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  // const viewCnt = async(board, view) => {
  //   const viewRef = doc(getFirestore(), board, view);
  //   await updateDoc(viewRef,{
  //     view : increment(1)
  //   })
  // }

  // function formateDate(data){
  //   if(data){
  //     const date = data.toDate();
  //     const year = date.getFullYear();
  //     const month = String(date.getMonth() + 1).padStart(2,"0")
  //     const day = String(date.getDate()).padStart(2, "0");
  //     return `${year}-${month}-${day}`
  //   }
  // }
  // const deletePost = async () => {
  //   if(window.confirm("정말로 삭제하시겠습니까?")){
  //     const docRef = doc(getFirestore(), board, view);
  //     await deleteDoc(docRef);
  //     alert("게시물이 삭제 되었습니다.");
  //     navigate(`/service/${board}`)
  //   }
  // }

  const FetchLiked = async () => {
    try {
      const LikeCollection = query(collection(getFirestore(), "comments"), orderBy("createdate", "asc"));
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

  // useEffect(() => {
  //   FetchLiked();
  // }, []);

  return (
    <>
      <GlobalWrap>
        <CommentWrap>
          <ul>
            <li>
              <ProfileWrap>
                <Avatar width={"70px"} height={"70px"} />
              </ProfileWrap>
              <ContentWrap>
                <FormWrapper method="post" onSubmit={handleSubmit}>
                  <TextBox />
                </FormWrapper>
              </ContentWrap>
            </li>
            <FetchComment
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod praesentium porro expedita deleniti itaque at quaerat modi, exercitationem vitae laboriosam."
              }
              nickname={"#db53632"}
              createdate={"2023.09.26"}
              profile={"../images/portraits/woman_5.png"}
            />
            {comments.map((e, i) => {
              return (
                <>
                  <li key={i}>
                    <ProfileWrap>
                      <Profile
                        src={matchingUsers[i].photoURL}
                        alt={matchingUsers[i].id}
                        key={matchingUsers[i].id}
                      />
                    </ProfileWrap>
                    <ContentWrap>
                      <FetchContentTop
                        nickname={e.nickname}
                        // createdate={e.createdate}
                      />
                      <FetchContentCenter text={e.text} id={e.id} />
                      <ContentBottomWrap>
                        <Count>{likeds[i]?.totalcount}</Count>
                        <Love
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            // setHeartCount(heartCount)
                            addHeart(e.id, i);
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </Love>
                        <Share>
                          <FontAwesomeIcon icon={faLink} />
                        </Share>
                        <Reply>
                          <FontAwesomeIcon icon={faShare} />
                        </Reply>
                        {e.uid === userState.uid && editId !== e.id && (
                          <>
                            <button onClick={() => setEditId(e.id)}>
                              수정
                            </button>
                            <button onClick={() => deleteComment(e.id)}>
                              삭제
                            </button>
                          </>
                        )}
                      </ContentBottomWrap>
                    </ContentWrap>
                  </li>
                </>
              );
            })}
          </ul>
        </CommentWrap>
      </GlobalWrap>
    </>
  );
}

export default Detail_Comments;
