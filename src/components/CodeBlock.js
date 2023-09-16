import React from 'react';  
import CodeMirror from '@uiw/react-codemirror';  
import { abcdef } from '@uiw/codemirror-theme-abcdef';function CodeBlock({width, height, value}) {  
  const onChange = React.useCallback((value, viewUpdate) => {  
    console.log('value:', value);  
  }, []);  
  return (  
    <CodeMirror  
      value={value}
      height={`${height}px`}
      width={`${width}px`}
      onChange={onChange}
      theme={abcdef}
    />  
  );  
}  
export default CodeBlock;

