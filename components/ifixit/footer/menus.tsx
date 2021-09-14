import { Stack, Text } from '@chakra-ui/layout';
import { Menu, MenuList } from '@chakra-ui/menu';
import {
   CountryCode,
   FlagIcon,
   FooterLink,
   Globe,
   StoreCurrency,
   StoreFlagBackdrop,
   StoreMenuButton,
   StoreMenuItem,
   StoreName,
} from '@ifixit/react-components';
import React from 'react';
import links from '../../../lib/links';
import stores from './stores';

export default function Menus() {
   return (
      <Stack
         direction={{ base: 'column', xs: 'row' }}
         spacing={{ base: 3, xs: 1, sm: 10 }}
         align={{ base: 'center', xs: 'baseline' }}
         justify={{ base: 'space-between', sm: 'center' }}
         px={{ base: '18px', sm: '0' }}
      >
         <Menu>
            <StoreMenuButton
               icon={
                  <StoreFlagBackdrop>
                     <FlagIcon code={CountryCode.US} />
                  </StoreFlagBackdrop>
               }
               color="trueGray.400"
            >
               Region
            </StoreMenuButton>
            <MenuList>
               {stores.map(store => {
                  return (
                     <StoreMenuItem key={store.storeCode} as="a" href={store.url}>
                        <FlagIcon code={store.storeCode.toUpperCase() as CountryCode} />
                        <StoreName>{store.name}</StoreName>
                        <StoreCurrency>{store.currency}</StoreCurrency>
                     </StoreMenuItem>
                  );
               })}
            </MenuList>
         </Menu>
         <Menu>
            <StoreMenuButton
               icon={
                  <StoreFlagBackdrop py="5px">
                     <Text fontWeight="bold" fontSize="12px">
                        EN
                     </Text>
                  </StoreFlagBackdrop>
               }
               color="trueGray.400"
            >
               Language
            </StoreMenuButton>
            <MenuList>
               {stores.map(store => {
                  return (
                     <StoreMenuItem key={store.storeCode} as="a" href={store.url}>
                        <FlagIcon code={store.storeCode.toUpperCase() as CountryCode} />
                        <StoreName>{store.name}</StoreName>
                        <StoreCurrency>{store.currency}</StoreCurrency>
                     </StoreMenuItem>
                  );
               })}
            </MenuList>
         </Menu>
         <FooterLink color="trueGray.400" href={links.TRANSLATE} icon={Globe}>
            Help translate
         </FooterLink>
      </Stack>
   );
}
