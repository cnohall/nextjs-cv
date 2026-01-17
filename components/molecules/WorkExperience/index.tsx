import Head from 'next/head';
import Image from 'next/image';
import Gpd_icon from '../../../assets/images/GPD_icon.png';
import Blockonomics_icon from '../../../assets/images/blockonomics_icon.png';
import { useTranslation } from 'next-i18next';
import { I18N_NAMESPACES } from '../../../helpers/constants';

const WorkExperience = () => {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  return (
    <section id="work" className="py-16 border-t border-white/10">
      <div className="mb-12">
        <span className="text-green-500 font-mono text-sm uppercase tracking-widest">{t('common:what_i_have_done_so_far')}</span>
        <h2 className="text-3xl font-bold mt-2">{t('common:work_experience')}</h2>
      </div>

      <div className="space-y-12">
        {[
          {
            id: 'lead',
            title: t('common:work_blockonomics_lead_title'),
            company: t('common:work_blockonomics_lead_company'),
            date: t('common:work_blockonomics_lead_date'),
            descs: [t('common:work_blockonomics_lead_desc1'), t('common:work_blockonomics_lead_desc2'), t('common:work_blockonomics_lead_desc3')],
            icon: Blockonomics_icon
          },
          {
            id: 'gpd',
            title: 'Frontend Developer',
            company: 'Good Pair Days',
            date: 'Aug 2021 - Present',
            descs: [
              'Implemented New Designs and Features: Utilized React and React Native to develop and enhance web and mobile applications, ensuring seamless user experiences.',
              'Project Leadership: Led projects from initial Figma designs to final implementation, taking full ownership to deliver user-friendly interfaces.',
              'End-to-end Testing: Integrated end-to-end testing using Cypress, ensuring robust applications.',
              'Responsive Design: Created responsive web pages that functioned flawlessly across a wide range of devices, enhancing usability and visual appeal.'
            ],
            icon: Gpd_icon
          },
          {
            id: 'blockonomics',
            title: 'PHP Developer',
            company: 'Blockonomics',
            date: 'Feb 2021 - July 2021',
            descs: [
              'Enhanced Payment Solutions: Utilized PHP, Python, WordPress, and other CMS platforms to streamline customer access to Blockonomics’ payment solutions.',
              'CMS Integration: Integrated and customized various CMSs to support seamless payment processing and improve user experience.',
              'Technical Expertise: Leveraged strong technical skills to develop and maintain robust, scalable solutions for cryptocurrency transactions.',
              'Customer Focus: Ensured that payment solutions were user-friendly and accessible, enhancing overall customer satisfaction.'
            ],
            icon: Blockonomics_icon
          },
          {
            id: 'uaedentist',
            title: 'Full Stack Developer',
            company: 'UAE Dentist',
            date: 'Sep 2020 - Jan 2021',
            descs: [
              'Serverless Architecture and Firebase Integration: Developed serverless apps with Netlify, implementing authentication and Google Maps API.',
              'Full-Stack Development: Built web apps with JavaScript, React, Node.js, MongoDB, and Express for seamless user experiences.'
            ],
            icon: Gpd_icon
          },
        ].map((job) => (
          <div key={job.id} className="relative pl-8 border-l-2 border-white/10 hover:border-green-500 transition-colors">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#171321] border-2 border-green-500 rounded-full" />
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <span className="text-green-500 font-medium">{job.company}</span>
              </div>
              <span className="text-sm text-[#AAA6CF] font-mono mt-1 md:mt-0">{job.date}</span>
            </div>
            <ul className="space-y-2">
              {job.descs.map((desc, i) => (
                <li key={i} className="text-[#AAA6CF] leading-relaxed flex items-start">
                  <span className="mr-2 mt-2 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
