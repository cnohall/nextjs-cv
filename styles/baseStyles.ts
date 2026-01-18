import { createGlobalStyle } from 'styled-components';
import { colors } from '../helpers/constants';

const BaseStyle = createGlobalStyle`
  html,
  body {
    font-family: Poppins, sans-serif !important;
    font-weight: 500 !important;
  }
`;

export default BaseStyle;
