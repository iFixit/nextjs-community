import React from 'react';
import ActivityDisplay, { Activity } from '../components/community/activity';
import InfoDisplay from '../components/community/info';
import NavigationDisplay from '../components/community/navigation';
import GuidePage from '../components/page/guidePage';

export const siteTitle = 'Community';

export default function LandingPage({
   data,
}: {
   data: {
      activity: Activity[];
   };
}) {
   return (
      <GuidePage title={siteTitle}>
         <NavigationDisplay title={siteTitle} />
         <InfoDisplay />
         <ActivityDisplay data={data.activity} />
      </GuidePage>
   );
}

export async function getStaticProps() {
   const data = await fetch('https://bson.cominor.com/api/2.0/community').then(res => res.json());
   return {
      props: {
         data,
      },
   };
}
