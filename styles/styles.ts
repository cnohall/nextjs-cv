import { Row } from "react-bootstrap";
import styled from "styled-components";
import breakpoints from "../helpers/constants";

export const StyledTitle = styled.h1`
  font-weight: 900;
`;

export const StyledRow = styled(Row)`
  margin: 80px 0;
  ${breakpoints.smDown} {
    margin: 40px 0;
  }
`;