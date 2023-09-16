import React from 'react'
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




const LeftTypingBox = ({ text, marginTop, marginBtm  }) => {
    return (
        <TextBg style={{ margin: `${marginTop}px auto ${marginBtm}px`  }}>
            <Picture style={{ marginLeft: "30px", marginRight: "30px", backgroundImage: `url("../images/detail/profiles/Woman_1.png")` }}></Picture>
            <Text>
                <h3>#dh3308</h3>
                <TypeAnimation sequence={[
                    text, 1000,
                ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '16px', display: 'inline-block' }} />
            </Text>
        </TextBg>
    )
}
const RightTypingBox = ({ text, marginTop, marginBtm  }) => {
    return (
        <TextBg style={{justifyContent: "flex-end", margin: `${marginTop}px auto ${marginBtm}px`  }}>
            <Text style={{alignItems: "flex-end"}} >
                <h3>#romi6342</h3>
                <TypeAnimation sequence={[
                    text, 1000,
                ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '16px', display: 'inline-block' }} />
            </Text>
            <Picture style={{ marginLeft: "30px", marginRight: "30px", backgroundImage: `url("../images/detail/profiles/Man_3.png")` }}></Picture>
        </TextBg>
    )
}

const LeftTextBox = ({ text, marginTop, marginBtm }) => {

    return (
        <TextBg style={{ margin: `${marginTop}px auto ${marginBtm}px` }}>
            <Picture style={{marginLeft: "30px", marginRight: "30px", backgroundImage: `url("../images/detail/profiles/Woman_1.png")` }}></Picture>
            <Text>
                <h3>#dh3308</h3>
                <p>{text}</p>
            </Text>
        </TextBg>
    )
}
const RightTextBox = ({ text, marginTop, marginBtm }) => {
    return (
        <TextBg style={{ justifyContent: "flex-end", margin: `${marginTop}px auto ${marginBtm}px` }}>
            <Text style={{ alignItems: "flex-end" }}>
                <h3>#romi6342</h3>
                <p>{text}</p>
            </Text>
            <Picture style={{ marginLeft: "30px", marginRight: "30px", backgroundImage: `url("../images/detail/profiles/Man_3.png")` }}></Picture>
        </TextBg>
    )
}
function TypingBox() {
  return (
    <></>
  )
}

export {LeftTypingBox, RightTypingBox};