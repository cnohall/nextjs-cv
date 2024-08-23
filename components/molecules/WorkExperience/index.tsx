import Head from 'next/head';
import Image from 'next/image';
import Gpd_icon from '../../../assets/images/GPD_icon.png';
import Blockonomics_icon from '../../../assets/images/blockonomics_icon.png';
import styles from '../../../styles/Home.module.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaTooth } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

const WorkExperience = () => (
  <div className={styles.container} id="work">
    <Head>
      <title>{"Chris Nohall's Work Experience"}</title>
      {/* Change this for create better SEO */}
      <meta name="description" content="Chris Nohall's Work Experience" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Work Experience</h1>

    <VerticalTimeline lineColor={'rgb(177,172,185)'}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
        date="Aug 2021 - Present"
        icon={
          <Image
            className="rounded-circle"
            src={Gpd_icon}
            alt="Good Pair Days"
            width={60}
            height={60}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Good Pair Days</h4>
        <p>
          Internationalization, Payment solutions, Product Managment, Performance enhancement, SEO.
        </p>
        <p>Required Skills: TypeScript, React, React-Native, i18n, GraphQL.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Feb 2021 - July 2021"
        contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
        icon={
          <Image
            className="rounded-circle"
            src={Blockonomics_icon}
            alt="Blockonomics"
            width={60}
            height={60}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">PHP Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Blockonomics</h4>
        <p>User Experience, Visual Design, WordPress, PrestaShop, WHMCS, Blockchain.</p>
      </VerticalTimelineElement>
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
        <p>Serverless architecture, Firebase, Authentication, Email marketing, Google Maps API.</p>
        <p>Required Skills: JavaScript, React, Node, MongoDB, Express.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);

export default WorkExperience;
