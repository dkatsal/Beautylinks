import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100%;
    font-family: 'Lato', sans-serif;
    @media (max-width: 1023px) {
      font-size: 14px;
      padding-top: 131px;
    }
    @media (min-width: 1024px) {
      font-size: 18px;
      padding-top: 150px;
    }
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  * {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .DayPicker-Day {
    color: #00c7c7;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: #00c7c7;
  }

  @keyframes circle {
    0% {
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
    }
    50% {
      top: -5px;
      left: -5px;
      width: 60px;
      height: 60px;
    }
    100% {
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
    }
  }
  @keyframes circle2 {
    0% {
      top: -5px;
      left: -5px;
      width: 60px;
      height: 60px;
    }
    50% {
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
    }
    100% {
      top: -5px;
      left: -5px;
      width: 60px;
      height: 60px;
    }
  }
`;

export default GlobalStyle;
