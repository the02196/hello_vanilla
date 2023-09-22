import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Link } from 'react-scroll'
import { styled } from 'styled-components'





  const Content = styled.div`
  
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
    color: #fff;
  
  text-align: center;
  line-height: 2;
  >p{
    color:#fff;
  }
  }
  `
  const AccordionCnt = styled.div`
  font-size: 14px;
  color: #8e8e8e;
  `
  const List = styled.div`



  margin: 0 auto;
  max-width: 1200px;  
  position: relative;
  height: 500px;
  
  h3{margin-top: 150px; background-color:#343541; max-width:650px; color:#d9d9e3;padding:20px 20px; box-sizing:border-box;
      border-radius: 10px 10px 0 0;  display: flex; justify-content: space-between; 
      span>a{ text-decoration: none;
        font-weight: 200; font-size: 14px; align-self: flex-end; cursor: pointer; color:#d9d9e3

      }
  }
   >div{
  display: flex;
  p{    background-color:#111111;  width: 650px; color:#00a67d; padding:30px; box-sizing: border-box;
        line-height: 1.5rem;
  } 
  }
  img{top: -100px; right: -10px;
     position: absolute;
 
    }
    
  `

  const CodeSite = 
  [
    {       
      "menu": "Tutorial",
      "name": "jsfiddle",
      "link": "https://jsfiddle.net/",
      "description": "HTML, CSS, JavaScript로 작성된 코드를 실시간으로 실행하고 결과를 확인할 수 있는 웹 기반의 코드 실행 환경을 제공하는 플랫폼입니다. 사용자들은 작성된 코드를 저장하고 다른 사용자들과 공유할 수 있습니다."
    },
    {       
        "menu": "Tools",
        "name": "jsfiddle",
        "link": "https://jsfiddle.net/",
        "description": "HTML, CSS, JavaScript로 작성된 코드를 실시간으로 실행하고 결과를 확인할 수 있는 웹 기반의 코드 실행 환경을 제공하는 플랫폼입니다. 사용자들은 작성된 코드를 저장하고 다른 사용자들과 공유할 수 있습니다."
    },
    {
        "menu": "Tools",
        "name": "jsbin",
        "link": "https://jsbin.com/?html,output",
        "description": "jsfiddle과 유사한 기능을 제공하지만, 간결하고 가벼운 인터페이스를 가진 웹 기반의 실시간 코드 편집 및 실행 플랫폼입니다."
    },
    {
        "menu": "Tools",
        "name": "CodeSandbox",
        "link": "https://codesandbox.io/",
        "description": "웹 기반의 IDE로, 다양한 프레임워크와 라이브러리에 대한 실시간 코드 편집 및 실행 환경을 제공합니다. 프로젝트 구조를 유지하며 코드를 작성, 테스트, 공유할 수 있습니다."
    },
    {
        "menu": "Tools",  
        "name": "Live DOM Viewer",
        "link": "http://software.hixie.ch/utilities/js/live-dom-viewer/",
        "description": "웹 페이지의 DOM 구조를 실시간으로 탐색하고 편집하여 결과를 확인할 수 있는 도구입니다. DOM의 동작과 구조를 이해하는 데 도움이 됩니다."
    },
    {
        "menu": "Tools",
        "name": "Figma",
        "link": "https://www.figma.com/",
        "description": "클라우드 기반의 UI/UX 디자인 도구입니다. 팀원들과 실시간으로 협업하면서 디자인을 할 수 있습니다."
    },
    {   
        "menu": "Education",
        "name": "MDN Web Docs",
        "link": "https://developer.mozilla.org/",
        "description": "웹 기술과 웹 프로그래밍에 관한 정보를 제공하는 Mozilla의 공식 문서 사이트입니다. HTML, CSS, JavaScript에 대한 참조 및 튜토리얼을 제공합니다."
    },
    {
      "menu": "Education",
      "name": "CSS-Tricks",
      "link": "https://css-tricks.com/",
      "description": "CSS 관련 팁, 트릭 및 튜토리얼을 제공하는 사이트입니다. 또한 웹 디자인과 개발에 관한 다양한 리소스도 제공됩니다."
    },
    {
      "menu": "Education",
      "name": "Stack Overflow",
      "link": "https://stackoverflow.com/",
      "description": "프로그래머들이 자신의 문제를 공유하고 해결 방법을 찾을 수 있는 질의응답 플랫폼입니다. 웹 개발 관련 질문이 많습니다."
    },
    {
      "menu": "Education",
      "name": "Bootstrap",
      "link": "https://getbootstrap.com/",
      "description": "가장 인기 있는 반응형 웹 디자인 프레임워크 중 하나입니다. 웹사이트의 UI 구성 요소를 쉽게 만들 수 있게 도와줍니다."
    },
    {
      "menu": "Education",
      "name": "W3C Validator",
      "link": "https://validator.w3.org/",
      "description": "웹 페이지의 HTML 및 CSS를 검증하는 도구입니다. 웹 표준 준수를 확인하는데 사용됩니다."
    },
    {
      "menu": "Education",
      "name": "Can I use",
      "link": "https://caniuse.com/",
      "description": "웹 기술의 브라우저 호환성을 확인할 수 있는 사이트입니다. 웹 개발에서 다양한 기능의 브라우저 지원 상태를 알아볼 때 유용합니다."
    },
    {
      "menu": "Education",
      "name": "WebAIM",
      "link": "https://webaim.org/",
      "description": "웹 접근성에 관한 정보와 리소스를 제공하는 사이트입니다. 웹사이트가 장애인들에게도 친숙하게 구성되도록 도와줍니다."
    },
    {
      "menu": "Education",
      "name": "Figma",
      "link": "https://www.figma.com/",
      "description": "클라우드 기반의 UI/UX 디자인 도구입니다. 팀원들과 실시간으로 협업하면서 디자인을 할 수 있습니다."
    },
    {
      "menu": "Education",
      "name": "Codecademy",
      "link": "https://www.codecademy.com/",
      "description": "다양한 프로그래밍 언어와 웹 개발 관련 코스를 제공하는 온라인 학습 플랫폼입니다."
    },
    {
      "menu": "Education",
      "name": "LeetCode",
      "link": "https://leetcode.com/",
      "description": "프로그래밍 문제를 풀며 코딩 능력을 향상시킬 수 있는 플랫폼입니다."
    },
    {
      "menu": "Education",
      "name": "freeCodeCamp",
      "link": "https://www.freecodecamp.org/",
      "description": "웹 개발에 초점을 맞춘 무료 코딩 학습 리소스를 제공하는 사이트입니다."
    },
    {
      "menu": "Education",
      "name": "Codewars",
      "link": "https://www.codewars.com/",
      "description": "사용자들이 만든 다양한 난이도의 문제들을 풀 수 있는 코딩 도전 플랫폼입니다."
    },
    {
      "menu": "Education",
      "name": "HackerRank",
      "link": "https://www.hackerrank.com/",
      "description": "프로그래밍 문제뿐만 아니라, 다양한 IT 주제에 대한 챌린지와 테스트를 제공하는 사이트입니다."
    },
    {
      "menu": "Education",
      "name": "Coursera",
      "link": "https://www.coursera.org/",
      "description": "대학교 및 기업들과 협력하여 다양한 온라인 코스를 제공하는 플랫폼입니다."
    },
    {
      "menu": "Education",
      "name": "edX",
      "link": "https://www.edx.org/",
      "description": "전세계 대학들에서 제공하는 무료와 유료 온라인 코스를 찾을 수 있는 플랫폼입니다."
    },
    {
      "menu": "Education",
      "name": "Khan Academy",
      "link": "https://www.khanacademy.org/",
      "description": "다양한 주제, 특히 프로그래밍과 컴퓨터과학 관련 무료 리소스를 제공하는 교육 플랫폼입니다."
    },
    {
      "menu": "Education",
      "name": "GeeksforGeeks",
      "link": "https://www.geeksforgeeks.org/",
      "description": "컴퓨터 과학 및 프로그래밍 관련 주제를 다루는 튜토리얼, 기사, 코드 예제를 제공하는 웹사이트입니다."
    },
    {
      "menu": "Education",
      "name": "W3Schools",
      "link": "https://www.w3schools.com/",
      "description": "웹 개발 관련 튜토리얼 및 리소스를 제공하는 사이트입니다."
    },
    {
      "menu": "Education",
      "title": "Javascript-basic-projects",
      "link": "https://github.com/john-smilga/javascript-basic-projects",
      "description": "이 깃허브 저장소는 다양한 자바스크립트 기반의 프로젝트들을 포함하고 있습니다. 초보자를 위한 기본 프로젝트부터 중급자를 위한 복잡한 프로젝트까지 다양하게 포함되어 있습니다."
  },
  {
    "menu": "Education",
    "title": "프로그래머스 Javascript",
    "link": "https://school.programmers.co.kr/learn/challenges?order=recent&statuses=solved&languages=javascript",
    "description": "프로그래머스는 코딩 테스트 및 연습을 목적으로 하는 플랫폼입니다. 자바스크립트 카테고리에서는 다양한 난이도의 문제들을 풀어보며 실력을 향상시킬 수 있습니다."
  },
  {
    "menu": "FAQ",
    "title": "함수와 클래스의 차이?",
    "link": ""
  },
  {
    "menu": "Git 사용가이드",
    "title": "프로그래머스 Javascript",
    "link": ""
  },
  ]

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
      {
      menus.map((e, index) => {
      
        return (
        <li
          key={index}
          onClick={() => MenuClick(index)}
          className={activeMenu === index ? 'active' : ''}
        > {e}
          {/* <NavLink to={`/${menu.link}`}>
          </NavLink> */}
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
 
    <List>
        {
          CodeSite.map((e,i)=>{
            return(
              <>
             
              <h3 id={i}>{e.name} <span><a href={e.link} target='_blank'>Link</a></span></h3>
              <div>          
              <p>{e.description}</p>
              <img src={getFaviconLink(e.link)} alt={i} />
              </div>
              
              </>       
            )
          })
        }
        
        </List>
        
          
      

      

  

    
    </>
  )
};


export default Quick_Links_Test