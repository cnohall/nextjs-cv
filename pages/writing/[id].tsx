import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/atoms/Date';
import { Container } from 'react-bootstrap';
import { HeadingXL, StyledText } from '../../styles/styles';
import { colors } from '../../helpers/constants';

export default function Post({ postData }) {
  return (
    <Container>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <HeadingXL>{postData.title}</HeadingXL>
        <StyledText color={colors.white}>
          <Date dateString={postData.date} />
        </StyledText>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Container>
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
