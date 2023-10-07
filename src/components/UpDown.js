import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll} from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const UpDownWrap = styled.div`
position: fixed;
bottom: 30px;
right: 40px;
width: 50px;
height: 50px;
cursor: pointer;
text-align: center;
background-color: #111;

;

`
const Up = styled.div`
  width: 50px;height: 25px; 
  line-height: 1.5;
  &:hover{
    background-color: lightgray;
  }
  
`
const Down = styled.div`
  width: 50px;height: 25px;
line-height: 1.5;

  &:hover{
      background-color: lightgray;
    }
`



function UpDown() {

  const scrollToTop = () =>{
    scroll.scrollToTop();
  }
  const scrollToBottom = () =>{
    const documentHeight = document.documentElement.scrollHeight;
    scroll.scrollTo(documentHeight)
  }

  return (
    <> 
      <UpDownWrap>
        
        <Up onClick={scrollToTop}><FontAwesomeIcon icon={faAngleUp} color='white'/></Up>
        <Down onClick={scrollToBottom}><FontAwesomeIcon icon={faAngleDown} color='white' /></Down>
      </UpDownWrap>    
    </>
  )
}

export default UpDown