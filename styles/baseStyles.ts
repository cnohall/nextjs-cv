import { createGlobalStyle } from "styled-components";
import { colors } from "../helpers/constants";


const BaseStyle = createGlobalStyle`
  html,
  body {
    background-color: ${colors.background};
    color: ${colors.white};
    font-family: Poppins, sans-serif !important;
    font-weight: 500 !important;
  }
`;

export default BaseStyle;