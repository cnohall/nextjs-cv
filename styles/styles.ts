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

export const StyledSubheading = styled.h5`
  text-transform: uppercase;
  color: ${colors.silver};
`;

export const StyledParagraph = styled.p`
  color: ${colors.silver};
  max-width: 820px;
`;

export const StyledRow = styled(Row)`
  height: calc(100vh - 60px);
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
  ${breakpoints.xlDown} {
    margin: 160px 0;
  }
  ${breakpoints.lgDown} {
    margin: 120px 0;
  }
  ${breakpoints.smDown} {
    margin: 80px 0;
  }
`;