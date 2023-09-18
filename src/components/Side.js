import React, { useState } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'


const Menu = styled.div`
background-color: #111111;
position: fixed;
width: 200px;
height: 1200px;
margin-left: 40px;
border-radius: 100px;
top: 0;  
ul{
  padding: 80px 45px;
}
li{
  cursor: pointer;

text-align: center;
color:#fff;
line-height: 2;
>a{
}
}
`
const AccordionCnt = styled.div`
font-size: 14px;
color: #8e8e8e;
`

function Side() {
  
  const Menus = [
    {
      title: "menu1",
      link : "quick/menu1"
    },
    {
      title: "menu2",
      link : "quick/menu2"
    },
    {
      title: "menu3",
      link : "quick/menu3"
    },
    {
      title: "menu4",
      link : "quick/menu4"
    },
    {
      title: "menu5",
      link : "quick/menu5"
    }
    
    ]
   const MenuClick = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
      
    }
  };
  const [activeMenu, setActiveMenu] = useState(null);


  return (
    <>
   <Menu>
      <ul>
      {Menus.map((menu, index) => (
        <li key={index} onClick={() => MenuClick(index)}
        className={activeMenu === index ? 'active' : ''}>
        {menu.title}
       
          {/* <NavLink to={`/${menu.link}`}>
          </NavLink> */}
        {activeMenu === index && (
            <AccordionCnt>
              {
                Array(5).fill("content").map((e,i)=>{
                  return (
                    <Link to={i} spy={true} smooth={true}>
                      <p>{e}{i+1}</p>

                    </Link>
                  )
                })
              }
            </AccordionCnt>)}
        </li>

      ))}
      </ul>
    </Menu>
    </>
  )
}

export default Side