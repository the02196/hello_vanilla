import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Link } from 'react-scroll'
import { styled } from 'styled-components'
import {CodeSite} from "../data/data"

const Content = styled.div`
  
  margin-top: 90px;
  display: flex;
  `
const Menu = styled.div`
transform: ${({ isOpen }) => (isOpen ? "translateX(0%)" : "translateX(-100%)")};
transition: transform 0.3s ease-in-out;
background-color: #111111;
position: fixed;
width: 200px;
height: 1200px;
border-radius: 100px;

ul {
  padding: 80px 45px;
}
li {
  cursor: pointer;
  color: #fff;
  text-align: center;
  line-height: 2;
  > p {
    color: #fff;
  }
}

@media (min-width: 961px) {
  transform: translateX(0%); /* 960px 초과에서는 메뉴를 항상 보여줍니다 */
}
@media (max-width: 960px) {
    z-index: 99; top: 0; border-radius: 0px;
  }

`;
  const MenuButton = styled.div`
  display: none; /* 기본적으로 햄버거 버튼을 숨깁니다 */
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 100;

  
  @media (max-width: 960px) {
    display: block; /* 960px 이하에서만 햄버거 버튼을 보여줍니다 */
  }

  div {
    width: 30px;
    height: 3px;
    background-color: ${({ isOpen }) => (isOpen ? "#fff" : "#111")};
    transition: all 0.3s;
    margin: 5px 0;
  }
`

  const AccordionCnt = styled.div`
  font-size: 14px;
  color: #8e8e8e;
  `

function Quick_Links_Menu() {
  const menu = CodeSite.map(obj => obj.menu)
  const menus = [...new Set(menu)]
  console.log(menus)
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const MenuClick = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
      
    }
  };
  return(
    <>
    <Content>
    <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      {
        Array(3).fill().map(e =>{
          return(
            <div></div>
          )
        })
      }
    </MenuButton>
    <Menu isOpen={isOpen}>
      <ul>
      {
      menus.map((e, index) => {      
        return (
        <li
          key={index}
          onClick={() => MenuClick(index)}
          className={activeMenu === index ? 'active' : ''}
        > 
          <NavLink to={'/tutorial'}>{e}
          </NavLink>
          {activeMenu === index && (
            <AccordionCnt>
              {               
                CodeSite.filter(el => el.menu === e).map((item,i)=>{
                  return (
                    <Link to={i} spy={true} smooth={true} offset={-50}>
                      <p>{item.name}</p>
                    </Link>
                  )
                })
              }
            </AccordionCnt>)}
              </li>
      )})
      }
      </ul>
    </Menu>
    </Content>
    </>
  )
}

export default Quick_Links_Menu