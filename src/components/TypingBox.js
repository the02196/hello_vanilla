import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import styled from 'styled-components'

const TextBg = styled.div`
    background-color: white;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    width: 1400px;
    display: flex;
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
        font-family: Fira Code;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 10px;
    }
    p{
        font-size: 17px;
    }
`

const LeftTypingBox = ({ text, marginTop, marginBtm, leftStart  }) => {
    
    return (
       
        <TextBg style={{ margin: `${marginTop}px auto ${marginBtm}px`  }}>
            <Picture style={{ marginLeft: "30px", marginRight: "30px", backgroundImage: `url("../images/portraits/man_8.png")` }}></Picture>
            <Text>
                <h3>#dh3308</h3>
                {
                    leftStart&&
                <TypeAnimation sequence={[
                    text, 1000,
                ]}
                    wrapper="span"
                    speed={70}
                    style={{ fontSize: '18px', display: 'inline-block' }} />
                }
                
            </Text>
        </TextBg>
    )
}
const LeftTypingBox1 = ({ text, marginTop, marginBtm, leftStart1, text2  }) => {
    
    return (
       
        <TextBg style={{ margin: `${marginTop}px auto ${marginBtm}px`  }}>
            <Picture style={{ marginLeft: "30px", marginRight: "30px", backgroundImage: `url("../images/portraits/man_8.png")` }}></Picture>
            <Text>
                <h3>#dh3308</h3>
                {
                    leftStart1&&
                <TypeAnimation sequence={[
                    text, 1000,
                ]}
                    wrapper="span"
                    speed={70}
                    style={{ fontSize: '18px', display: 'inline-block' }} />
                }
                
            </Text>
        </TextBg>
    )
}

const LeftTypingBox2 = ({ text, marginTop, marginBtm, leftStart2,}) => {
    
    return (
       
        <TextBg style={{ margin: `${marginTop}px auto ${marginBtm}px`  }}>
            <Picture style={{ marginLeft: "30px", marginRight: "30px", backgroundImage: `url("../images/portraits/man_8.png")` }}></Picture>
            <Text>
                <h3>#dh3308</h3>
                {
                    leftStart2&&
                <TypeAnimation sequence={[
                    text, 500,
                ]}
                    wrapper="span"
                    speed={70}
                    style={{ fontSize: '18px', display: 'inline-block' }} />
                }
                
            </Text>
        </TextBg>
    )
}



export {LeftTypingBox, LeftTypingBox1, LeftTypingBox2};