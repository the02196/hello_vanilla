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

const Profile = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${(props) => props.profile});
  background-position: center;
  background-size: cover;
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

  const getComments = async () => {
    const commentsSnapshot = await getDocs(
      collection(getFirestore(), "comments")
    );
    const comments = commentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return comments;
  };

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getComments();
      setComments(data);
    };
    fetchComments();
  }, []);

  const showLike = async () => {
    const commentRef = doc(getFirestore(), "comments", userState.uid);
    const expensesCol = collection(commentRef, 'liked');
    const snapshot = await getCountFromServer(expensesCol);
    const totalCount = snapshot.data().count;
    try{
      setHeartCount(totalCount);
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    showLike()
  },[])

  const toggleLike = async (commentId, userId) => {
    const commentRef = doc(getFirestore(), "comments", commentId);
    // const commentSnapshot = await getDoc(commentRef);
    // const commentData = commentSnapshot.data();

    const expensesCol = collection(commentRef, 'liked');
    const snapshot = await getCountFromServer(expensesCol);
    const totalCount = snapshot.data().count;
    try {
      const test1 = doc(commentRef, "liked", userState.uid);
      const testSnap = await getDoc(test1);
      if (testSnap.exists()) {
        await deleteDoc(doc(commentRef, "liked", userState.uid));
        setHeartCount(totalCount);
        return;
      }
      await setDoc(doc(commentRef, "liked", userState.uid), {
        liked: true,
      });
      setHeartCount(totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const commentRef = collection(getFirestore(), "comments");

    const q = query(commentRef, orderBy("createdate", "asc"));

    const dataSnap = onSnapshot(q, (item) => {
      const fetchComment = item.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(fetchComment);
    });
    return dataSnap;
  }, []);

  const getLikeCount = async (commentId) => {
    const commentRef = doc(getFirestore(), "comments", commentId);
    const likesCollection = collection(commentRef, "like");
    const likesSnapshot = await getDocs(likesCollection);
    return likesSnapshot.docs.length;
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

  const FetchContentCenter = ({ text }) => {
    return (
      <ContentCenterWrap>
        <Comment>{text}</Comment>
      </ContentCenterWrap>
    );
  };

  const FetchContentBottom = ({ onToggleLike, heartCount }) => {
    return (
      <ContentBottomWrap>
        <Count>{heartCount}</Count>
        <Love
          style={{ cursor: "pointer" }}
          onClick={toggleLike}
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
          <Profile profile={profile} />
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

  const FetchReply = ({ i, nickname, text, createdate }) => {
    const [likeCount, setLikeCount] = useState(0);
    useEffect(() => {
      const fetchLikes = async () => {
        const count = await getLikeCount(i);
        setLikeCount(count);
      };
      fetchLikes();
    }, [i]);
    return (
      <li key={i}>
        <ProfileWrap>
          <Profile />
        </ProfileWrap>
        <ContentWrap>
          <FetchContentTop nickname={nickname} createdate={createdate} />
          <FetchContentCenter text={text} />
          <FetchContentBottom
            onToggleLike={() => toggleLike(i)}
            heartCount={heartCount}
          />
        </ContentWrap>
      </li>
    );
  };

  const FetchTextBox = () => {
    return (
      <li>
        <ProfileWrap>
          <Profile />
        </ProfileWrap>
        <ContentWrap>
          <FormWrapper method="post" onSubmit={handleSubmit}>
            <TextArea />
          </FormWrapper>
        </ContentWrap>
      </li>
    );
  };

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

  return (
    <>
      <GlobalWrap>
        <CommentWrap>
          <ul>
            <FetchTextBox />
            <FetchComment
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod praesentium porro expedita deleniti itaque at quaerat modi, exercitationem vitae laboriosam."
              }
              nickname={"#db53632"}
              createdate={"2023.09.26"}
              profile={"../images/portraits/woman_5.png"}
            />
            {comments.map((e) => (
              <FetchReply
                key={e.id}
                text={e.text}
                nickname={e.nickname}
                i={e.id}
                // onToggleLike={() => toggleLike}
              ></FetchReply>
            ))}
          </ul>
        </CommentWrap>
      </GlobalWrap>
    </>
  );
}

export default Detail_Comments;
