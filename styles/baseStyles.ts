import { createGlobalStyle } from "styled-components";
import { colors } from "../helpers/constants";


const BaseStyle = createGlobalStyle`
  html,
  body {
    background-color: ${colors.background};
    color: ${colors.white};
  }
`;

export default BaseStyle;