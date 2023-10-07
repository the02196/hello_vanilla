import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll} from "react-scroll";
import { styled } from "styled-components";
import { CodeSite } from "../data/data";
import UpDown from "./UpDown";

const Creator = styled.div`
  padding: 10px 0;
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 2000;
  top: 0;
  div {
    span {
      font-family: Fira Code;
      font-size: 16px;
      margin-left: 25px;
      color: #9d9d9d;
    }
  }
  span {
    a {
      font-size: 16px;
      margin-right: 20px;
      color: #9f9f9f;
      text-decoration: none;
    }
  }
`;

const Wing = styled.div`
  width: 130px;
  height: 130px;
  margin: 0 auto;
  background-image: url("../images/main/wing.png");
  background-size: cover;
  filter: contrast(1.3);
  transform: rotate(-10deg);
  right: 50px;
  margin-top: 30px;

`

const Content = styled.div`
  display: flex;
  position: relative;
  background-color: whitesmoke;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Menu = styled.div`
  padding-top: 50px;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  background-color: #111111;
  top: 0;
  position: fixed;
  width: 200px;
  height: 100vh;
  z-index: 1000;
  overflow-y: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar-track{
    background-color: #111111;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #111111;
  }

  ul {
    height: 100%;
    padding: 80px 45px;
  }
  li {
    cursor: pointer;
    font-size: 21px;
    color: #fff;
    text-align: center;
    line-height: 2;
    /* p {
      font-size: 25px;
      color: #fff;
    } */
  }

  @media (min-width: 961px) {
    transform: translateX(0%);
  }
  @media (max-width: 960px) {
    z-index: 99;
    top: 0;
    border-radius: 0px;
  }
`;
const MenuButton = styled.div`
  display: none;
  /* position: absolute; */
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 100;

  @media (max-width: 960px) {
    display: block;
  }

  div {
    width: 30px;
    height: 3px;
    background-color: ${({ isOpen }) => (isOpen ? "#fff" : "#111")};
    transition: all 0.3s;
    margin: 5px 0;
  }
`;

const AccordionCnt = styled.div`
  font-size: 14px;
  color: darkgray;
`;

const AccordionMenu = styled.p`
font-weight: ${props => (props.underline ? 'bold' : '')};
`
const ListWrap = styled.ul`
  width: 100%;
  /* background-color: ${(props) => (props.bgColor ? "#efefef" : "#fff")}; */
  display: flex;
  flex-direction: column;
  li {
    padding-bottom: 100px;
    &:nth-child(1) {
      padding-top: 50px;
    }
    &:nth-child(2n + 1) {
      background-color: #efefef;
    }
    ul {
    }
  }
`;

const TextWrap = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
  > h3 {
    /* background-color:#343541; */
    color: #111;
    box-sizing: border-box;
    font-size: 30px;
  }
`;
const ImageBox = styled.div`
  margin-top: 50px;
  width: 1300px;
  height: 400px;
  background-size: cover;
  position: relative;
  opacity: 0.9;
  border: 3px solid lightgray;
`;
const List = styled.div`
  width: 100%;
  position: relative;
  padding-top: 180px;
  box-sizing: border-box;
  &:nth-child(1) {
    padding-top: 100px;
  }

  > div {
    display: flex;
    position: relative;
    /* p{    background-color:${(props) => (props.bg ? "pink" : "#111111")};
      width: 650px; color:#00a67d; padding:30px; box-sizing: border-box;
        line-height: 1.5rem;
  }  */
  }
  /* img {
    right: -300px;
    top: 50%;
    transform: translateY(-43%);
    position: absolute;
    width: 800px;
    height: 400px;
  } */
`;
const Tryit = styled.a`
  text-decoration: none;
  display: inline-block;
  font-weight: 300;
  font-size: 18px;
  width: 80px;
  text-align: center;
  cursor: pointer;
  color: whitesmoke;
  font-weight: bold;
  background-color: darkslateblue;
  padding: 8px 20px;
  border-radius: 30px;
  
`;

const Desc = styled.p`
  /* background-color:${(props) => (props.bg ? "#04aa6d" : "#111111")}; */
  /* color: ${(props) => (props.Color ? "#111111" : "#fff")}; */
  padding: 30px 0px;
  width: 100%;
  font-size: 21px;
  box-sizing: border-box;
  line-height: 3rem;
`;

//   const getFaviconLink =(url) =>{
//     const urlObject = new URL(url);
//     return `${urlObject.origin}/favicon.ico`;
// }
// console.log(getFaviconLink)

const WhiteGradientToTop = styled.div`
  width: 100%;
  height: 300px;
  position: fixed;
  opacity: 0.6;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(251, 251, 251, 0.9) 50%,
    transparent 100%
  );
  bottom: 0;
  right: 0;
`;

const GhostBox = styled.div`
  width: 200px;
  height: 100px;
`;
const Wrap = styled.div`
  display: flex;
`;



function Quick_Links_Test() {
  const menu = CodeSite.map((obj) => obj.menu);
  const menus = [...new Set(menu)];
  console.log(menus);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuName, setMenuName] = useState("");
  const [underline, setUnderline] = useState(false);



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
      <Creator>
        <div>
          <span>&lt;&gt; Quick Links</span>
          <span>useful sites for you</span>
        </div>
        <span>
          <NavLink style={{fontWeight: "bold"}} to={"/main"}>메인 페이지로 가기</NavLink>
        </span>
      </Creator>

      <Content>
        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {Array(3)
            .fill()
            .map((e) => {
              return <div></div>;
            })}
        </MenuButton>
        <Menu isOpen={isOpen}>
          <Wing />
          <ul>
            {menus.map((e, index) => {
              return (
                <li
                  key={index}
                  onClick={() => MenuClick(index)}
                  className={activeMenu === index ? "active" : ""}
                >
                  <p
                    onClick={() => {
                      setMenuName(e); {setUnderline("")}
                    }}
                  >
                    {e}
                  </p>
                  {activeMenu === index && (
                    <AccordionCnt >
                      {CodeSite.filter((el) => el.menu === e).map((item, i) => {
                        return (
                          <Link to={i} spy={true} smooth={true} offset={-130}>
                            <AccordionMenu 
                            underline = {i === underline}
                            onClick={()=>{setUnderline(i)}}>{item.name}</AccordionMenu>
                          </Link>
                        );
                      })}
                    </AccordionCnt>
                  )}
                </li>
              );
            })}
          </ul>
        </Menu>
      </Content>
      <Wrap>
        <GhostBox />
        <ListWrap>
          {CodeSite.filter(
            menuName === ""
              ? (e) => e.menu === "학습"
              : (e) => e.menu === menuName
          ).map((e, i) => {
            return (
              <React.Fragment key={i}>
                <li>
                  <ul>
                    <List>
                      <TextWrap style={{ margin: "0 auto" }}>
                        <h3 id={i}>{e.name} </h3>
                        <Desc Color={i % 2 === 0}>{e.description}</Desc>
                        <Tryit href={e.link} target="_blank">
                          Try it!
                        </Tryit>
                      </TextWrap>
                    </List>

                    {e.img && (
                      <ImageBox
                        style={{
                          backgroundImage: `url(${process.env.PUBLIC_URL}/images/link/${e.img})`,
                          margin: "50px auto",
                        }}
                      >
                        {/* <WhiteGradientToTop /> */}
                      </ImageBox>
                    )}
                  </ul>
                </li>
              </React.Fragment>
            );
          })}
        </ListWrap>
      </Wrap>
      {/* <WhiteGradientToTop /> */}
      <UpDown/>
    </>
  );
}

export default Quick_Links_Test;
