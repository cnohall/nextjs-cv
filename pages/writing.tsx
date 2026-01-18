import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { I18N_NAMESPACES } from '../helpers/constants';

// TODO: Re-incorporate this when ready
export default function Writing({ allPostsData }) {
  return (
    <div className="container mx-auto px-4 text-white">
      <Head>
        <title>
          {t('common:writing')}
          {t('common:page_title_separator')}
        </title>
      </Head>
      <h3 className="my-5">{t('common:writing_welcome_message')}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        {allPostsData.map(({ id, date, title, description, readtime }) => (
          <div key={id} className="my-2">
            <Link href={`/writing/${id}`} passHref>
              <div className="bg-[rgb(177,172,185)] rounded-md overflow-hidden cursor-pointer shadow-lg transition-all ease-in-out duration-200 hover:scale-105 hover:shadow-xl text-gray-100 h-40 flex flex-col justify-between">
                <div className="p-4">
                  <h5 className="text-lg font-bold">{title}</h5>
                  <p className="text-sm">{description || ''}</p>
                </div>
                <div className="p-4 bg-black bg-opacity-10">
                  <small className="text-xs">
                    {t('common:writing_posted_prefix')}
                    {date}
                  </small>
                  <small className="text-xs ml-2">
                    {t('common:writing_read_time_prefix')}
                    {readtime || ''}
                  </small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      ...(await serverSideTranslations(locale, [I18N_NAMESPACES.COMMON])),
    },
  };
}
