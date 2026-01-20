import { useTranslation } from 'next-i18next';
import { I18N_NAMESPACES } from '../../../helpers/constants';
import Image from 'next/image';
import myImage from '../../../assets/images/cartoon_me.png';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight h-24 md:h-32">
          <TypeAnimation
            sequence={[t('common:frontendDeveloper'), 1000, 'Chris Nohall', 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <h3 className="text-xl md:text-2xl text-[#AAA6CF] mb-8 font-light">
          {t('common:basedInKorea')}
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/projects"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            {t('common:view_projects')}
          </Link>
          <a
            href="#contact"
            className="border border-white/20 hover:border-white text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            {t('common:get_in_touch')}
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-48 h-80 md:w-64 md:h-[400px] rounded-2xl p-1 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 transform hover:scale-105 transition-all duration-500">
          <div className="relative w-full h-full">
            <Image
              className="rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src={myImage}
              alt="Chris Nohall"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
