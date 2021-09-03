import { SimpleGrid, Img, Divider, Stack, Menu, MenuList } from '@chakra-ui/react';
import {
   FacebookLogo,
   FlagIcon,
   Footer,
   FooterLink,
   FooterMenuItem,
   FooterMenuLink,
   FooterMenuList,
   FooterPartnerLink,
   Globe,
   InstagramLogo,
   RepairOrgLogo,
   StoreCurrency,
   StoreFlagBackdrop,
   StoreMenuButton,
   StoreMenuItem,
   StoreName,
   TwitterLogo,
   YoutubeLogo,
} from '@ifixit/react-components';
import React from 'react';
import links from './links';
import partners from './partners';
import stores from './stores.json';

function displayFooterLinks() {
   return links.map((linklist, index) => (
      <FooterMenuList key={index}>
         {linklist.map(link => {
            return (
               <FooterMenuItem key={link.label}>
                  <FooterMenuLink href={link.url}>{link.label}</FooterMenuLink>
               </FooterMenuItem>
            );
         })}
      </FooterMenuList>
   ));
}

function FooterSocials() {
   return (
      <FooterMenuList>
         <FooterMenuItem>
            <FooterMenuLink href="#" icon={FacebookLogo}>
               Facebook
            </FooterMenuLink>
         </FooterMenuItem>
         <FooterMenuItem>
            <FooterMenuLink href="#" icon={TwitterLogo}>
               Twitter
            </FooterMenuLink>
         </FooterMenuItem>
         <FooterMenuItem>
            <FooterMenuLink href="#" icon={InstagramLogo}>
               Instagram
            </FooterMenuLink>
         </FooterMenuItem>
         <FooterMenuItem>
            <FooterMenuLink href="#" icon={YoutubeLogo}>
               Youtube
            </FooterMenuLink>
         </FooterMenuItem>
         <FooterMenuItem>
            <FooterMenuLink href="#" icon={RepairOrgLogo}>
               Repair.org
            </FooterMenuLink>
         </FooterMenuItem>
      </FooterMenuList>
   );
}

function FooterPartners() {
   return (
      <SimpleGrid
         columns={3}
         spacing="4"
         gridColumnEnd={{
            sm: 'span 3',
            lg: 'auto',
         }}
         display={{ base: 'none', sm: 'grid' }}
      >
         {partners.map(partner => {
            return (
               <FooterPartnerLink key={partner.name} href="#">
                  <Img
                     h="full"
                     mx="auto"
                     objectFit="contain"
                     src={partner.logo}
                     alt={partner.name}
                  />
               </FooterPartnerLink>
            );
         })}
      </SimpleGrid>
   );
}

export default function FooterComponent() {
   return (
      <Footer bgColor="var(--color-black)">
         <SimpleGrid
            columns={{
               base: 1,
               sm: 3,
               lg: 4,
            }}
            spacing="4"
            p="64px 0 64px"
            autoFlow="row"
            maxW="1000px"
            margin={{ base: '0 5%', xl: '0 auto' }}
         >
            {displayFooterLinks()}
            <FooterSocials />
            <FooterPartners />
         </SimpleGrid>
         <Divider borderColor="trueGray.700" />
         <SimpleGrid
            columns={{
               base: 1,
               lg: 2,
            }}
            py="6"
            spacing={{
               base: 10,
            }}
            w={{ base: '90%', xl: '1000px' }}
            margin="0 auto"
         >
            <Stack
               direction={{
                  base: 'row',
               }}
               spacing={{
                  base: 2,
                  sm: 12,
               }}
               justify={{
                  base: 'space-between',
                  sm: 'center',
                  lg: 'flex-start',
               }}
            >
               <Menu>
                  <StoreMenuButton
                     icon={
                        <StoreFlagBackdrop>
                           <FlagIcon storeCode="US" />
                        </StoreFlagBackdrop>
                     }
                  >
                     Region
                  </StoreMenuButton>
                  <MenuList>
                     {stores.map(store => {
                        return (
                           <StoreMenuItem key={store.storeCode} as="a" href={store.url}>
                              <FlagIcon storeCode={store.storeCode.toUpperCase()} />
                              <StoreName>{store.name}</StoreName>
                              <StoreCurrency>{store.currency}</StoreCurrency>
                           </StoreMenuItem>
                        );
                     })}
                  </MenuList>
               </Menu>
               <FooterLink href="#" icon={Globe}>
                  Help translate
               </FooterLink>
            </Stack>
            <Stack
               justify={{
                  base: 'flex-start',
                  sm: 'center',
                  lg: 'flex-end',
               }}
               direction={{
                  base: 'column',
                  sm: 'row',
               }}
               spacing={{
                  base: 2,
                  sm: 4,
               }}
            >
               <FooterLink href="#">Licensed under creative commons</FooterLink>
               <Divider
                  opacity={{
                     base: 1,
                     sm: 1,
                  }}
                  orientation="vertical"
                  borderColor="trueGray.700"
               />
               <FooterLink href="#">Privacy</FooterLink>
               <Divider
                  opacity={{
                     base: 1,
                     sm: 1,
                  }}
                  orientation="vertical"
                  borderColor="trueGray.700"
               />
               <FooterLink href="#">Legal</FooterLink>
            </Stack>
         </SimpleGrid>
      </Footer>
   );
}
