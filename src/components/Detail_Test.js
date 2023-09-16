import React, { useState } from 'react'
import { keyframes, styled } from 'styled-components'
import { TypeAnimation } from 'react-type-animation';
import { Slider } from './Slider';
import Aos from './Aos';
import BallLefttoRight from './Animation';
import CodeEditor from '@uiw/react-textarea-code-editor';
import HowMoveBall from './HowMoveBall';
import { NavLink } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import TopBall from './TopBall';
import {LeftTypingBox, RightTypingBox} from './TypingBox'


const GlobalWrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #Fefefe;
`

const MainBg = styled.div`
    max-width: 1400px;
    margin: 0 auto;  
`
const Creator = styled.div`
    padding: 10px 0;
    background-color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
    top: 0;
    div{
        span{
            font-family: Fira Code;
            font-size: 16px;
            margin-left: 20px;
            color: #9d9d9d;
            &:nth-child(2){
                margin-left: 20px;
            }
        }
    }
    span{
        a{
            font-size: 16px;
            margin-right: 20px;
            color: #9f9f9f;
            text-decoration: none;
        }      
        }
`

const DetailFooter = styled.div`
    width: 100%;
    height: 30px;
    background-color: #f1f1f1;
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 999;
    div{
        font-size: 15px;
        padding: 2px 0;
        color: #9d9d9d;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:nth-child(1){
            background-color: black;
        }
    }

`


const CardWrap = styled.div`
    width: 100%;
    overflow: hidden;
    margin: 300px auto;
    ul{
        display: flex;
        justify-content: space-between;
        position: relative;
    }

`


const Card = styled.li`
    background-color: #efefef;
    width: 300px;
    height: 300px;
    font-size: 20px;
    text-align: center;
    z-index: 100;
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
    span{
        position: absolute;
        font-size: 23px;
    }
`
const Desc = styled.div`
    width: 100%;
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
    margin: 50px auto;
    background-color: #F0F1EC;
`

const ChangeBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #ddd;
`
const DeleteBtn = styled(ChangeBtn)`

`


    
    
function Detail_Test() {

    // const [isHovering, setIsHovering] = useState(-1);

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

    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
    );

    const handleCopyClipBoard = async (text: string) => {
        try {
          await navigator.clipboard.writeText(text);
          alert('클립보드에 링크가 복사되었습니다.');
        } catch (e) {
          alert('복사에 실패하였습니다');
        }
    };

    return (
        <>
            <GlobalWrap>
                <Creator>
                    <div>
                        <span>&lt;&gt; creator. #dh3308 & #romi6342</span>
                        <span>how we can move ball with js?</span>
                    </div>
                    <span><NavLink to={"/main"}>메인 페이지로 가기</NavLink></span>
                </Creator>
                <MainBg>
                    <TopBall></TopBall>
                    <LeftTypingBox 
                    text={"여기에 '공'이 있습니다! 공을 옮기는 방법을 한 번 상상해 보세요."}
                    marginTop={0}
                    marginBtm={100}
                    ></LeftTypingBox>
                    <RightTypingBox
                    text={"RightTypingBox에 테스트용 글을 작성합니다."}
                    marginTop={0}
                    marginBtm={400}>
                    </RightTypingBox>
                    <HowMoveBall />
                    <CardWrap>
                        <ul>
                            {BallLefttoRight()}
                            {CardContent.map((e, i) => {
                                return (
                                    <Card key={i}>{e.answer}</Card>
                                )
                            })}
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
                            // repeat={Infinity}
                            />
                        </Typing>
                    </CodeDescWrap>
                    <MovingBall></MovingBall>
                    <CodeDescWrap>
                        <Typing>

                        </Typing>
                        <CodeDesc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet</CodeDesc>
                    </CodeDescWrap>
                    <CodeDescWrap>
                        <CodeDesc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet</CodeDesc>
                        <Typing>

                        </Typing>
                    </CodeDescWrap>
                    {/* <TextBg>
            <TextRight>
                <p>#def</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet?</p>
            </TextRight>
            <Picture></Picture>
        </TextBg> */}
                </MainBg>
                <GithubIcon></GithubIcon>
                <PostComment>
                    <WirterPicture></WirterPicture>
                    <InputWrap>
                        <textarea
                            type="text"
                            className="inputComment"
                            placeholder="댓글 달기..."
                            onChange={e => {
                                setComment(e.target.value);
                            }}
                            onKeyUp={e => {
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
                        <button onClick={handleCopyClipBoard}>Click to Copy</button>
                    </CommentWrap>
                </CommentBox>
                {
                    feedComments.map((el, index) => {
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
                <CodeBlock width={"300"} height={"300"} value={"test"}></CodeBlock>
                <DetailFooter>
                    {
                        Array(10).fill().map((e, i) => {
                            return (
                                <div key={i}>Page {i + 1}</div>
                            )
                        })
                    }
                </DetailFooter>
            </GlobalWrap>
        </>
    )
}

export default Detail_Test