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

export default CodeBlock;
