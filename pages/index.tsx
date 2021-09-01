import React, { useState } from 'react';
import ActivityDisplay, { Activity } from '../components/community/activity';
import InfoDisplay from '../components/community/info';
import NavigationDisplay from '../components/community/navigation';
import GuidePage from '../components/page/guidePage';
import { getLocale } from '../lib/lang';

export const siteTitle = 'Community';

export default function LandingPage({
   data,
}: {
   data: {
      activity: Activity[];
   };
}) {
   const [user, setUser] = useState({});
   const isLoggedIn = (user as any).userid;
   const userPrivilege = (user as any).privileges;
   const userLang = (user as any).langid;
   const isMod = userPrivilege
      ? userPrivilege.includes('Admin') || userPrivilege.includes('Moderator')
      : false;

   return (
      <GuidePage title={siteTitle}>
         <NavigationDisplay
            title={siteTitle}
            setUser={setUser}
            isLoggedIn={isLoggedIn}
            isMod={isMod}
         />
         <InfoDisplay userLang={userLang ? userLang : getLocale()} />
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
