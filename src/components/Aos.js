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
  margin: 0 auto;
  p{
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    position: absolute;
    top: 220px;
  }
`
const Soccer = styled.div`
    width: 350px;
    height: 400px;
    background-size: cover;
    background-image: url('./images/detail/soccer.png');
    margin-left: 20%;
`
const Elephant = styled.div`
  width: 570px;
  height: 420px;
  background-size: cover;
  background-image: url('./images/detail/elephant.png');
  position: absolute;
  left: 60%;
`
const Canon = styled.div`
  width: 400px;
  height: 320px;
  background-size: cover;
  background-image: url('./images/detail/canon.png');
  position: absolute;
`
const Wand = styled.div`
  width: 400px;
  height: 400px;
  background-size: cover;
  background-image: url('./images/detail/wand.png');
  left: 30%;
  position: absolute;
`
const Push = styled.div`
  width: 500px;
  height: 500px;
  background-size: cover;
  background-image: url('./images/detail/push.png');
  margin-left: 50%;
`
function Aos() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <MainBg>
        <Ball data-aos='zoom-in' data-aos-duration='1000'>
          <p></p>
        </Ball>
        <Elephant data-aos='fade-down-right' data-aos-duration='3000'>
        </Elephant>
        <Soccer data-aos='fade-down-right' data-aos-duration='3000'>
        </Soccer>
        <Canon data-aos='zoom-out' data-aos-duration='2200'>
        </Canon>
        <Wand data-aos="flip-down" data-aos-duration="2000">
        </Wand>
        <Push data-aos="zoom-in-up" data-aos-duration='2000'>
        </Push>
    </MainBg>
  )
}

export default Aos