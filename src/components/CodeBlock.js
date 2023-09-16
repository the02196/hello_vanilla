import React from 'react';  
import CodeMirror from '@uiw/react-codemirror';  
import { abcdef } from '@uiw/codemirror-theme-abcdef';function CodeBlock() {  
  const onChange = React.useCallback((value, viewUpdate) => {  
    console.log('value:', value);  
  }, []);  
  return (  
    <CodeMirror  
      value="console.log('hello world!');"  
      height="200px"  
      width='500px'
      onChange={onChange}  
      theme={abcdef}  
    />  
  );  
}  
export default CodeBlock;

