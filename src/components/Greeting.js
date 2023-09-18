import React, { useState } from 'react'
import styled from 'styled-components'

/* 
profile
*/

const Profile = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  margin-right: 10px;
  background-image: url("../images/greeting/man_1.png");
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 1920px) {
          width: 27px;
          height: 27px;
      }
`


/* 
Like
*/

const LikeCount = styled.span`
  font-size: 11px;
  color: gray;
  margin-right: 3px;
  line-height: 20px;
`

const Like = styled.span`
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    background-image: url("../images/greeting/heart.png");
    filter: saturate(2);
    background-position: center;
    background-size: cover;
    cursor: pointer;
`

const LikeWrap = styled.span`
  display: flex;
  bottom: 6px;
  right: 8px;
  position: absolute;
`

/* 
Message-Box
*/

const Message = styled.p`
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 600;
    margin-right: 10px;
    @media screen and (max-width: 1920px) {
          font-size: 12px;
      }
`

const MessageBoxLeft = styled.div`
    width: 220px;
    height: 70px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    position: absolute;
    top: -100px;
    opacity: 1;
    left: -94px;
    @media screen and (max-width: 1920px) {
          width: 190px;
          height: 60px;
          top: -90px;
      }
`
const MessageBoxRight = styled.div`
    width: 220px;
    height: 70px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    position: absolute;
    top: -100px;
    opacity: 1;
    left: -92px;
    @media screen and (max-width: 1920px) {
          width: 190px;
          height: 60px;
          top: -90px;
      }
`

/*
Mountain
*/

const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-left: 10px solid white;
  border-right: 10px solid transparent;
  transform: rotate(90deg);
  margin-bottom: 2px;
  position: absolute;
  top:  -25px;
  left: -8px;
`;
const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-left: 10px solid white;
  border-right: 10px solid transparent;
  transform: rotate(90deg);
  margin-bottom: 2px;
  position: absolute;
  top:  -25px;
  left: -3px;
`;



/* 
Person 
*/

const PersonRight = styled.div`
    position: absolute;
    top: -35px;
    display: flex;
    flex-direction: column;
    transform: scale(0.9);
      
`

const PersonLeft = styled.div`
    position: absolute;
    top: -35px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    transform: scale(0.9);

`

const PersonHead = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: lightgray;
`

const PersonBody = styled.div`
    width: 12px;
    height: 25px;
    border-radius: 50% 50% 0% 0%;
    background-color: lightgray;
`

function CreatePersonLookLeft({position, message, bgImage, heartCount, plusHeart}) {
  return(
    <PersonRight style={{left: `${position * 100}px`}}>
      <PersonHead>
        <TriangleLeft></TriangleLeft>
        <MessageBoxLeft>
          <Profile style={{backgroundImage: `url("../images/greeting/${bgImage}")`}}></Profile>
          <Message>{`"${message}"`}</Message>
          <LikeWrap><LikeCount>{heartCount}</LikeCount><Like onClick={()=>{plusHeart(heartCount + 1)}}></Like></LikeWrap>
        </MessageBoxLeft>   
      </PersonHead>
      <PersonBody></PersonBody>
    </PersonRight>
  )
}

function CreatePersonLookRight({position, message, bgImage, heartCount, plusHeart}) {
  return(
    <PersonLeft style={{right: `${position * 100}px`}}>
      <PersonHead>
        <TriangleRight ></TriangleRight>
        <MessageBoxRight>
          <Profile style={{backgroundImage: `url("../images/greeting/${bgImage}")`}}></Profile>
          <Message>{`"${message}"`}</Message>
          <LikeWrap><LikeCount>{heartCount}</LikeCount><Like onClick={()=>{plusHeart(heartCount + 1)}}></Like></LikeWrap>
        </MessageBoxRight>   
      </PersonHead>
      <PersonBody></PersonBody>
    </PersonLeft>
  )
}


function Greeting() {

  const [heart, setHeart] = useState(542);
  const [heart_2, setHeart_2] = useState(264);
  const [heart_3, setHeart_3] = useState(894);

  return (
    <>
      <CreatePersonLookRight position={"1.5"} message={"모두 반가워요!"}  bgImage={"man_3.png"} heartCount={heart} plusHeart={setHeart}/>
      <CreatePersonLookRight position={"5.6"} message={"바닐라 유니버스로!"} bgImage={"woman_1.png"} heartCount={heart_2} plusHeart={setHeart_2}/>
      <CreatePersonLookLeft position={"2"} message={"자, 모두 출발!"} bgImage={"man_1.png"} heartCount={heart_3} plusHeart={setHeart_3}/>
    </>
  )
}

export default Greeting