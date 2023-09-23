import { faChevronDown, faCopy, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const GlobalWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #171717;
`
const MainBg = styled.div`
  width: 840px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const Title = styled.div`
  line-height: 100px;
  position: relative;
  color: #dcddde;
  font-size: 30px;
  font-weight: 500;
  border-bottom: 1px solid #fff;
  margin-bottom: 5px;
  p{
    margin-bottom: 5px;
  }
  &::after{
    content: '';
    width: 10px;
    height: 10px;
    background-color: #F40000;
    position: absolute;
    bottom: 20px;
  }
  p:last-child{
    position: absolute;
    top: 30px;
    font-size: 15px;
    left: 15px;
    font-weight: 300;
    color: fff;
}
`
const UserId = styled.div`
  color: #dcddde;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  &::after{
    content: 'INSIDER';
    color: #000;
    text-align: center;
    width: 50px;
    height: 14px;
    line-height: 14px;
    background-color: rgb(236,189,37);
    position: absolute;
    bottom: 35px;
    border-radius: 3px;
    margin-left: 7px;
    font-size: 10px;
    font-weight: bold;
  }
`
const MainComment = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  border-bottom: 1px solid #fff;
  img{
    margin-left: 20px;
    height: 50px;
    border-radius: 50%;
    margin-right: 5px; 
    cursor: pointer;
  }
  span{
    color: #dcddde;
    position: absolute;
    right: 30px;
    font-weight: 200;
  }
  p{
    color: #dcddde;
    margin-top: 20px;
    margin: 0 65px;
    font-size: 16px;
  }
`
const Comment = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  border-bottom: 1px solid #fff;
  img{
    margin-left: 20px;
    height: 50px;
    border-radius: 50%;
    margin-right: 5px; 
    cursor: pointer;
  }
  span{
    color: #dcddde;
    position: absolute;
    right: 30px;
    font-weight: 200;
  }
  p{
    color: #dcddde;
    margin-top: 20px;
    margin: 0 65px;
    font-size: 16px;
    margin-bottom: 60px;
  }
`
const MainSocial = styled.div`
  color: #fff;
  position: absolute;
  right: 30px;
  top: 130px;
  font-size: 20px;
  cursor: pointer;
  :nth-child(1){
    margin-right: 20px;  
  }
`
const Social = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  :nth-child(1){
    margin-right: 20px;  
  }
`
const InfoBox = styled.div`
  width: 770px;
  height: 78px;
  margin: 50px 0 20px 50px;
  background-color: rgb(35,36,37);
  display: flex;
  position: relative;
  p{
    font-size: 13px;
    color: rgb(128,128,128);
  }
`
const Created = styled.div`
  margin: 15px;
  position: absolute;
  left: -70px;
  img{
    margin-top: 5px;
    position: absolute;
    height: 28px;
    left: 50px;
  }
  p:last-child{
    font-size: 18px;
    position: absolute;
    top: 25px;
    left: 40px;
    color: #fff;
  }
`
const LastReply = styled.div`
  font-size: 14px;
  margin: 15px;
  position: absolute;
  left: 40px;
  img{
    margin-top: 5px;
    position: absolute;
    height: 28px;
    left: 44px;
  }
  p:last-child{
    font-size: 18px;
    position: absolute;
    top: 25px;
    left: 32px;
    color: rgb(158,127,247);
  }
`
const Replies = styled.div`
  font-size: 14px;
  margin: 15px;
  position: absolute;
  left: 130px;
  top: 27px;
  img{
    margin-top: 5px;
    position: absolute;
    height: 30px;
    right: 20px;
  }
  p:last-child{
    position: absolute;
    font-size: 26px;
    top: -30px;
    right: 12px;
  }
`
const Views = styled.div`
  font-size: 14px;
  margin: 15px;
  position: absolute;
  left: 205px;
  top: 27px;
  img{
    margin-top: 5px;
    position: absolute;
    height: 30px;
    right: 20px;
  }
  p:last-child{
    position: absolute;
    font-size: 26px;
    top: -30px;
    right: -1px;
  }
`
const Users = styled.div`
  font-size: 14px;
  margin: 15px;
  position: absolute;
  left: 277px;
  top: 27px;
  img{
    margin-top: 5px;
    position: absolute;
    height: 30px;
    right: 20px;
  }
  p:last-child{
    position: absolute;
    font-size: 26px;
    top: -30px;
    right: 7px;
  }
`
const Likes = styled.div`
  font-size: 14px;
  margin: 15px;
  position: absolute;
  left: 355px;
  top: 27px;
  color: #dcddde;
  img{
    margin-top: 5px;
    position: absolute;
    height: 30px;
    right: 20px;
  }
  p:last-child{
    position: absolute;
    font-size: 26px;
    top: -30px;
    right: 7px;
  }
`
const Link = styled.div`
  font-size: 14px;
  margin: 15px;
  position: absolute;
  left: 428px;
  top: 27px;
  img{
    margin-top: 5px;
    position: absolute;
    height: 30px;
    right: 20px;
  }
  p:last-child{
    position: absolute;
    font-size: 26px;
    top: -30px;
    right: 7px;
  }
`
const PostMember = styled.div`
  img:nth-child(1){
    margin-top: 5px;
    position: absolute;
    height: 42px;
    right: 160px;
    top: 16px;
  }
  img:nth-child(2){
    margin-top: 5px;
    position: absolute;
    height: 42px;
    right: 114px;
    top: 16px;
  }
  img:nth-child(3){
    margin-top: 5px;
    position: absolute;
    height: 42px;
    right: 68px;
    top: 16px;
  }
`
const DownBtn = styled.div`
  background-color: gray;
  height: 78px;
  width: 60px;
  position: absolute;
  right: 1px;
  cursor: pointer;
  svg{
    color: #fff;
    font-size: 24px;
    position: absolute;
    top: 26px;
    left: 18px;
  }
`
function ObsidianCommentBox() {
  return (
    <>
    <GlobalWrap>
      <MainBg>
        <Title>
          <p>Banners plugin that works with obsidian 1.4.0 and above</p>
          <p>Plugin ideas</p>
        </Title>
        <MainComment>
          <img src='https://via.placeholder.com/150' alt='150'/>
          <UserId>#green23616</UserId>
          <span>Aug 16</span>
          <p>The Banners plugin is great. But it not no longer works with obsidian 1.4.0 <br/>The plugin is really great with a lot of functionality (way more than the snippets I have tried for implementing banners). But the plugin seems to be abandoned.<br/>Hopefully someone comes with a new plugin</p>
          <MainSocial><FontAwesomeIcon icon={faHeart}/><FontAwesomeIcon icon={faCopy}/></MainSocial>
          <InfoBox>
            <Created>
              <p>created</p>
              <img src='https://via.placeholder.com/50' alt='50'/>
              <p>Aug16</p>
            </Created>
            <LastReply>
              <p>last reply</p>
              <img src='https://via.placeholder.com/50' alt='50'/>
              <p>18d</p>
            </LastReply>
            <Replies>
              <p>replies</p>
              <p>6</p>
            </Replies>
            <Views>
              <p>views</p>
              <p>711</p>
            </Views>
            <Users>
              <p>users</p>
              <p>4</p>
            </Users>
            <Likes>
              <p>likes</p>
              <p>5</p>
            </Likes>
            <Link>
              <p>link</p>
              <p>1</p>
            </Link>
            <PostMember>
              <img src='https://via.placeholder.com/150' alt='150'/>
              <img src='https://via.placeholder.com/150' alt='150'/>
              <img src='https://via.placeholder.com/150' alt='150'/>
            </PostMember>
            <DownBtn><FontAwesomeIcon icon={faChevronDown}/></DownBtn>
          </InfoBox>
        </MainComment>
        <Comment>
          <img src='https://via.placeholder.com/150' alt='150'/>
          <UserId>#jyunhyung112</UserId>
          <span>Aug 17</span>
          <p>The Banners plugin is great. But it not no longer works with obsidian 1.4.0 The plugin is really great withThe Banners plugin is great. But it not no longer works with obsidian 1.4.0 The plugin is really great withThe Banners plugin is great. But it not no longer works with obsidian 1.4.0 The plugin is really great withThe Banners plugin is great. But it not no longer works with obsidian 1.4.0 The plugin is really great withThe Banners plugin is great. But it not no longer works with obsidian 1.4.0 The plugin is really great withThe Banners plugin is great. But it not no longer works with obsidian 1.4.0 The plugin is really great withThe Banners plugin is great. But it not no longer works with obsidian 1.4.0 The plugin is really great withThe Banners plugin is great. But it not no longer works with obsidian 1.4.0 The plugin is really great with </p>
          <Social><FontAwesomeIcon icon={faHeart}/><FontAwesomeIcon icon={faCopy}/></Social>
        </Comment>
        <Comment>
          <img src='https://via.placeholder.com/150' alt='150'/>
          <UserId>#minjeong119</UserId>
          <span>Aug 17</span>
          <p>But the plugin seems to be abandoned.Hopefully someone comes with a new plugin</p>
          <Social><FontAwesomeIcon icon={faHeart}/><FontAwesomeIcon icon={faCopy}/></Social>
        </Comment>
      </MainBg>
    </GlobalWrap>
    </>
  )
}

export default ObsidianCommentBox