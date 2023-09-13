import React, { useState } from 'react'
import { styled } from 'styled-components'
import { TypeAnimation } from 'react-type-animation';
import { Slider } from './Slider';
import Aos from './Aos';
import Animation from './Animation';

const MainBg = styled.div`
    background-color: #d9d9d9;
`
const Creator = styled.div`
    padding-top: 20px;
    span{
        font-size: 17px;
        margin: 50px;
        color: #9d9d9d;
    }
`
const Ball = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: url("./images/ball/ball_detail.png");
    background-size: cover;
    background-position: center;
    margin: 400px auto;
`
const TextBg = styled.div`
    background-color: #FFF9EB;
    width: 1000px;
    display: flex;
    justify-content: space-around;
    margin: 200px auto;
    align-items: center;
    padding: 40px 0;
`
const Picture = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ddd;
    margin: 0 50px;
`
const Text = styled.div`
    width: 700px;
    p:nth-child(1){
        font-size: 30px;
        margin-bottom: 30px;
    }
    p:nth-child(2){
        font-size: 24px;
    }
`
const TextRight = styled(Text)`
    text-align: right;
`
const CardWrap = styled.div`
    width: 1000px;
    overflow: hidden;
    margin: 300px auto;
    ul{
        display: flex;
        justify-content: space-between;
    }
`
const Card = styled.li`
    background-color: #E5F1E8;
    width: 270px;
    height: 270px;
    font-size: 40px;
    text-align: center;
    
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    box-sizing: border-box;
    position: relative;
    &.on{
        background-color: #fff;       
    }
    &.on span{
        position: absolute;
        font-size: 23px;
    }
`
const Desc = styled.div`
    width: 1000px;
    margin: 100px auto;
    p{
        font-size: 30px;
        margin-bottom: 50px;
    }
    span{
        font-size: 20px;
    }
`
const MovingBall = styled.div`
    width: 1000px;
    height: 250px;
    margin: 100px auto;
    background-color: #fff;
`
const CodeDescWrap = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 300px auto;
`
const CodeDesc = styled.div`
    font-size: 24px;
    width: 350px;
    height: 300px;
    display: flex;
    align-items: center;
`
const Typing = styled.div`
    width: 550px;
    height: 300px;
    overflow: hidden;
    background-color: #fff;
`
const GithubIcon = styled.div`
    width: 100%;
    background-color: #25292F;
    height: 70px;
`
const CommentBox = styled.div`
    width: 1000px;
    margin: 70px auto;
    display: flex;
    justify-content: space-between;
`
const CommentWrap = styled.div`
    width: 800px;
    div:nth-child(1){
        display: flex;
        justify-content: space-between;
    }    
`
const WirterPicture = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #fff;
`
const TopComment = styled.div`
    background-color: #eaeaea;
    width: 200px;
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-radius: 30px;
`
const WriterId = styled.div`
    font-size: 22px;
`
const Comment = styled.div`
    font-size: 18px;
    margin: 30px 0;
`
const Share = styled.div`
    font-size: 16px;
    color: #808080;
`
const PostComment = styled.div`
    width: 1000px;
    margin: 150px auto;
    display: flex;
    justify-content: space-between;
`
const InputWrap = styled.div`
    width: 800px;
    textarea{
        width: 800px;
        height: 160px;
        background-color: #fff;
        border: 0;
        outline: none;
        font-size: 20px;
        box-sizing: border-box;
    }
    button{
        width: 800px;
        padding: 15px 0;
        background-color: #C5CDEB;
        font-size: 18px;
        font-weight: bold;
        &:focus{
            border: none;
            outline:none;
        }
    }
`
const CodeView = styled.div`
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    background-color: #F0F1EC;
    overflow: hidden;
    font-size: 25px;
    padding: 100px 50px;
    box-sizing: border-box;
`

function Detail_Test() {
    const [isHovering, setIsHovering] = useState(-1);

    const [userName, setUserName] = useState("#001235");
    const [userProfile, setUserProfile] = useState();
    const [comment, setComment] = useState('');
    const [feedComments, setFeedComments] = useState([]);
    const [isValid, setIsValid] = useState(false);

    const post = (e) => {
        const copyFeedComments = [...feedComments];
        copyFeedComments.push(comment);
        setFeedComments(copyFeedComments);
        setComment('');
    }

    const CommentList = props => {
        return (
            <CommentBox>
                <WirterPicture className='userProfile'>{props.userProfile}</WirterPicture>
                <CommentWrap className="userCommentBox">
                    <div>
                        <WriterId className="userName">{props.userName}</WriterId>
                        {/* <TopComment>Top Comment</TopComment> */}
                    </div>
                    <Comment className='userComment'>{props.userComment}</Comment>
                    <Share>share code</Share>
                </CommentWrap>
            </CommentBox>
        )
    }
    const CardContent = [
        {
            quiz: "quiz1",
            answer: "Lorem ipsum dolor sit amet. "
        },
        {
            quiz: "quiz2",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, minus."
        },
        {
            quiz: "quiz3",
            answer: "Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, minus."
        }
    ]

    
  return (
    <>
    <MainBg>
        <Creator>
            <span>creator. #dh3308 & #romi6342</span>
            <span>How we can move ball with js?</span>
        </Creator>
        <Ball></Ball>
        {/* <Slider /> */}
        <TextBg>
            <Picture></Picture>
            <Text>
                <p>#abc</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet?</p>
            </Text>
        </TextBg>
        <Aos />
        <Animation />
        <TextBg>
            <TextRight>
                <p>#def</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet?</p>
            </TextRight>
            <Picture></Picture>
        </TextBg>
        <CardWrap>
            <ul>
                {
                    CardContent.map((e,i)=>{
                        return (
                            <Card
                            className={isHovering === i ? 'on' : ''}
                            onMouseOver={()=>{
                                setIsHovering(i)
                            }} onMouseOut={()=>{
                                setIsHovering(-1);
                            }} 
                            key={i}>
                                <span>
                                    {
                                        isHovering === i ? e.answer : e.quiz
                                    }
                                </span>
                            </Card>
                        )
                    })
                }
            </ul>
        </CardWrap>
        <Desc>
            <p>lorem</p>
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</span>
        </Desc>
        <MovingBall></MovingBall>
        <CodeDescWrap>
            <CodeDesc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet</CodeDesc>
            <Typing>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        `className={isActive === true ? 'on' : ''} onClick={()=>{setIsActive(isActive === false ? true : false)}}`,
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'onClick={()=>{setIsActive(!isActive)}}',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.5em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </Typing>
        </CodeDescWrap>
        <MovingBall></MovingBall>
        <CodeDescWrap>
            <Typing>
                
            </Typing>
            <CodeDesc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet</CodeDesc>
        </CodeDescWrap>
        <TextBg>
            <Picture></Picture>
            <Text>
                <p>#abc</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet?</p>
            </Text>
        </TextBg>
        <CodeDescWrap>
            <CodeDesc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet</CodeDesc>
            <Typing>
                
            </Typing>
        </CodeDescWrap>
        <TextBg>
            <TextRight>
                <p>#def</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet?</p>
            </TextRight>
            <Picture></Picture>
        </TextBg>
        <GithubIcon></GithubIcon>
        <PostComment>
            <WirterPicture></WirterPicture>
            <InputWrap>
                <textarea 
                    type="text"
                    className="inputComment"
                    placeholder="댓글 달기..."
                    onChange={e =>{
                        setComment(e.target.value);
                    }}
                    onKeyUp={e =>{
                        e.target.value.length > 0
                        ? setIsValid(true)
                        : setIsValid(false);
                    }}
                    value={comment}
                />
                <button
                    type="button"
                    className={
                        comment.length > 0
                        ? 'submitCommentActive'
                        : 'submitCommentInactive'
                    }
                    onClick={post}
                    disabled={isValid ? false : true}
                >
                    Post
                </button>
            </InputWrap>
        </PostComment>
        <CommentBox>
            <WirterPicture></WirterPicture>
            <CommentWrap>
                <div>
                    <WriterId>lorem</WriterId>
                    <TopComment>Top Comment ★</TopComment>
                </div>
                <Comment>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore quae perferendis similique a ad expedita ex accusamus aperiam laborum! Vel, ipsum! Non, deserunt error repudiandae magni consequuntur quos provident cumque?</Comment>
                <Share>share code</Share>
            </CommentWrap>
        </CommentBox>
        {
            feedComments.map((el,index) => {
                return (
                    <CommentList 
                        userProfile={userProfile}
                        userName={userName}
                        userComment={el}
                        key={index}
                    />
                );
            })
        }
        <CodeView></CodeView>
    </MainBg>
    </>
  )
}

export default Detail_Test