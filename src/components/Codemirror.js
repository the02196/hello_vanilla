import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { abcdef } from '@uiw/codemirror-theme-abcdef';

function Codemirror() {
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
      // https://uiwjs.github.io/react-codemirror/#/theme/home 여기서 마음에 드는 테마 고르셔서 import { 테마이름 } 하시고 theme = { 테마이름 } 하시면 적용됩니다.
      // 여기서 style 적용하시면 됩니다.
    />
  );
}
export default Codemirror;