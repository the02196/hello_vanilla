import React from 'react'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Monofett&display=swap');

a{text-decoration:none; color:#000;}
*{
  font-family: 'Fira Code', monospace;
}

body{
  -ms-overflow-style:none;
  overflow-x: hidden 
}
body::-webkit-scrollbar { display:none; }

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
abbr,
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
figure,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hgroup,
input,
legend,
li,
ol,
p,
pre,
ul {
  margin: 0;
  padding: 0;
}
address,
caption,
code,
figcaption,
pre,
th {
  font-size: 1em;
  font-weight: 400;
  font-style: normal;
}
fieldset,
iframe {
  border: 0;
}
caption,
th {
  text-align: left;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
details,
main,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  vertical-align: initial;
}
button {
  background: none;
  border: 0;
  box-sizing: initial;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  overflow: visible;
  vertical-align: inherit;
}
button:disabled {
  cursor: default;
}
:focus {
  outline: 4px solid rgba(255, 255, 255, 0.6);
  outline-offset: 1px;
}
:focus[data-focus-method="mouse"]:not(input):not(textarea):not(select),
:focus[data-focus-method="touch"]:not(input):not(textarea):not(select) {
  outline: none;
}
::-moz-focus-inner {
  border: 0;
  padding: 0;
}


.morse-active::after{
    transform: scale(0.3);
   }
`
 

export default GlobalStyle