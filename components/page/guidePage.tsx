import Head from 'next/head'
import styles from '../../styles/guidePage.module.css'
import Footer from '../ifixit/footer';
import Header from '../ifixit/header';

export default function GuidePage({ title, children } : {
    title: string,
    children: React.ReactNode
  })  {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header/>
      <main className={styles.main}>{children}</main>
      <Footer/>
    </div>
  )
}