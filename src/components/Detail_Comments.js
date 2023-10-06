import {
  faAngleDown,
  faBookmark,
  faHeart,
  faLink,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useId, useState } from "react";
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
import { useNavigate } from 'react-router-dom'
import Modal from "./Modal";

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

const Pagenation = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 30px;
  button{
    padding: 20px;
  }
`

function Detail_Comments() {
  const [nickName, SetNickName] = useState("");
  const [date, setDate] = useState("");
  const [contentText, SetContentText] = useState("");
  const [heartCount, setHeartCount] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [LastReplyDate, setLastReplyDate] = useState(null);
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

  const [isModal, setIsModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage, setCommentsPerPage] = useState(5);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  const currentLikeds = likeds.slice(indexOfFirstComment, indexOfLastComment);
  
  const totalPages = Math.ceil(comments.length / commentsPerPage);
 

  const navigate = useNavigate();
  

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const TopicCommentData = async () => {
    try{
      const ref = collection(getFirestore(), "comments");
      const q = query(
        collection(getFirestore(), "comments"),
        orderBy("createdate", "desc")
      )
      const snapshot = await getCountFromServer(ref)
      const userSnapshot = await getDocs(q)
      const uids = userSnapshot.docs.map(doc => doc.data().uid);
      const uniqueUids = [...new Set(uids)];
      const totalCount = snapshot.data().count;
      setUsersCount(uniqueUids.length)
      setRepliesCount(totalCount)
      setLastReplyDate(userSnapshot.docs[0].data().createdate)
    } catch (error) {
      console.log(error);
    }
  }
  
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
  TopicCommentData();
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

  const addHeart = async (id, index) => {
    const userRef = doc(getFirestore(), "users", userState.uid);
    const userSnapshot = await getDoc(userRef);
    const userNickname = userSnapshot.data().nickname;
    const postRef = doc(getFirestore(), "comments", id);
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

  function formatDate(data){
    if(data){
        const date = data.toDate();
        const year = date.getFullYear();
        const month = String(date.getMonth()+1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`
    }
}

  const LoginCheck = (e,i) => {
    if(!userState.loggedIn){
      setIsModal(true)
    }else{
      addHeart(e,i)
    }
  }

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
          <TextAreaEdit id={id} text={text} onCancel={() => setEditId(null)} setIsModal={setIsModal} setErrorMessage={setErrorMessage}/>
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
            <p className="date-from">{LastReplyDate && formatDate(LastReplyDate)}</p>
          </div>
        </LastReply>
        <Replies>
          <p className="count">{repliesCount}</p>
          <p className="title">replies</p>
        </Replies>
        <Views>
          <p className="count">1</p>
          <p className="title">views</p>
        </Views>
        <Users>
          <p className="count">{usersCount}</p>
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

  const TextBox = ({text}) => {
    return (
      <TextArea GetDocsFromComments={GetDocsFromComments} GetDocsFromUsers={GetDocsFromUsers} FetchLiked={FetchLiked} text={text} setIsModal={setIsModal} setErrorMessage={setErrorMessage}/>
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

  const currentProfiles = matchingUsers.slice(indexOfFirstComment, indexOfLastComment);
  
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
            {currentComments.map((e, i) => {
              return (
                <>
                  {e.uid === userState.uid &&
                    <span>작성자</span>
                  }
                  <li key={i}>
                    <ProfileWrap>
                      <Profile
                        src={currentProfiles[i]?.photoURL}
                        alt={currentProfiles[i]?.id}
                        key={currentProfiles[i]?.id}
                      />
                    </ProfileWrap>
                    <ContentWrap>
                      <FetchContentTop
                        nickname={e.nickname}
                      />
                      <FetchContentCenter text={e.text} id={e.id} />
                      <ContentBottomWrap>
                        <Count>{currentLikeds[i]?.totalcount}</Count>
                        <Love
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            LoginCheck(e.id, i)
                          }}
                        >
                          {isModal && 
                            <Modal 
                              error={errorMessage}
                              onClose={() => {setIsModal(false); navigate(!userState.loggedIn && '/login');}} 
                            />
                          }
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
            <Pagenation>
              {Array(totalPages).fill().map((_, index) => (
                <button key={index + 1} onClick={ () => {
                  handlePageChange(index + 1)    
                }
                }>
                  {index + 1}
                </button>
              ))}
            </Pagenation>
          </ul>
        </CommentWrap>
      </GlobalWrap>
    </>
  );
}

export default Detail_Comments;