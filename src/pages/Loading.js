import React from "react";
import Alphabet from "../components/Alphabet";
import Binary from "../components/Binary";
import Morse from "../components/Morse";
import Waiting from "../components/Waiting";

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
