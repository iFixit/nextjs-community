import Head from 'next/head'
import React from 'react'
import ActivityDisplay from '../components/community/activity';
import InfoDisplay from '../components/community/info';
import NavigationDisplay from '../components/community/navigation';
import GuidePage, { siteTitle } from '../components/page/guidePage';

export default function LandingPage() {
  return (
    <GuidePage>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavigationDisplay/>
      <InfoDisplay/>
      <ActivityDisplay/>
    </GuidePage>
  )
}
