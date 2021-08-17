import { Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

const isOnIfixit = true;
const isMod = true;
const patrolEnabled = true;
interface TabData {
  url: string;
  label: string;
  showTab: boolean;
}

let tabData: Array<TabData> = [
  {
    'url': 'https://www.ifixit.com/Community',
    'label': 'Community',
    'showTab': isOnIfixit,
  },
  {
    'url': 'https://www.ifixit.com/Leaderboard',
    'label': 'Leaderboard',
    'showTab': true,
  },
  {
    'url': 'https://www.ifixit.com/Teams/all',
    'label': 'Teams',
    'showTab': true,
  },
  {
    'url': 'https://www.ifixit.com/Business',
    'label': 'Businesses',
    'showTab': isOnIfixit,
  },
  {
    'url': 'https://www.ifixit.com/Contribute',
    'label': 'Contribute',
    'showTab': true,
  },
  {
    'url': 'https://www.ifixit.com/Translate',
    'label': 'Translate',
    'showTab': true,
  },
  {
    'url': 'https://www.ifixit.com/Patrol',
    'label': 'Patrol',
    'showTab': isMod && patrolEnabled,
  },
  {
    'url': 'https://www.ifixit.com/Moderation',
    'label': 'Moderation',
    'showTab': isMod,
  },
]

const tabs = tabData.filter((tab: TabData) => tab.showTab);

function listTabComponents() {
  return tabs.map((tab: TabData, index: number) => {
     const url = tab.url;
     const label = tab.label;
     return (
        <Tab
           key={index}
        >
           {label}
        </Tab>
     );
  });
}

function listTabPanelComponents() {
  return tabs.map((tabInfo, i) => {
     return <TabPanel key={tabInfo.label}></TabPanel>;
  });
}

export default function NavigationDisplay() {
    return (
        <React.Fragment>
          <Heading as='h1'>Community</Heading>
          {/* <TabsWrapper> */}
            <Tabs
               isLazy
               isFitted
               variant="line"
               overflowX="auto"
               padding="3px"
               height="55px"
               defaultIndex={0}
            >
               <TabList>{listTabComponents()}</TabList>
               <TabPanels display="none">{listTabPanelComponents()}</TabPanels>
            </Tabs>
         {/* </TabsWrapper> */}
        </React.Fragment>
    )
}
