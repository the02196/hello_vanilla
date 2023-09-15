import React, { useState } from 'react'
import { keyframes, styled } from 'styled-components'
import { TypeAnimation } from 'react-type-animation';
import { Slider } from './Slider';
import Aos from './Aos';
import BallLefttoRight from './Animation';
import CodeEditor from '@uiw/react-textarea-code-editor';

const GlobalWrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fefefe;

`

const MainBg = styled.div`
    max-width: 1400px;
    margin: 0 auto;  
`
const Creator = styled.div`
    padding-top: 20px;
    span{
        font-size: 17px;
        margin: 50px;
        color: #9d9d9d;
    }
`

const TextBg = styled.div`
    background-color: white;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    width: 1400px;
    display: flex;
    margin: 300px auto;
    align-items: center;
    padding: 30px 0;
`
const Picture = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #ddd;
    background-image: url('./../images/detail/profiles/${props => props.bgImage}');
    background-size: cover;
    margin-left: 20px;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    
    h3{
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px;
    }
    p{
        font-size: 16px;
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

const BallLefttoRightWrap = styled.div`
    width: 100%;
    position: relative;
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
const boxAnimation2 = keyframes`
0%{
  transform:translate3d(0,0,0);
}
100%{
  transform: translate3d(0,100px,0);
}
`
const Ball2 = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url("./images/detail/ball.png");
  background-size: cover;
  background-position: center;
  margin: 250px auto 0;
  animation: ${boxAnimation2} 0.5s infinite alternate cubic-bezier(.5, 0.05, 1, .5) ;
`
const ChangeBtn = styled.btn`
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
    
    
    const LeftTypingBox = ({text, bgImage}) => {
        return(
        <TextBg>
        <Picture style={{marginLeft: "30px", marginRight: "30px" , backgroundImage: `url("../images/detail/profiles/Woman_1.png")` }}></Picture>
        <Text>
            <h3>#gd5933</h3>
            <TypeAnimation sequence={[
            text,1000, 
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '16px', display: 'inline-block'}}/>
        </Text>
        </TextBg>
        )
    }
    const LeftTextBox = ({text, bgImage}) => {
        return(
        <TextBg>
        <Picture style={{marginLeft: "30px", marginRight: "30px" , backgroundImage: `url("../images/detail/profiles/Woman_1.png")` }}></Picture>
        <Text>
            <h3>#gd5933</h3>
            <p>{text}</p>
        </Text>
        </TextBg>
        )
    }
    const RightTextBox = ({text, bgImage}) => {
        return(
        <TextBg style={{justifyContent: "flex-end"}}>
        <Text style={{alignItems: "flex-end"}}>
            <h3>#hg5362</h3>
            <p>{text}</p>
        </Text>
        <Picture style={{marginLeft: "30px", marginRight: "30px", backgroundImage: `url("../images/detail/profiles/Man_3.png")`}}></Picture>
        </TextBg>
        )
    }

    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
    );

  return (
    <>
    <GlobalWrap>
        <Creator>
            <span>creator. #dh3308 & #romi6342</span>
            <span>How we can move ball with js?</span>
        </Creator>
    <MainBg>
        <Ball2></Ball2>
        <LeftTypingBox text={"How we can move ball with js?"}></LeftTypingBox>
        <RightTextBox text={"아무 글이나 넘겨봅니다."}></RightTextBox>
    
    
        <CardWrap>
            <ul>
                {BallLefttoRight()}
                {/* {
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
                } */}
                {CardContent.map((e,i)=>{
                        return (
                                <Card>{e.answer}</Card>
                )})}
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
        <CodeView>
            <CodeEditor
            value={code}
            language="js"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={30}
            style={{
                fontSize: 16,
                backgroundColor: "#f5f5f5",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
            />
        </CodeView>
    
    </GlobalWrap>
    </>
  )
}

export default Detail_Test