import { Stack, HStack, Divider } from '@chakra-ui/react';
import { Footer, FooterLink } from '@ifixit/react-components';
import React from 'react';
import links from '../../../lib/links';
import DesktopView from './desktopView';
import MobileView from './mobileView';

export default function FooterComponent() {
   return (
      <Footer bgColor="var(--color-black)">
         <DesktopView />
         <MobileView />
         <Divider display={{ base: 'none', sm: 'unset' }} mt="18px" borderColor="trueGray.700" />
         <Legal />
      </Footer>
   );
}

function Legal() {
   return (
      <Stack
         w={{ base: '90%', xl: '1000px' }}
         margin="0 auto"
         py="24px"
         align="center"
         justify={{
            base: 'center',
         }}
         direction={{
            base: 'column',
            sm: 'row',
         }}
         spacing={4}
      >
         <FooterLink color="trueGray.400" href={links.LICENSING}>
            © iFixit 2021
         </FooterLink>
         <FooterLink textAlign="center" color="trueGray.400" href={links.LICENSING}>
            Licensed under creative commons
         </FooterLink>
         <HStack spacing={4}>
            <FooterLink color="trueGray.400" href={links.PRIVACY}>
               Privacy
            </FooterLink>
            <FooterLink color="trueGray.400" href={links.TERMS_OF_USE}>
               Legal
            </FooterLink>
         </HStack>
      </Stack>
   );
}
