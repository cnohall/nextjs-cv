import Head from 'next/head';
import Image from 'next/image';
import Gpd_icon from '../../../assets/images/GPD_icon.png';
import Blockonomics_icon from '../../../assets/images/blockonomics_icon.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaTooth } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
import {
  CentralizedColumn,
  StyledIcon,
  StyledParagraph,
  StyledSubheading,
  StyledTitle,
  WorkExperienceWrapper,
} from '../../../styles/styles';
import { colors, I18N_NAMESPACES } from '../../../helpers/constants';
import { useTranslation } from 'next-i18next';

const WorkExperience = () => {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  return (
    <WorkExperienceWrapper id="work">
      <CentralizedColumn>
        <StyledSubheading>{t('common:what_i_have_done_so_far')}</StyledSubheading>
        <StyledTitle>{t('common:work_experience')}</StyledTitle>
      </CentralizedColumn>

      <VerticalTimeline lineColor={'rgb(177,172,185)'}>
        {/* Blockonomics Team Lead */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: colors.background, color: '#fff', border: '1px solid rgb(177,172,185)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
          date={t('common:work_blockonomics_lead_date')}
          icon={<StyledIcon className="rounded-circle" src={Blockonomics_icon} alt="Blockonomics" />}
        >
          <h3 className="vertical-timeline-element-title">{t('common:work_blockonomics_lead_title')}</h3>
          <h4 className="vertical-timeline-element-subtitle">{t('common:work_blockonomics_lead_company')}</h4>
          <StyledParagraph>{t('common:work_blockonomics_lead_desc1')}</StyledParagraph>
          <StyledParagraph>{t('common:work_blockonomics_lead_desc2')}</StyledParagraph>
          <StyledParagraph>{t('common:work_blockonomics_lead_desc3')}</StyledParagraph>
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
            End-to-end Testing: Integrated end-to-end testing using Cypress, ensuring robust
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
};

export default WorkExperience;
