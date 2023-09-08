import React, { useState } from 'react'
import { styled } from 'styled-components'
import { TypeAnimation } from 'react-type-animation';

const MainBg = styled.div`
    background-color: #d9d9d9;
`
const Ball = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: url("./images/ball/ball_background.png");
    background-size: cover;
    background-position: center;
    margin: 0 auto;
`
const TextBg = styled.div`
    background-color: #fff;
    color: #000;
    width: 800px;
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
    align-items: center;
    padding: 20px;
`
const Text = styled.div`
    font-family: 'Inter';
    p:nth-child(1){
        font-size: 20px;
    }
    p:nth-child(2){
        font-size: 14px;
    }
`
const TextRight = styled(Text)`
    text-align: right;
`
const CardWrap = styled.div`
    width: 800px;
    margin: 0 auto;
    ul{
        display: flex;
        justify-content: space-between;
    }
`
const Card = styled.li`
    background-color: #ddd;
    width: 250px;
    height: 300px;
    text-align: center;
    &.on{
        background-color: #fff;
        color: blueviolet;
        transition: 0.5s;
    }
    p{
        font-size: 24px;
    }
`
const Typing = styled.div`
    width: 800px;
    height: 300px;
    overflow: hidden;
    margin: 0 auto;
    background-color: #fff;
`


function Detail_Test() {
    const [isHovering, setIsHovering] = useState(0);

  return (
    <MainBg>
        <Ball></Ball>
        <TextBg>
            <Text>
                <p>#abc</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet?</p>
            </Text>
        </TextBg>
        <CardWrap>
            <ul>
                {/* <Card className={isHovering === true ? 'on' : ''} onMouseEnter={()=>{setIsHovering(!isHovering)}} onMouseLeave={() => {setIsHovering(false)}}>
                    {isHovering === true ?
                        <>
                            <p>answer1</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, iusto?</span>
                        </>
                        : 
                        <>
                            <p>quiz1</p>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </>
                    }
                </Card> */}
                {
                    Array(3).fill().map((e,i)=>{
                        return (
                            <Card key={i} className={isHovering === i ? 'on' : ''} onMouseEnter={()=>{setIsHovering(i)}} onMouseLeave={() => {setIsHovering(false)}}>
                                {isHovering === i ?
                                    <>
                                        <p>answer{i+1}</p>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, iusto?</span>
                                    </>
                                    : 
                                    <>
                                        <p>quiz{i+1}</p>
                                        <span>Lorem ipsum dolor sit amet.</span>
                                    </>
                                }
                            </Card>
                        )
                    })
                }
            </ul>
        </CardWrap>
        <TextBg>
            <TextRight>
                <p>#def</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet?</p>
            </TextRight>
        </TextBg>
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
        <TextBg>
            <Text>
                <p>#abc</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque libero dicta nulla nihil commodi suscipit quae dolores eius praesentium eveniet?</p>
            </Text>
        </TextBg>
    </MainBg>
  )
}

export default Detail_Test