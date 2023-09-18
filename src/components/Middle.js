import React from 'react'
import styled from 'styled-components'

const List = styled.div`
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

function Middle() {

  const CodeSite = 
    [
      {
        "name": "MDN Web Docs",
        "link": "https://developer.mozilla.org/",
        "description": "웹 기술과 웹 프로그래밍에 관한 정보를 제공하는 Mozilla의 공식 문서 사이트입니다. HTML, CSS, JavaScript에 대한 참조 및 튜토리얼을 제공합니다."
      },
      {
        "name": "CSS-Tricks",
        "link": "https://css-tricks.com/",
        "description": "CSS 관련 팁, 트릭 및 튜토리얼을 제공하는 사이트입니다. 또한 웹 디자인과 개발에 관한 다양한 리소스도 제공됩니다."
      },
      {
        "name": "Stack Overflow",
        "link": "https://stackoverflow.com/",
        "description": "프로그래머들이 자신의 문제를 공유하고 해결 방법을 찾을 수 있는 질의응답 플랫폼입니다. 웹 개발 관련 질문이 많습니다."
      },
      {
        "name": "Bootstrap",
        "link": "https://getbootstrap.com/",
        "description": "가장 인기 있는 반응형 웹 디자인 프레임워크 중 하나입니다. 웹사이트의 UI 구성 요소를 쉽게 만들 수 있게 도와줍니다."
      },
      {
        "name": "W3C Validator",
        "link": "https://validator.w3.org/",
        "description": "웹 페이지의 HTML 및 CSS를 검증하는 도구입니다. 웹 표준 준수를 확인하는데 사용됩니다."
      },
      {
        "name": "Can I use",
        "link": "https://caniuse.com/",
        "description": "웹 기술의 브라우저 호환성을 확인할 수 있는 사이트입니다. 웹 개발에서 다양한 기능의 브라우저 지원 상태를 알아볼 때 유용합니다."
      },
      {
        "name": "WebAIM",
        "link": "https://webaim.org/",
        "description": "웹 접근성에 관한 정보와 리소스를 제공하는 사이트입니다. 웹사이트가 장애인들에게도 친숙하게 구성되도록 도와줍니다."
      },
      {
        "name": "Figma",
        "link": "https://www.figma.com/",
        "description": "클라우드 기반의 UI/UX 디자인 도구입니다. 팀원들과 실시간으로 협업하면서 디자인을 할 수 있습니다."
      },
      {
        "name": "Codecademy",
        "link": "https://www.codecademy.com/",
        "description": "다양한 프로그래밍 언어와 웹 개발 관련 코스를 제공하는 온라인 학습 플랫폼입니다."
      },
      {
        "name": "LeetCode",
        "link": "https://leetcode.com/",
        "description": "프로그래밍 문제를 풀며 코딩 능력을 향상시킬 수 있는 플랫폼입니다."
      },
      {
        "name": "freeCodeCamp",
        "link": "https://www.freecodecamp.org/",
        "description": "웹 개발에 초점을 맞춘 무료 코딩 학습 리소스를 제공하는 사이트입니다."
      },
      {
        "name": "Codewars",
        "link": "https://www.codewars.com/",
        "description": "사용자들이 만든 다양한 난이도의 문제들을 풀 수 있는 코딩 도전 플랫폼입니다."
      },
      {
        "name": "HackerRank",
        "link": "https://www.hackerrank.com/",
        "description": "프로그래밍 문제뿐만 아니라, 다양한 IT 주제에 대한 챌린지와 테스트를 제공하는 사이트입니다."
      },
      {
        "name": "Coursera",
        "link": "https://www.coursera.org/",
        "description": "대학교 및 기업들과 협력하여 다양한 온라인 코스를 제공하는 플랫폼입니다."
      },
      {
        "name": "edX",
        "link": "https://www.edx.org/",
        "description": "전세계 대학들에서 제공하는 무료와 유료 온라인 코스를 찾을 수 있는 플랫폼입니다."
      },
      {
        "name": "Khan Academy",
        "link": "https://www.khanacademy.org/",
        "description": "다양한 주제, 특히 프로그래밍과 컴퓨터과학 관련 무료 리소스를 제공하는 교육 플랫폼입니다."
      },
      {
        "name": "GeeksforGeeks",
        "link": "https://www.geeksforgeeks.org/",
        "description": "컴퓨터 과학 및 프로그래밍 관련 주제를 다루는 튜토리얼, 기사, 코드 예제를 제공하는 웹사이트입니다."
      },
      {
        "name": "W3Schools",
        "link": "https://www.w3schools.com/",
        "description": "웹 개발 관련 튜토리얼 및 리소스를 제공하는 사이트입니다."
      }
    ]
  
    

  return (
    <>
    
    {
      Array(5).fill().map((e,i)=>{
        return(
          <List >
       
          <h3 >{i+1}</h3>
          <div>          
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero velit expedita rem cupiditate nobis consequuntur, exercitationem aliquam! Ullam eveniet distinctio voluptatum, delectus nesciunt, maxime, earum quidem sequi repudiandae saepe perferendis.</p>
          <img id={i} src="https://via.placeholder.com/480x280" alt="1" />
          
          </div>
            
          
            
        </List>
        )
  
      })
    }
    </>



  )}



export default Middle