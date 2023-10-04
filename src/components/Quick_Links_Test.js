
import React, { useEffect, useState } from 'react'
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
   const ListWrap = styled.div`
   width: 100%;
   background-color:${props => props.bgColor ? '#d9eee1' : '#04aa6d'};
   height: 500px;
   
   `
  const List = styled.div`
  
  margin: 0 auto;
  max-width: 1200px;  
  position: relative; 
  padding-top: 100px;
  
  >h3{
    /* background-color:#343541; */
    margin-left: 10px;
     max-width:650px; color:#111;padding:20px 20px; box-sizing:border-box;
      border-radius: 10px 10px 0 0;  display: flex; justify-content: space-between; 
      
  }
   >div{
  display: flex; position: relative;
  /* p{    background-color:${props => props.bg ? 'pink' : '#111111'};
      width: 650px; color:#00a67d; padding:30px; box-sizing: border-box;
        line-height: 1.5rem;
  }  */
   }
  img{ right: -100px; top: -60px;
     position: absolute;
     width: 480px;
     height: 300px;
 
    }
    
  `
  const Tryit = styled.a`
    text-decoration: none; display:inline-block;
    font-weight: 300; font-size: 14px;  cursor: pointer; color:#d9d9e3;
    background-color: #111111; padding: 5px 20px; border-radius: 30px;
    margin-left: 30px;

  `

  const Desc = styled.p`
   /* background-color:${props => props.bg ? '#04aa6d' : '#111111'}; */
    width: 650px; color:${props => props.Color ? '#111111' : "#fff"};
    padding:30px; box-sizing: border-box;
    line-height: 1.5rem;
  `




//   const getFaviconLink =(url) =>{
//     const urlObject = new URL(url);
//     return `${urlObject.origin}/favicon.ico`;
// }
// console.log(getFaviconLink)
  

function Quick_Links_Test() {
  const menu = CodeSite.map(obj => obj.menu)
  const menus = [...new Set(menu)]
  console.log(menus)
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuName, setMenuName] = useState("");


  // useEffect(()=>{
  //   fetchImage = async() =>{
  //     try{
  //       const respone = await axios.get("url")
  //       setImageUrl(respone.data.imageUrl);
  //     }catch(error){

  //       console.error('Error fetching image:', error);
  //     }
  //   }

  // },[])

  // if (!imageUrl) {
  //   return <div>Loading...</div>;
  // }



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
          <p onClick={()=>{setMenuName(e)}}>{e}
          
          </p>
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




    
        {
          CodeSite.filter(menuName === "" ? e => e.menu === 'Tools' : e => e.menu === menuName ).map((e,i)=>{
            return(              
              <React.Fragment key={i}>
              <ListWrap bgColor={i % 2 === 0}>
              <List>
              <h3 id={i}>{e.name} </h3>
              <div>          
              <Desc Color={i % 2 === 0}>{e.description}</Desc>
              {
                e.img &&
              <img src={`${process.env.PUBLIC_URL}/images/link/${e.img}`} alt={1} />
              }
              </div>
              <Tryit href={e.link} target='_blank'>Try it!</Tryit>
              </List>
              </ListWrap>
              </React.Fragment>       
            )
            
          })
        }



    </>
  )
};


export default Quick_Links_Test