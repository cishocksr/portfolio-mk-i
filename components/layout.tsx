import Head from 'next/head';

export default function Layout({
  children,
  title = 'Chris Shockley | Developer',
}) {
  return (
    <div>
      <Head>
        <link rel='shortcut icon' href='/images/dev-logo-png' />
        <title>{title} | Chris Shockley</title>
      </Head>

      <div>{children}</div>
    </div>
  );
}
