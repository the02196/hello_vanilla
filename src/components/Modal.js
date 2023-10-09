import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Button =styled.button`
 width: 100%;
 padding: 10px;
 background-color: black;
 /* border-radius: 5px; */
 border: none;
 cursor: pointer;
 color: #fff;

`
const ModalBackground =styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255,255,255,0.3);
  z-index: 999;
  display: flex; justify-content: center; align-items: center;
`
const ModalContent =styled.div`
 flex-basis: 360px;
 background-color: #f7fcfc;
 padding: 60px 20px 40px;
 /* border-radius: 8px; */
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 >svg{
  flex-basis: 100%;
  font-size: 80px;
  color:red;

 }
 >p{
  font-size: 16px;
  font-weight: bold;
  margin:24px 0;

 }

`
function Modal({error,onClose}) {

  return (
     <>
      <ModalBackground> 
        <ModalContent>
          <FontAwesomeIcon icon={faTriangleExclamation}/>
          <p>{error}</p>
          <Button onClick={onClose}>확인</Button>
        </ModalContent>
      </ModalBackground>
    </>
  )
}

export default Modal