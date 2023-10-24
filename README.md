# Hello Vanilla

초보 개발자들이 재미있고 간편하게 바닐라 스크립트를 학습할 수 있도록 지원하는 교육 커뮤니티 플랫폼입니다.

<img src="./public/images/main_screenshot.png" />

## 제작 배경

이 사이트는 바로 우리의 옆에 있는 사람들이 기꺼이 사용할 만한 서비스를 만들기 위해 개발되었습니다. 당시 팀원들과 우리의 지인들은 모두 IT 학원에서 함께 공부하던 개발자 지망생들이었으며, 자바스크립트 학습에 어려움을 겪고 있었습니다. 우리는 강사 수준의 교육을 제공할 수는 없지만, 창의적이고 개발에 대한 열정을 자극할 수 있는 콘텐츠를 제작하고 제공함으로써 중요한 역할을 할 수 있다고 생각했습니다.

프로젝트는 9월 10일부터 10월 10일까지 한 달간 진행되었습니다. 초기에는 바닐라 자바스크립트만을 사용해 모든 페이지를 만들려고 했으나, 수업 진도가 리액트까지 나가게 되면서, 팀원 모두가 프로젝트 기간 내에 실습할 기회를 놓치고 싶지 않았기에 라이브러리를 사용하게 되었으니, 이 점을 참고해주시기 바랍니다.

## 팀원 소개

<div style="display: flex;">
<b>최준형</b> : 개발 및 디자인 총괄, Git 관리, Firebase 관리, 랜딩 페이지, 메인 페이지
</div><br/>

<div style="display: flex;">
<b>박민정</b> : Git 관리, Firebase 관리, 상세 페이지, 댓글 기능
</div><br/>

<div style="display: flex;">
<b>기범석</b> : 로그인 페이지, 회원가입 페이지, 정보수정 페이지
</div><br/>

<div style="display: flex;">
<b>김재완</b> : 상세 페이지, 애니메이션 구현
</div><br/>

<div style="display: flex;">
<b>이기운</b> : 공지사항 페이지, 퀵 링크 페이지, 게시판 페이지
</div><br/>
  

## 이런 기술들이 사용되었습니다.

### 개발 환경
<div style="display: flex;">
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/>
<img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"/>
</div>

### 세팅
<div style="display: flex;">
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/>
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=flat&logo=yarn&logoColor=white"/>
</div>

### 개발
<div style="display: flex;">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/nodedotjs-339933?style=flat&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=flat&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat&logo=styledcomponents&logoColor=white"/>
<img src="https://img.shields.io/badge/redux-764ABC?style=flat&logo=redux&logoColor=white"/>
</div>

### 데이터베이스
<img src="https://img.shields.io/badge/firebase-FFCA28?style=flat&logo=firebase&logoColor=black"/>

### 디자인
<div style="display: flex;">
<img src="https://img.shields.io/badge/adobephotoshop-31A8FF?style=flat&logo=adobephotoshop&logoColor=black"/>
<img src="https://img.shields.io/badge/figma-F24E1E?style=flat&logo=figma&logoColor=black"/>
</div>

## 주요 기능

### 랜딩 페이지

찰스 팻 졸드의 저서 '코드' 에 영감을 받아 설계된 페이지 입니다. 모스부호 부터 이진법, 알파벳을 사용하는 고급 언어에 이르기까지, 코드의 역사를 한 눈에 볼 수 있도록 설계되었습니다. `setInterval()`, `setTimeout()` 등의 자바스크립트 비동기 함수들과 모션 애니메이션의 변칙성을 위한 랜덤 함수가 사용되었습니다.

### 메인 페이지

다양한 콘텐츠 박스와 상호작용 하여 사용자가 흥미를 느낄 수 있도록 하고, 상세 페이지로 진입하도록 돕는 페이지 입니다. 리액트의 장점인 컴포넌트 분할을 활용하여, 각 콘텐츠들을 개별적으로 만든 뒤, 한 페이지 위에서 합치는 방법으로 제작되었습니다. 

### 로그인 페이지

### 회원가입 페이지

### 정보수정 페이지

### 상세 페이지 (콘텐츠)

방문자들에게 개발의 즐거움과 성취의 경험을 제공하고자 제작된 이 사이트를 보여주는 중요한 페이지입니다. 설명서를 읽듯이 차근차근 따라하면 공 굴리기 애니메이션을 완성할 수 있도록 제작하였고, 애니메이션을 선택한 이유는 시각적으로 보여주는 것만큼 흥미를 유발하기 쉬운 장치는 없다고 생각했기 때문입니다. 스크롤 위치에 따라 컴포넌트가 동작하도록 구현하였으며 페르소나를 통해 컨텐츠를 자체 제작하였고 UI도 정보를 공유하는 포럼의 특성에 맞게 선택되었습니다. 자연스럽게 나타나는 Aos와 애니메이션, 코드를 직접 입력해볼 수 있는 영역 등 방문하는 사용자가 직접 만져보며 흥미를 가질만한 요소를 곳곳에 배치하였습니다.

### 상세 페이지 (댓글) 

사용자들의 활발한 소통을 지원하고자 다양한 댓글 기능을 구현하였습니다. 사용자들은 로그인 후 댓글 등록, 수정, 삭제와 같은 기본적인 댓글 관리를 수행할 수 있으며, 다른 사용자의 댓글에 답글을 달아 대화를 이어갈 수 있습니다. 또한, 좋아요 기능을 통해 다른 사람의 댓글에 대한 감상을 즉각적으로 표현할 수 있습니다. 그리고 댓글의 양이 많아질 경우, 페이지네이션 기능을 통해 사용자 경험을 최적화하였습니다. 마지막으로, 페이지 최상단에는 댓글과 관련된 핵심 정보를 집계하여 보여주어, 사용자들이 댓글 활동의 전반적인 흐름을 한눈에 파악할 수 있도록 하였습니다.

### 퀵 링크 페이지

개발하면서 필요한 자료나 도구를 찾을 때마다 여러 사이트를 뒤져보는 것은 꽤나 번거로운 일입니다. 이 프로젝트는 그러한 불편함을 해결하기 위해 팀원인 기운님께서 자주 참고하는 유용한 사이트들을 모아 바로 링크할 수 있는 페이지를 만들었습니다.

### 공지사항 페이지

공지사항 페이지는 CKEditor와 Firebase의 NoSQL 데이터베이스를 활용하여 게시판을 구현한 것입니다. NoSQL 데이터베이스의 주요 장점 중 하나인 유동적인 스키마를 활용하여,원하는 id에 관리자권한을 손쉽게 부여하여 공지사항을 관리하고 접근할 수 있는 기능을 추가하였습니다


