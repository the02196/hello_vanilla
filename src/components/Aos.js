import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { styled } from "styled-components";

const Ball = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: url("./images/ball/ball_background.png");
    background-size: cover;
    background-position: center;
    margin: 50px auto;
`
export default function MyFunctionalComponent() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div data-aos='fade-down' data-aos-duration='2000'>
      <Ball></Ball>
    </div>
  );
}