import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/atoms/Date';

export default function Post({ postData }) {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl leading-tight font-extrabold tracking-tight my-4">
          {postData.title}
        </h1>
        <p className="text-white">
          <Date dateString={postData.date} />
        </p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
