import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { abcdef } from "@uiw/codemirror-themes-all";
function CodeBlock({ width, height, value }) {
  const CodeMirrorText = `<!DOCTYPE html>
<html>
    <head>
        <title>공 옮기기</title>
    </head>
    <body>
        <div id="playground">
            <div 
                id="ball" 
                style="width: 50px; 
                height: 50px; 
                background-color: red; 
                position: absolute;">
            </div>
        </div>
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
