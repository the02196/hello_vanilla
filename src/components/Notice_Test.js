import React from "react";
import styled from "styled-components";

/*

* Title의 문자열 값은 Main Page의 AboutContent의 문자열 값과 연동 되어야 함.

*/

/* 
Wrappers
*/

const GlobalWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const NoticeWrap = styled.ul`
  width: 1000px;
  margin: 0 auto;
  padding-top: 100px;
`;

const ListWrap = styled.li`
  width: 100%;
  height: 80px;
  padding-right: 15px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  display: flex;
  background-color: white;
  position: relative;
`;

const ListCountWrap = styled.div`
  width: 5%;
  font-size: 30px;
`;

const ListTextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const BottomListWrap = styled.div`
  display: flex;
`;

/* 
Notice
*/

const Count = styled.p``;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const Desc = styled.p``;

const Date = styled.p``;

function Notice_Test() {
  const FetchList = () => {
    return (
      <ListWrap>
        <ListCountWrap>
          <Count>1</Count>
        </ListCountWrap>
        <ListTextWrap>
          <TopListWrap>
            <Title>Test Title</Title>
            <Date>Sep 23</Date>
          </TopListWrap>
          <BottomListWrap>
            <Desc>Lorem ipsum dolor sit amet consectetur.</Desc>
          </BottomListWrap>
        </ListTextWrap>
      </ListWrap>
    );
  };

  return (
    <>
      <GlobalWrap>
        <NoticeWrap>
          {Array(10).fill().map((e, i) => {
            return <FetchList />;
          })}
        </NoticeWrap>
      </GlobalWrap>
    </>
  );
}

export default Notice_Test;
