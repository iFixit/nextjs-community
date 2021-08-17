import React from 'react'
import ActivityDisplay from '../components/community/activity';
import InfoDisplay from '../components/community/info';
import NavigationDisplay from '../components/community/navigation';
import GuidePage from '../components/page/guidePage';

export const siteTitle = 'Community'

export default function LandingPage() {
  return (
    <GuidePage title={siteTitle}>
      <NavigationDisplay title={siteTitle} />
      <InfoDisplay/>
      <ActivityDisplay/>
    </GuidePage>
  )
}
