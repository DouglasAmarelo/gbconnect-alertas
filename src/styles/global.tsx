import React from 'react';
import { Global, css } from '@emotion/core';

const Reset = () => css`
  :root {
    --primaryColor: #e04793;
    --secondaryColor: #53306e;

    --primaryTextColor: #fff;
    --secondaryTextColor: #3d3d3d;

    --primaryFontFamily: 'Montserrat', sans-serif;
    --secondaryFontFamily: 'Lora', serif;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    background: var(--primaryColor);
    background: linear-gradient(
      90deg,
      var(--primaryColor) 0%,
      var(--secondaryColor) 100%
    );
    margin: 0;
    padding: 0;
  }

  @import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Montserrat:wght@500;900&display=swap');

  html,
  body,
  .App {
    color: var(--primaryTextColor);
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    min-height: 100vh;
  }

  .App {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 95%;
  }
`;

const GlobalStyle = () => <Global styles={Reset} />;

export default GlobalStyle;
