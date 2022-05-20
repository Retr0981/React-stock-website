import { createGlobalsStyle } from 'styled-components';

const GlobalStyle = createGlobalsStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Opens Sans' , sans-serif;
}

html,body {
  overflow-x: hidden;
}

`;

export default GlobalStyle;