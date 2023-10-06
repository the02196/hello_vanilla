import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { abcdef } from "@uiw/codemirror-themes-all";
function CodeBlock({ width, height, value }) {
  const CodeMirrorText = `<html>
  <head>
  <style>
    .myBall {
	      width: 300px;
		  height: 300px;
		  border-radius: 50%;
		  background-color: green;
		  position:relative;
		}
  </style>
  </head>
  <body>
    <div class="myBall"></div>
    <button>Start Animation</button>
  </body>
  </html>`;

  const options = {
    theme: "monokai",
    lineNumbers: true,
    mode:"htmlmixed",
    readOnly: "true"
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    console.log(viewUpdate);
  }, []);

  return (
  
        <CodeMirror
          value={CodeMirrorText}
          height={`${height}px`}
          width={`${width}px`}
          onClick={onChange}
          theme={abcdef}
          options={options}
        />

  );
}
export function CodeBlocka({ width, height, value }) {
  const CodeMirrorText = `<style>
  @keyframes boxAnimation {
    0% {left: 0%}
    50% {left: 50%}
    100% {left: 100%}
  }
  .myBall {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: green;
    position:relative;
  }
  .animate{
    animation-name: boxAnimation; /* 애니메이션 이름 */
    animation-duration: 2s;/* 애니메이션 지속 시간 설정 */
    animation-timing-function: linear;/* 타이밍 설정 */
    animation-iteration-count: 10;/* 반복 횟수 설정 */
  }
</style>`;

  const options = {
    theme: "monokai",
    lineNumbers: true,
    mode:"htmlmixed",
    readOnly: "true"
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    console.log(viewUpdate);
  }, []);

  return (
  
        <CodeMirror
          value={CodeMirrorText}
          height={`${height}px`}
          width={`${width}px`}
          onClick={onChange}
          theme={abcdef}
          options={options}
        />

  );
}

export function CodeBlockb({ width, height, value }) {
  const CodeMirrorText = `<script>
  function startAnimation() {
     const circle = document.getElementsByClassName("myBall")[0];
     /* myBall이라는 class명을 가진 요소를 변수 circle에 넣어주기 */
     circle.classList.add("animate");
  /* 함수 startAnimation을 실행하면 .animate라는 class명을 더해주기 */
  }
  </script>`;

  const options = {
    theme: "monokai",
    lineNumbers: true,
    mode:"htmlmixed",
    readOnly: "true"
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    console.log(viewUpdate);
  }, []);

  return (
  
        <CodeMirror
          value={CodeMirrorText}
          height={`${height}px`}
          width={`${width}px`}
          onClick={onChange}
          theme={abcdef}
          options={options}
        />

  );
}
export function CodeBlockc({ width, height, value }) {
  const CodeMirrorText = `<button onClick="startAnimation()">Start Animation</button>`;

  const options = {
    theme: "monokai",
    lineNumbers: true,
    mode:"htmlmixed",
    readOnly: "true"
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    console.log(viewUpdate);
  }, []);

  return (
  
        <CodeMirror
          value={CodeMirrorText}
          height={`${height}px`}
          width={`${width}px`}
          onClick={onChange}
          theme={abcdef}
          options={options}
        />

  );
}
export function CodeBlockd({ width, height, value }) {
  const CodeMirrorText = `<html>
  <head>
    <style>
      @keyframes boxAnimation {
        0% {left: 0%}
        50% {left: 50%}
        100% {left: 100%}
      }
      .myBall {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: green;
        position:relative;
      }
      .animate{
        animation-name: boxAnimation;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: 10;
      }
  </style>
  </head>
  <body>
    <div class="myBall"></div>
    <button onClick="startAnimation()">Start Animation</button>
  <script>
  function startAnimation() {
     let circle = document.getElementsByClassName("myBall")[0];
     circle.classList.add("animate");
  }
  </script>
  </body>
  </html>`;

  const options = {
    theme: "monokai",
    lineNumbers: true,
    mode:"htmlmixed",
    readOnly: "true"
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    console.log(viewUpdate);
  }, []);

  return (
  
        <CodeMirror
          value={CodeMirrorText}
          height={`${height}px`}
          width={`${width}px`}
          onClick={onChange}
          theme={abcdef}
          options={options}
        />

  );
}
export function CodeBlocke({ width, height, value }) {
  const CodeMirrorText = `<html>
  <head>
    <style>
      @keyframes boxAnimation {
        0% {left: 0%}
        50% {left: 50%}
        100% {left: 100%}
      }
      .myBall {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: green;
        position:absolute;
      }
      .animate{
        animation-name: boxAnimation;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: 10;
      }
  </style>
  </head>
  <body>
    <div class="myBall"></div>
    <button onClick="startAnimation()">Start Animation</button>
  </body>
  <script>
  function startAnimation() {
     let circle = document.getElementsByClassName("myBall")[0];
     circle.classList.add("animate");
  }
  </script>
  </html>`;

  const options = {
    theme: "monokai",
    lineNumbers: true,
    mode:"htmlmixed",
    readOnly: "true"
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    console.log(viewUpdate);
  }, []);

  return (
  
        <CodeMirror
          value={CodeMirrorText}
          height={`${height}px`}
          width={`${width}px`}
          onClick={onChange}
          theme={abcdef}
          options={options}
        />

  );
}

export default CodeBlock;
