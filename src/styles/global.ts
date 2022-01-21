import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
  }
    
:root{
  --text-title: 'Montserrat', sans-serif;
  --text-font: 'Mulish', sans-serif;
}


html, body {
  color: var(--text-color);
  font-family:'Mulish', sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0;
  padding: 0;

  font-size: 1rem;
  background-color: #fff;
    
}



`;
