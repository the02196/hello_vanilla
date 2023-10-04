import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// getDocs => 게시판 글 다 가져와야 해서 , orderBy =>순서(최신순,등록순,날짜순...) , query => 프로그래밍에서 내가 필요한 부분만 가지고 올 수 있도록 하는거

const BoardWrapper= styled.div`
  max-width: 1000px;
  margin: 50px auto;
  
`
const Title= styled.div`
 padding: 10px 20px; font-weight: bold; font-size: 24px;
`
const List= styled.ul`
 display: flex; 
 border-bottom: 1px solid #e0e0e0;
 
`
const ListItem= styled.li`
  padding: 10px 20px;
  text-align: center;
  flex-basis: 10%;
  &:nth-child(2){flex-basis: 50%;}
  &:nth-child(3){flex-basis: 20%;}
  &:nth-child(4){flex-basis: 20%;}
`

const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;

`
const Button = styled.div`
    border-radius: 0.5rem;
    margin: 20px 0;
    background-color: black;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    display: flex; align-items: center;
    outline: none; border: none;
    cursor: pointer;
    &:nth-child(1){
        background-color: black;
    }
    a{color: #fff;}
    svg{margin-right: 12px; font-size:13px;}
`


function Notice() {
  const [posts,setPosts] = useState([]);
  const memberProfile = useSelector(state => state.user);
  console.log(memberProfile)
  const fetchPosts = async () =>{
    try{

      const q = query(collection(getFirestore(),"notice"),orderBy("timestamp","desc"));
      //desc - 내림차순 / asc -오름차순
      const snapShot = await getDocs(q); //데이터 다 가져오는건 snapShot으로 해야함 무조건
      const postArray = snapShot.docs.map(doc => ({id: doc.id, ... doc.data()}))
      //가져온 데이터를 반복문을 돌림 , id값은 임의로 데이터 값으로 추가해서 나오고 원래 데이터도 같이 나옴
      setPosts(postArray)
      console.log(postArray)
      // console.log(snapShot)

    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    
    fetchPosts();
  },[])

  if(posts.length === 0){
    return <div>로딩중</div>
  } // 데이터에 값이 없다면 로딩중으로 뜨게 만들기(로딩되고 있는 그림을 넣어보기 loading.io 사이트 참조하기)

  return (
    <>
    
    <BoardWrapper>
      <Title>공지사항</Title>
      <List>
        <ListItem>번호</ListItem>
        <ListItem>제목</ListItem>
        <ListItem>작성자</ListItem>
        <ListItem>작성일</ListItem>
        <ListItem>조회수</ListItem>
      </List>
        {
          posts.map((e,i)=>{
            return(
            <List key={i}>
              <ListItem>{posts.length-i}</ListItem>
              {/* 번호를 역순으로 보여주게 할려면 최대개수 - 인덱스 번호를 하면 됨 */}
              <ListItem><Link to={`/view/notice/${e.id}`}>{e.title}</Link></ListItem>
              <ListItem>{e.nickname}</ListItem>
              <ListItem>{e.timestamp.toDate().toLocaleDateString()}</ListItem>
              {/* timestamp가 유형임.그래서 date를 이용해서 스트링 형식으로 바꿔줘야함 */}
              <ListItem>{e.view}</ListItem>
            </List>
            )
            
          })

        }
      {
        memberProfile?.data?.admin === 'true' ?
        <ButtonWrap>
        <Button><Link to="/write/notice"><FontAwesomeIcon icon={faPen}/>글쓰기</Link></Button>
      </ButtonWrap>:
      ""
      }

      
    </BoardWrapper>
    </>
  )
}

export default Notice