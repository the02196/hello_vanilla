import React from 'react'
import { styled } from 'styled-components'

  const Menu = styled.div`
  background-color: #111111;
  width: 200px;
  height: 1200px;
  margin-left: 40px;
  margin-top: 90px;
  border-radius: 100px;  
  ul{
    padding: 80px 45px;
  }
  li{
  color:#fff;
  text-align: center;
  line-height: 2;
  }
  `

function Quick_Links_Test() {

  return (
    <>
    <Menu>
      <ul>
        {
          Array(5).fill("Menu ").map((e,i)=>{
            return (
              <li>{e}{i+1}</li>
            )
          })
        }
      </ul>
    </Menu>
    
    </>
  )
}

export default Quick_Links_Test