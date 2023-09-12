import React from 'react'
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
`


/* 
Like
*/
const Like = styled.span`
    font-family: 'Inter';
    width: 20px;
    height: 20px;
    display: inline-block;
    position: absolute;
    bottom: 6px;
    right: 8px;
    background-color: pink;
    border-radius: 50%;
    background-image: url("../images/greeting/heart.png");
    filter: saturate(2);
    background-position: center;
    background-size: contain;
`


/* 
Message-Box
*/

const Message = styled.p`
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 600;
    margin-right: 10px;
`

const MessageBoxLeft = styled.div`
    width: 200px;
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
`
const MessageBoxRight = styled.div`
    width: 200px;
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
`
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
`

const PersonLeft = styled.div`
    position: absolute;
    top: -35px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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

function CreatePersonLookLeft({position, message}) {
  return(
    <PersonRight style={{left: `${position * 100}px`}}>
      <PersonHead>
        <TriangleLeft></TriangleLeft>
        <MessageBoxLeft>
          <Profile></Profile>
          <Message>{`"${message}"`}</Message>
          <Like></Like>
        </MessageBoxLeft>   
      </PersonHead>
      <PersonBody></PersonBody>
    </PersonRight>
  )
}

function CreatePersonLookRight({position, message}) {
  return(
    <PersonLeft style={{right: `${position * 100}px`}}>
      <PersonHead>
        <TriangleRight ></TriangleRight>
        <MessageBoxRight>
          <Profile></Profile>
          <Message>{`"${message}"`}</Message>
          <Like></Like>
        </MessageBoxRight>   
      </PersonHead>
      <PersonBody></PersonBody>
    </PersonLeft>
  )
}



function Greeting() {
  return (
    <>
      <CreatePersonLookRight position={"1.5"} message={"반가워요!"}/>
      <CreatePersonLookRight position={"5.6"} message={"바닐라 유니버스로!"}  />
      <CreatePersonLookLeft position={"2"} message={"자, 모두 출발!"} />
    </>
  )
}

export default Greeting