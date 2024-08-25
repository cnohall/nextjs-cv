import React from 'react';
import { StyledSubheading, StyledTitle, StyledParagraph } from '../../../styles/styles';


const Introduction: React.FC = () => {
  return (
    <div>
      <StyledSubheading>Introduction</StyledSubheading>
      <StyledTitle>Overview</StyledTitle>
      <StyledParagraph>
        I&apos;m a skilled Frontend developer with experience in TypeScript and JavaScript,
        and expertise in frameworks like React, React-Native, and Next.
        I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable,
        and user-friendly solutions that solve real-world problems.
        Let&apos;s work together to bring your ideas to life!
      </StyledParagraph>
    </div>
  );
};

export default Introduction;