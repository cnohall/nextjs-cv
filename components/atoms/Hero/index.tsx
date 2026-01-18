import { useTranslation } from 'next-i18next';
import { I18N_NAMESPACES } from '../../../helpers/constants';
import Image from 'next/image';
import myImage from '../../../assets/images/cartoon_me.png';

const Hero = () => {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
          {t('common:frontendDeveloper')}
        </h1>
        <h3 className="text-xl md:text-2xl text-[#AAA6CF] mb-8 font-light">
          {t('common:basedInKorea')}
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/projects"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            {t('common:view_projects')}
          </a>
          <a
            href="#contact"
            className="border border-white/20 hover:border-white text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            {t('common:get_in_touch')}
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-48 h-80 md:w-64 md:h-[400px]">
          <Image
            className="rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
            src={myImage}
            alt="Chris Nohall"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
