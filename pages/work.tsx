import Head from 'next/head'
import Image from 'next/image'
import Gpd_icon from '../public/GPD_icon.png';
import Blockonomics_icon from '../public/blockonomics_icon.png';
import Dalarnas_icon from '../public/dalarnas_icon.png';
import Gongdo_icon from '../public/gongdo_icon.jpg';
import styles from '../styles/Home.module.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaTooth } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

const GoodPairDaysIcon = () => {
  return (
    <Image
      className='rounded-circle'
      src={Gpd_icon}
      alt="Good Pair Days"
      width={128}
      height={128}
    />
  )
}

const BlockonomicsIcon = () => {
  return (
    <Image
      className='rounded-circle'
      src={Blockonomics_icon}
      alt="Blockonomics"
      width={128}
      height={128}
    />
  )
}

const DalarnasIcon = () => {
  return (
    <Image
      className='rounded-circle'
      src={Dalarnas_icon}
      alt="Dalarnas University"
      width={128}
      height={128}
    />
  )
}

const GongdoIcon = () => {
  return (
    <Image
      className='rounded-circle'
      src={Gongdo_icon}
      alt="Gongdo Tech"
      width={128}
      height={128}
    />
  )
}

export default function Work() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Chris Nohall's Work Experience`}</title>
        {/* Change this for create better SEO */}
        <meta name="description" content="Chris Nohall's Work Experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Work Experience</h1>

      <VerticalTimeline lineColor={ 'rgb(177,172,185)' }>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
          date="Aug 2021 - present"
          icon={<GoodPairDaysIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Good Pair Days</h4>
          <p>
            Internationalization, Payment solutions, Product Managment, Performance enhancement, SEO.
          </p>
          <p>
            Required Skills: TypeScript, React, React-Native, i18n, GraphQL.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2021 - July 2021"
          contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
          icon={<BlockonomicsIcon/>}
        >
          <h3 className="vertical-timeline-element-title">PHP Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Blockonomics</h4>
          <p>
            User Experience, Visual Design, WordPress, PrestaShop, WHMCS, Blockchain.
          </p>
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 July - Sep 2020"
          contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GongdoIcon />}
        >
          <h3 className="vertical-timeline-element-title">Freelance Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Gongdo Tech</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 Sep - June 2017"
          contentStyle={{ background: 'rgb(177,172,185)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(177,172,185)' }}
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<DalarnasIcon />}
        >
          <h3 className="vertical-timeline-element-title">{`Bachelor's Degree - Chinese Linguistics`}</h3>
          <h4 className="vertical-timeline-element-subtitle">Dalarnas University</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
