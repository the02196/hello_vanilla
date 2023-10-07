import { faAngleLeft, faAngleRight, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
// getDocs => 게시판 글 다 가져와야 해서 , orderBy =>순서(최신순,등록순,날짜순...) , query => 프로그래밍에서 내가 필요한 부분만 가지고 올 수 있도록 하는거

const Creator = styled.div`
  padding: 10px 0;
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 2000;
  top: 0;
  div {
    span {
      font-family: Fira Code;
      font-size: 16px;
      margin-left: 25px;
      color: #9d9d9d;
    }
  }
  span {
    a {
      font-size: 16px;
      margin-right: 20px;
      color: #9f9f9f;
      text-decoration: none;
    }
  }
`;


const BoardWrapper = styled.div`
  max-width: 1600px;
  margin: 50px auto;
  margin-top: 100px;
`;
const Title = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 24px;
`;
const List = styled.ul`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  border: 1px solid lightgray;
  margin: 10px 0;
  &:nth-of-type(1) {
    li {
      padding: 10px 20px;
      background-color: black;
      color: whitesmoke;
    }
  }
`;
const ListItem = styled.li`
  padding: 20px 20px;
  font-size: 19px;
  text-align: center;
  flex-basis: 10%;

  &:nth-child(2) {
    flex-basis: 50%;
  }
  &:nth-child(3) {
    flex-basis: 20%;
  }
  &:nth-child(4) {
    flex-basis: 20%;
  }
  a {
    color: black;
    font-weight: 500;
    &:visited {
      color: black;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  border-radius: 0.5rem;
  margin: 20px 0;
  background-color: black;
  padding: 0.6rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  &:nth-child(1) {
    background-color: black;
  }
  a {
    color: #fff;
  }
  svg {
    margin-right: 12px;
    font-size: 20px;
  }
`;

const Pagenation = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: ${props => (props.bold ? 'bold' : '')};

  svg{
    cursor: pointer;
  }

`
const PageButton = styled.button`
  padding: 15px;
  font-weight: ${props => (props.bold ? 'bold' : '')};

`

function Notice() {
  const [posts, setPosts] = useState([]);
  const memberProfile = useSelector((state) => state.user);
  console.log(memberProfile);
  const [bold, setBold] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(5);
  const postsPerPage = 5;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const [docCounts, SetDocCounts] = useState();
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if(pageNumber > endPage){
      setStartPage(startPage + 5);
      setEndPage(endPage + 5);
    }else if(pageNumber < endPage){
      setStartPage(startPage - 5);
      setEndPage(endPage - 5);
    }
  };

  const noticeRef = collection(getFirestore(), "notice")
  getDocs(noticeRef).then((snapshot) => {
    // console.log(snapshot.docs.length);
    SetDocCounts(snapshot.docs.length)
}).catch((error) => {
    console.error("Error fetching documents: ", error);
});
  


  const totalPages = Math.ceil(posts.length / postsPerPage);
  const prevCilck = () =>{
    if (currentPage === 1)return;
    setBold(currentPage - 1)
    setCurrentPage(currentPage - 1)
    setStartPage(startPage - 5);
    setEndPage(endPage - 5);
  }
  const nextCilck = () =>{
    if (currentPage === totalPages)return;
    setBold(currentPage + 1)
    setCurrentPage(currentPage + 1)
    setStartPage(startPage + 5);
    setEndPage(endPage + 5);

  }
  


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
  useEffect(() => {
    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <div></div>;
  } // 데이터에 값이 없다면 로딩중으로 뜨게 만들기(로딩되고 있는 그림을 넣어보기 loading.io 사이트 참조하기)

  return (
    <>
    <Creator>
        <div>
          <span>&lt;&gt; Quick Links</span>
          <span>useful sites for you</span>
        </div>
        <span>
          <NavLink style={{fontWeight: "bold"}} to={"/main"}>메인 페이지로 가기</NavLink>
        </span>
      </Creator>
      <BoardWrapper>
        <Title>공지사항</Title>
        <List>
          <ListItem>번호</ListItem>
          <ListItem>제목</ListItem>
          <ListItem>작성자</ListItem>
          <ListItem>작성일</ListItem>
          <ListItem>조회수</ListItem>
        </List>
        {currentPosts.map((e, i) => {
          return (
            <List key={i}>
              <ListItem>{docCounts - (i + (currentPage - 1) * postsPerPage)}</ListItem>
              {/* 번호를 역순으로 보여주게 할려면 최대개수 - 인덱스 번호를 하면 됨 */}
              <ListItem>
                <Link to={`/view/notice/${e.id}`}>{e.title}</Link>
              </ListItem>
              <ListItem>{e.nickname}</ListItem>
              <ListItem>{e.timestamp.toDate().toLocaleDateString()}</ListItem>
              {/* timestamp가 유형임.그래서 date를 이용해서 스트링 형식으로 바꿔줘야함 */}
              <ListItem>{e.view}</ListItem>
            </List>
          );
        })}
       <Pagenation>     
            <FontAwesomeIcon icon={faAngleLeft} onClick={prevCilck}/>
              {Array(totalPages).fill().map((_, index) => (
                <PageButton key={index + 1}
                  bold = {index+1 === bold}
                 onClick={ () => {
                 handlePageChange(index + 1);setBold(index+1)
                }
                }>
                  {index + 1}
                </PageButton>
              ))}
              <FontAwesomeIcon icon={faAngleRight} onClick={nextCilck}/>
      </Pagenation>
        {memberProfile?.data?.admin === "true" ? (
          <ButtonWrap>
            <Button>
              <Link to="/write/notice">
                <FontAwesomeIcon icon={faPen} />
                글쓰기
              </Link>
            </Button>
          </ButtonWrap>
        ) : (
          ""
        )}
      </BoardWrapper>
    </>
  );
}

export default Notice;
