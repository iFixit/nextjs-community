import links from '../../../lib/links';
import {
   FacebookLogo,
   TwitterLogo,
   InstagramLogo,
   YoutubeLogo,
   RepairOrgLogo,
   FooterMenuItem,
   FooterMenuLink,
   FooterMenuList,
   FooterPartnerLink,
} from '@ifixit/react-components';
import React from 'react';
import { Img, SimpleGrid } from '@chakra-ui/react';
import partners from './partners';
import { Heading } from '@chakra-ui/layout';

const iFixitLinks = [
   { label: 'About Us', url: links.ABOUT_US },
   { label: 'Customer Support', url: links.HELP },
   { label: 'Careers', url: links.CAREERS },
   { label: 'Feedback', url: links.FEEDBACK },
   { label: 'Newsletter', url: links.NEWSLETTER },
   { label: 'API', url: links.API },
];

const resourcesLinks = [
   { label: 'Community', url: links.CONTRIBUTE },
   { label: 'Pro Wholesale', url: links.PRO },
   { label: 'Retail Locator', url: links.RETAIL_LOCATOR },
   { label: 'For Manufacturers', url: links.MANUFACTURERS },
   { label: 'Press', url: links.PRESS },
   { label: 'Blog', url: links.NEWS },
];

const socialLinks = [
   { label: 'Facebook', url: links.FACEBOOK, icon: FacebookLogo },
   { label: 'Twitter', url: links.TWITTER, icon: TwitterLogo },
   { label: 'Instagram', url: links.INSTAGRAM, icon: InstagramLogo },
   { label: 'YouTube', url: links.YOUTUBE, icon: YoutubeLogo },
   { label: 'Repair.org', url: links.REPAIR_ORG, icon: RepairOrgLogo },
];

export function IfixitLinks() {
   return (
      <FooterMenuList border="none">
         <FooterMenuItem mb="10px">
            <Heading fontSize="14px" color="trueGray.100" display={{ base: 'none', sm: 'unset' }}>
               iFixit
            </Heading>
         </FooterMenuItem>
         {iFixitLinks.map(link => {
            return (
               <FooterMenuItem key={link.label}>
                  <FooterMenuLink color="trueGray.400" href={link.url}>
                     {link.label}
                  </FooterMenuLink>
               </FooterMenuItem>
            );
         })}
      </FooterMenuList>
   );
}

export function ResourcesLinks() {
   return (
      <FooterMenuList border="none">
         <FooterMenuItem mb="10px">
            <Heading fontSize="14px" color="trueGray.100" display={{ base: 'none', sm: 'unset' }}>
               Resources
            </Heading>
         </FooterMenuItem>
         {resourcesLinks.map(link => {
            return (
               <FooterMenuItem key={link.label}>
                  <FooterMenuLink color="trueGray.400" href={link.url}>
                     {link.label}
                  </FooterMenuLink>
               </FooterMenuItem>
            );
         })}
      </FooterMenuList>
   );
}

export function SocialLinks() {
   return (
      <FooterMenuList border="none">
         <FooterMenuItem mb="10px">
            <Heading fontSize="14px" color="trueGray.100" display={{ base: 'none', sm: 'unset' }}>
               Social
            </Heading>
         </FooterMenuItem>
         {socialLinks.map((link, index) => {
            return (
               <FooterMenuItem key={index}>
                  <FooterMenuLink color="trueGray.400" href={link.url} icon={link.icon}>
                     {link.label}
                  </FooterMenuLink>
               </FooterMenuItem>
            );
         })}
      </FooterMenuList>
   );
}

export function PartnerLinks() {
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
