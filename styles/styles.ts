import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import breakpoints from "../helpers/constants";
import Image from "next/image";

export const StyledTitle = styled.h1`
  font-weight: 900;
`;

export const StyledRow = styled(Row)`
  margin: 80px 0;
  ${breakpoints.smDown} {
    margin: 40px 0;
  }
`;

export const StyledIcon = styled(Image)`
  height: 60px;
  width: 60px;
  ${breakpoints.smDown} {
    height: 40px;
    width: 40px;
  }
`;