import Head from 'next/head';

// TODO: Re-incorporate this when ready
export default function Resume() {
  return (
    <div>
      <Head>
        <title>{"Chris Nohall's Projects"}</title>
        {/* Change this for create better SEO */}
        <meta name="description" content="Projects by Chris Nohall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="my-3">Projects</h1>
    </div>
  );
}
