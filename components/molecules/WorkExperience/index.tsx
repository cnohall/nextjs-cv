import Head from 'next/head';
import Image from 'next/image';
import Gpd_icon from '../../../assets/images/GPD_icon.png';
import Blockonomics_icon from '../../../assets/images/blockonomics_icon.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaTooth, FaShieldAlt, FaEnvelopeOpenText, FaBitcoin } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
import {
  CentralizedColumn,
  StyledIcon,
  StyledParagraph,
  StyledSubheading,
  StyledTitle,
  WorkExperienceWrapper,
} from '../../../styles/styles';
import { colors } from '../../../helpers/constants';

const WorkExperience = () => (
  <WorkExperienceWrapper id="work">
    <CentralizedColumn>
      <StyledSubheading>What I Have Done So Far</StyledSubheading>
      <StyledTitle>Work Experience</StyledTitle>
    </CentralizedColumn>

    <VerticalTimeline lineColor={'rgb(177,172,185)'}>
      {/* PolarisAudit */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
        iconStyle={{ background: colors.background, color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<FaShieldAlt size={25} />}
      >
        <h3 className="vertical-timeline-element-title">Lead Developer / Founder</h3>
        <h4 className="vertical-timeline-element-subtitle">PolarisAudit</h4>
        <StyledParagraph>
          Developed a comprehensive website compliance tool that audits privacy (GDPR), security, accessibility, and performance.
        </StyledParagraph>
        <StyledParagraph>
          Built an automated scanning engine and an interactive dashboard providing step-by-step fix instructions with code examples.
        </StyledParagraph>
      </VerticalTimelineElement>

      {/* EmptyInbox */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 - 2024"
        contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
        iconStyle={{ background: colors.background, color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<FaEnvelopeOpenText size={25} />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">EmptyInbox</h4>
        <StyledParagraph>
          Created a privacy-first email service with auto-deletion and secure Passkey-based authentication.
        </StyledParagraph>
        <StyledParagraph>
          Implemented intelligent detection for activation codes and multi-inbox management.
        </StyledParagraph>
      </VerticalTimelineElement>

      {/* Blockonomics RKExplorer */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - 2023"
        contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
        iconStyle={{ background: colors.background, color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<FaBitcoin size={25} />}
      >
        <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Blockonomics (RKExplorer)</h4>
        <StyledParagraph>
          Contributed to the development of a Bitcoin block explorer and real-time payment tracking interfaces.
        </StyledParagraph>
      </VerticalTimelineElement>

      {/* Good Pair Days */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
        date="Aug 2021 - Present"
        icon={<StyledIcon className="rounded-circle" src={Gpd_icon} alt="Good Pair Days" />}
      >
        <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Good Pair Days</h4>
        <StyledParagraph>
          Implemented New Designs and Features: Utilized React and React Native to develop and
          enhance web and mobile applications, ensuring seamless user experiences.
        </StyledParagraph>
        <StyledParagraph>
          Project Leadership: Led projects from initial Figma designs to final implementation,
          taking full ownership to deliver user-friendly interfaces.
        </StyledParagraph>
        <StyledParagraph>
          End-to-End Testing: Integrated end-to-end testing using Cypress, ensuring robust
          applications.
        </StyledParagraph>
        <StyledParagraph>
          Responsive Design: Created responsive web pages that functioned flawlessly across a wide
          range of devices, enhancing usability and visual appeal.
        </StyledParagraph>
      </VerticalTimelineElement>

      {/* Blockonomics */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Feb 2021 - July 2021"
        contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
        icon={<StyledIcon className="rounded-circle" src={Blockonomics_icon} alt="Blockonomics" />}
      >
        <h3 className="vertical-timeline-element-title">PHP Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Blockonomics</h4>
        <StyledParagraph>
          Enhanced Payment Solutions: Utilized PHP, Python, WordPress, and other CMS platforms to
          streamline customer access to Blockonomics’ payment solutions.
        </StyledParagraph>
        <StyledParagraph>
          CMS Integration: Integrated and customized various CMSs to support seamless payment
          processing and improve user experience.
        </StyledParagraph>
        <StyledParagraph>
          Technical Expertise: Leveraged strong technical skills to develop and maintain robust,
          scalable solutions for cryptocurrency transactions.
        </StyledParagraph>
        <StyledParagraph>
          Customer Focus: Ensured that payment solutions were user-friendly and accessible,
          enhancing overall customer satisfaction.
        </StyledParagraph>
      </VerticalTimelineElement>

      {/* UAE Dentist */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2020 - Jan 2021"
        contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
        iconStyle={{ background: 'rgb(34,139,34)', color: '#fff' }}
        icon={<FaTooth />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">UAE Dentist</h4>
        <StyledParagraph>
          Serverless Architecture and Firebase Integration: Developed serverless apps with Netlify,
          implementing authentication and Google Maps API.
        </StyledParagraph>
        <StyledParagraph>
          Full-Stack Development: Built web apps with JavaScript, React, Node.js, MongoDB, and
          Express for seamless user experiences.
        </StyledParagraph>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </WorkExperienceWrapper>
);

export default WorkExperience;
