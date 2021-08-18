import { Box, Button, ButtonGroup, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router';
import React from 'react'
import styles from '../../styles/community/navigation.module.css'

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

function ChakraTabs(title: string) {
  const router = useRouter();

  return tabs.map((tab: TabData, index: number) => {
     const url = tab.url;
     const label = tab.label;
     return (
        <Tab
          key={index}
          onClick={() => router.push(url)}
        >
          {label}
        </Tab>
     );
  });
}

function listTabPanelComponents() {
  return tabs.map((tabInfo) => {
     return <TabPanel key={tabInfo.label}></TabPanel>;
  });
}

function getActiveTabIndex(pageTitle: string) {
  let index = 0;
  while (index < tabs.length) {
     const tab = tabs[index];
     if (tab.label === pageTitle) {
        break;
     }
     index++;
  }
  return index;
}

export default function NavigationDisplay({ title }: { title: string }) {
    return (
        <React.Fragment>
          <Flex
            margin='var(--space-8) 0 var(--space-5)'
            align='center'
            direction={{ base:'column', md:'row' }}
            justify={{ base:'center', md:'space-between' }}>
            <Heading as='h1'>Community</Heading>
            <ButtonGroup 
              variant='outline' 
              spacing='var(--space-4)'
              marginTop={{ base:'var(--space-4)', md: 0 }}>
              <Button borderColor='var(--color-gray-3)'>How this Works</Button>
              <Button borderColor='var(--color-gray-3)'>Join the Community</Button>
            </ButtonGroup>
          </Flex>
          <Box className={styles.wrapper}>
            <Tabs
               isLazy
               isFitted
               variant="line"
               overflowX="auto"
               padding="3px"
               height="55px"
               defaultIndex={getActiveTabIndex(title)}
            >
               <TabList>{ChakraTabs(title)}</TabList>
               <TabPanels display="none">{listTabPanelComponents()}</TabPanels>
            </Tabs>
         </Box>
        </React.Fragment>
    )
}
