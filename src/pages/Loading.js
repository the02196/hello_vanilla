import React from "react";
import Alphabet from "../components/Alphabet";
import Binary from "../components/Binary";
import Morse from "../components/Morse";
import Waiting from "../components/Waiting";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SkipBtn = styled.span`
  display: inline-block;
  position: fixed;
  bottom: 45px;
  right: 50px;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 10px;
  a{
    font-size: 27px;
    font-family: Fira Code;
    color: black;
    &:visited{
      color: darkgray;
    }
  }
`

function Loading() {
  return (
    <>
      <Morse />
      <Binary />
      <Alphabet />
      <Waiting />
    </>
  );
}

export default Loading;
{/* <SkipBtn><NavLink to={"/main"}>스킵하기</NavLink></SkipBtn> */}
