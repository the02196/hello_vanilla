import React from 'react'
import styled from 'styled-components'

/* 
Person 
*/

const PersonLeft = styled.div`
    position: absolute;
    top: -35px;
    display: flex;
    flex-direction: column;
`

const PersonRight = styled.div`
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

function CreatePersonLookRight({position}) {
  return(
    <PersonRight style={{left: `${position * 100}px`}}>
      <PersonHead></PersonHead>
      <PersonBody></PersonBody>
    </PersonRight>
  )
}

function CreatePersonLookLeft({position}) {
  return(
    <PersonLeft style={{right: `${position * 100}px`}}>
      <PersonHead></PersonHead>
      <PersonBody></PersonBody>
    </PersonLeft>
  )
}

/* 
Message-Box
*/


function Greeting() {
  return (
    <>
      <CreatePersonLookRight position={"1.5"} />
      <CreatePersonLookRight position={"5.6"} />
      <CreatePersonLookLeft position={"2"}/>
    </>
  )
}

export default Greeting