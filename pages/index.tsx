import Head from 'next/head'
import InfoDisplay from '../components/community/info';
import GuidePage, { siteTitle } from '../components/guidePage'

export default function LandingPage() {
  return (
    <GuidePage>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Community</h1>
      </section>
      <InfoDisplay/>
    </GuidePage>
  )
}
