import React, { useEffect } from 'react'
import { styled } from 'styled-components'

const AlphabetWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 0;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 1s;
`

const AlphabetLogo =  styled.p`
  font-family: 'Monofett', monospace;
  font-size: 75px;

`


function Alphabet() {

  const logoWrapTransform = (logoWrap) => {
    logoWrap.style.height = "100px"
  }

  useEffect(()=>{
    const logoWrap = document.querySelector(".logoWrap")
    setTimeout(() => {
      logoWrapTransform(logoWrap)
    }, 15000)
  },[])

  return (
    <>
      <AlphabetWrap className='logoWrap'>
        <AlphabetLogo>Hello Vanilla</AlphabetLogo>
      </AlphabetWrap>
    </>
  )
}

export default Alphabet