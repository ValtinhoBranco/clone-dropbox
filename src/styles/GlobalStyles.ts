import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }

  html, body, #root {
    max-height:100vh;
    max-width:100vw;

    height: 100%;
    width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', Arial ,sans-serif;
  }

  html {
    background: var(--color-primary);
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  :root {
  --color-primary: #0d2f81;
  --color-secondary: #ffe7aa;
  --color-tertiary: #fff;
  --color-quaternary: #000;

  --color-blue: #0061ff;
  --color-border: #bdc4c9;
}
`