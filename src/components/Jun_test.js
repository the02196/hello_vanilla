import {
  faAngleDown,
  faBookmark,
  faHeart,
  faLink,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

/*
#### Wrappers ####
*/

const GlobalWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const CommentWrap = styled.div`
  width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: black;
  color: white;
  ul {
    li {
      display: flex;
      padding: 40px 0;
      border-top: 1px solid #ededed;
      border-bottom: 1px solid #ededed;
    }
  }
`;

const ProfileWrap = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 25px;
`;

const ContentTopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`;
const ContentCenterWrap = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;
const ContentBottomWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 60px;
  div {
    margin-left: 40px;
    line-height: 28px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const TopicWrap = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  background-color: #282828;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 20px;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p.title {
      font-size: 18px;
      color: #ababab;
      font-weight: 500;
    }
    p.count {
      font-size: 28px;
      font-weight: 600;
      color: #ababab;
      height: 35px;
    }
    div.inner-wrap {
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      div.profile {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
      }
      p.date-from,
      p.date-wroten {
        font-size: 22px;
        font-weight: 400;
        margin-left: 8px;
      }
    }
    div.large-profile{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      margin-left: 7px;
    }
  }
`;

const TopicButtonWrap = styled.div`
  width: 80px;
  height: 100%;
  background-color: #363636;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;

/*
#### Profile ####
*/

const Profile = styled.div`
  width: 70px;
  height: 70px;
  background-image: url("../images/portraits/man_1.png");
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

/*
#### Top Contents ####
*/

const NickName = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

const Date = styled.span`
  font-size: 18px;
`;

/*
#### Center Contents ####
*/

const Comment = styled.p`
  font-size: 18px;
  line-height: 1.4;
`;

/*
#### Bottom Contents ####
*/

const Count = styled.div`
  font-size: 18px;
`;

const Love = styled.div`
  margin-left: 15px !important;
`;

const Share = styled.div``;

const Reply = styled.div``;

/*
#### Topics ####
*/

const Created = styled.div`
  width: 10%;
  align-items: flex-start !important;
  p.title {
    
  }
  div.inner-wrap {
    div.profile {
      background-image: url("../images/portraits/woman_4.png");
    }
    div.date-wroten {
    }
  }
`;

const LastReply = styled.div`
  width: 10%;
  align-items: flex-start !important;
  div.inner-wrap {
    div.profile {
      background-image: url("../images/portraits/man_3.png");
    }
    div.date-from {
    }
  }
`;

const Replies = styled.div`
  width: 4%;
  p.count {
  }
  p.title {
  }
`;

const Views = styled.div`
  width: 4%;
  p.count {
  }
  p.title {
  }
`;

const Users = styled.div`
  width: 4%;
  p.count {
  }
  p.title {
  }
`;

const Likes = styled.div`
  width: 4%;
  p.count {
  }
  p.title {
  }
`;

const Link = styled.div`
  width: 4%;
  p.count {
  }
  p.title {
  }
`;

const RepliedUsers = styled.div`
  width: 25%;
  flex-direction: row !important;
  justify-content: flex-start !important;
  div.large-profile:nth-child(1) {
    background-image: url("../images/portraits/woman_8.png");
  }
  div.large-profile:nth-child(2) {
    background-image: url("../images/portraits/man_4.png");
  }
  div.large-profile:nth-child(3) {
    background-image: url("../images/portraits/man_7.png");
  }
`;

function Jun_test() {

const [nickName, SetNickName] = useState("");
const [date, setDate] = useState("");
const [contentText, SetContentText] = useState("");
const [heartCount, setHeartCount] = useState("");
const [createdDate, setCreatedDate] = useState("");
const [LastReplyDate, setLastReplyDate] = useState("");
const [repliesCount, setRepliesCount] = useState("");
const [viewsCount, SetViewsCount] = useState("");
const [usersCount, setUsersCount] = useState("");
const [likesCount, setLikesCount] = useState("");
const [linkCount, setLinkCount] = useState("");
const [createdProfileLink, setCreatedProfileLink] = useState("");
const [lastReplyProfileLink, setLastReplyProfileLink] = useState("");
const [repliedUserProfileLink, setUserProfileLink] = useState("");
const [repliedUserProfileLink2, setUserProfileLink2] = useState("");
const [repliedUserProfileLink3, setUserProfileLink3] = useState("");

/*
#### Fetch Contents Functions
*/

  const FetchContentTop = () => {
    return (
      <ContentTopWrap>
        <NickName>NickName</NickName>
        <Date>Date</Date>
      </ContentTopWrap>
    );
  };

  const FetchContentCenter = () => {
    return (
      <ContentCenterWrap>
        <Comment>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi a
          quos repellat cumque, consequuntur magnam obcaecati, reprehenderit
          repudiandae odit adipisci autem quae voluptates veritatis! Asperiores
          porro animi corrupti quo ut! lorem5
        </Comment>
      </ContentCenterWrap>
    );
  };

  const FetchContentBottom = () => {
    return (
      <ContentBottomWrap>
        <Count>1</Count>
        <Love>
          <FontAwesomeIcon icon={faHeart} />
        </Love>
        <Share>
          <FontAwesomeIcon icon={faLink} />
        </Share>
        <Reply>
          <FontAwesomeIcon icon={faShare} />
        </Reply>
      </ContentBottomWrap>
    );
  };

  const FetchTopics = () => {
    return (
      <>
        <Created>
          <p className="title">created</p>
          <div className="inner-wrap">
            <div className="profile"></div>
            <p className="date-wroten">date</p>
          </div>
        </Created>
        <LastReply>
          <p className="title">last reply</p>
          <div className="inner-wrap">
            <div className="profile"></div>
            <p className="date-from">date</p>
          </div>
        </LastReply>
        <Replies>
          <p className="count">1</p>
          <p className="title">replies</p>
        </Replies>
        <Views>
          <p className="count">1</p>
          <p className="title">views</p>
        </Views>
        <Users>
          <p className="count">1</p>
          <p className="title">users</p>
        </Users>
        <Likes>
          <p className="count">1</p>
          <p className="title">likes</p>
        </Likes>
        <Link>
          <p className="count">1</p>
          <p className="title">link</p>
        </Link>
        <RepliedUsers>
          <div className="large-profile"></div>
          <div className="large-profile"></div>
          <div className="large-profile"></div>
        </RepliedUsers>
        <TopicButtonWrap>
          <FontAwesomeIcon icon={faAngleDown} />
        </TopicButtonWrap>
      </>
    );
  };


  const FetchComment = () => {
    return (
      <li>
      <ProfileWrap>
        <Profile />
      </ProfileWrap>
      <ContentWrap>
        <FetchContentTop />
        <FetchContentCenter />
        <FetchContentBottom />
        <TopicWrap>
          <FetchTopics />
        </TopicWrap>
      </ContentWrap>
    </li>
    )
  }
  return (
    <>
      <GlobalWrap>
        <CommentWrap>
          <ul>
            <FetchComment />
          </ul>
        </CommentWrap>
      </GlobalWrap>
    </>
  );
}

export default Jun_test;
