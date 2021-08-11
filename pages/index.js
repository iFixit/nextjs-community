import Head from 'next/head'
import InfoDisplay from '../components/community/info';
import Layout, { siteTitle } from '../components/layout'

export default function LandingPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Community</h1>
      </section>
      <InfoDisplay/>
    </Layout>
  )
}
