import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import breakpoints, { colors } from "../helpers/constants";
import Image from "next/image";

export const HeadingXL = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

export const StyledText = styled.p<{color: string}>`
  color: ${props => props.color || colors.black};
`;

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

export const WorkExperienceWrapper = styled.div`
  margin: 240px 0;
  ${breakpoints.smDown} {
    margin: 120px 0;
  }
`;