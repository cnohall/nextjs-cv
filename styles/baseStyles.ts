import { createGlobalStyle } from "styled-components";

import { colors, fonts } from "./variables";

const BaseStyle = createGlobalStyle`
  html,
  body {
    font-family: ${fonts.fontPoppinsRegular}, sans-serif;
    background-color: ${colors.background};
    color: ${colors.white};
  }
`;

export default BaseStyle;