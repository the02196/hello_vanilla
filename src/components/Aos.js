import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { styled } from "styled-components";

const MainBg = styled.div`
    background-color: #d9d9d9;
`
const Ball = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url("./images/ball/ball_background.png");
  background-size: cover;
  margin: 50px auto;
  p{
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    position: absolute;
    top: 220px;
  }
`
const Left = styled.div`
    width: 100px;
    height: 200px;
    background-size: cover;
    background-image: url('./images/walk/left_foot.png');
    margin-left: 30%;
`
const Right = styled.div`
  width: 100px;
  height: 200px;
  background-size: cover;
  background-image: url('./images/walk/right_foot.png');
  position: absolute;
  margin-left: 70%;
`
const Eye = styled.div`
  width: 300px;
  height: 200px;
  background-size: cover;
  background-image: url('./images/eye/pupil.png');
  margin-left: 18%;
`
const True = styled.div`
  width: 200px;
  height: 200px;
  background-size: cover;
  background-image: url('./images/true_or_false/spy.png');
  margin-left: 700px;
`
function Aos() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <MainBg>
        <Ball data-aos='zoom-in' data-aos-duration='3000'>
          <p>함께 공을 움직여볼까요?</p>
        </Ball>
        <Left data-aos='fade-down-right' data-aos-duration='3000'>
        </Left>
        <Right data-aos='zoom-out' data-aos-duration='2200'>
        </Right>
        <True data-aos="flip-down" data-aos-duration="2000">
        </True>
        <Eye data-aos="zoom-in-up" data-aos-duration='2000'>
        </Eye>
    </MainBg>
  )
}

export default Aos