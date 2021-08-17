import Head from 'next/head'
import styles from '../../styles/page/guidePage.module.css'
import Footer from '../ifixit/footer';
import Header from '../ifixit/header';

export default function GuidePage({ title, children } : {
    title: string,
    children: React.ReactNode
  })  {
  return (
    <div>
      <Head>
        <title>{title + ' - iFixit'}</title>
      </Head>
      <Header/>
      <main className={styles.main}>{children}</main>
      <Footer/>
    </div>
  )
}