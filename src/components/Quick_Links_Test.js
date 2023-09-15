import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { styled } from 'styled-components'



  const Content = styled.div`
  a{text-decoration:none; color:#000;}
  margin-top: 90px;
  display: flex;
  `
  const Menu = styled.div`
  background-color: #111111;
  position: fixed;
  width: 200px;
  height: 1200px;
  margin-left: 40px;
  border-radius: 100px;  
  ul{
    padding: 80px 45px;
  }
  li{
    cursor: pointer;
  
  text-align: center;
  line-height: 2;
  }
  a{
    color:#fff;
  }
  `
  const AccordionCnt = styled.div`
  font-size: 14px;
  color: #e9e9e9;
  `
  const ContentList = styled.div`
   margin: 0 auto;
   max-width: 1200px;  
   position: relative;
   height: 500px;
   h3{margin-top: 150px;}
   >div{
    display: flex;
    p{max-width: 650px;} 
    img{top: -100px; right: -10px;
       position: absolute;
       
      }
   }
    
  `

function Quick_Links_Test() {
  // const menus = [
  //   {
  //     title: "menu1",
  //     link : "quick/menu1"
  //   },
  //   {
  //     title: "menu2",
  //     link : "quick/menu2"
  //   },
  //   {
  //     title: "menu3",
  //     link : "quick/menu3"
  //   },
  //   {
  //     title: "menu4",
  //     link : "quick/menu4"
  //   },
  //   {
  //     title: "menu5",
  //     link : "quick/menu5"
  //   }
 
  //  ]
  const [activeMenu, setActiveMenu] = useState(null);
  const menus = Array(5).fill("Menu");
  
  const MenuClick = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
      
    }
  };

  return (
    <>
  <Content>
    <Menu>
      <ul>
      {menus.map((menu, index) => (
        <li
          key={index}
          onClick={() => MenuClick(index)}
          className={activeMenu === index ? 'active' : ''}
        >
        {menu}{index+1}
       
          {/* <NavLink to={`/${menu.link}`}>
          </NavLink> */}
          {activeMenu === index && (
            <AccordionCnt>
              {
                Array(5).fill("content").map((e,i)=>{
                  return (
                     <p>{e}{i+1}</p>
                  )
                })
              }
            </AccordionCnt>)}
              </li>

      ))}
      </ul>
    </Menu>
    </Content>
  {
    Array(5).fill().map((e,i)=>{
      return(
        <ContentList id="1">
     
        <h3>{i+1}</h3>
        <div>          
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero velit expedita rem cupiditate nobis consequuntur, exercitationem aliquam! Ullam eveniet distinctio voluptatum, delectus nesciunt, maxime, earum quidem sequi repudiandae saepe perferendis.</p>
        <img src="https://via.placeholder.com/480x280" alt="1" />
        </div>
          
        
          
      </ContentList>
      )

    })
  }
 
      

  

    
    </>
  )
}

export default Quick_Links_Test