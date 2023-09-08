import React, { useState } from 'react'
import { styled } from 'styled-components'

  const Content = styled.div`
  margin-top: 90px;
  display: flex;
  `
  const Menu = styled.div`
  background-color: #111111;
  width: 200px;
  height: 1200px;
  margin-left: 40px;
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
  const AccordionCnt = styled.div`
  font-size: 14px;
  color: #e9e9e9;
  `
  const ContentList = styled.div`
   margin-left: 190px;
   max-width: 1200px;  
   
   h3{margin-top: 150px;}
   div{
    display: flex;
    p{max-width: 650px;} 
    img{width: 100%; height: 100%;}
   }
    
  `

function Quick_Links_Test() {
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
          {menu} {index + 1}

          {activeMenu === index && (
            <AccordionCnt>
              Content
            </AccordionCnt>)}
            </li>
      ))}
      </ul>
    </Menu>
    <ContentList>
     
      <h3>Lorem ipsum dolor sit amet.</h3>
      <div>
        
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero velit expedita rem cupiditate nobis consequuntur, exercitationem aliquam! Ullam eveniet distinctio voluptatum, delectus nesciunt, maxime, earum quidem sequi repudiandae saepe perferendis.</p>
      <img src="https://via.placeholder.com/480x280" alt="1" />
      </div>
        
      
        
    </ContentList>
      

  </Content>

    
    </>
  )
}

export default Quick_Links_Test