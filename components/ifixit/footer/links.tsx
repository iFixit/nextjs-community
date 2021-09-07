import links from '../../../lib/links';
import {
   FacebookLogo,
   TwitterLogo,
   InstagramLogo,
   YoutubeLogo,
   RepairOrgLogo,
   FooterMenuItem,
   FooterMenuLink,
   FooterPartnerLink,
} from '@ifixit/react-components';
import * as React from 'react';
import { Img, SimpleGrid } from '@chakra-ui/react';
import partners from './partners';
interface Category {
   title: string;
   links: Array<Link>;
}

interface Link {
   label: string;
   url: string;
   icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const iFixitLinks: Category = {
   title: 'iFixit',
   links: [
      { label: 'About Us', url: links.ABOUT_US },
      { label: 'Customer Support', url: links.HELP },
      { label: 'Careers', url: links.CAREERS },
      { label: 'Feedback', url: links.FEEDBACK },
      { label: 'Newsletter', url: links.NEWSLETTER },
      { label: 'API', url: links.API },
   ],
};

const resourcesLinks: Category = {
   title: 'Resources',
   links: [
      { label: 'Community', url: links.CONTRIBUTE },
      { label: 'Pro Wholesale', url: links.PRO },
      { label: 'Retail Locator', url: links.RETAIL_LOCATOR },
      { label: 'For Manufacturers', url: links.MANUFACTURERS },
      { label: 'Press', url: links.PRESS },
      { label: 'Blog', url: links.NEWS },
   ],
};

const socialLinks: Category = {
   title: 'Social',
   links: [
      { label: 'Facebook', url: links.FACEBOOK, icon: FacebookLogo },
      { label: 'Twitter', url: links.TWITTER, icon: TwitterLogo },
      { label: 'Instagram', url: links.INSTAGRAM, icon: InstagramLogo },
      { label: 'YouTube', url: links.YOUTUBE, icon: YoutubeLogo },
      { label: 'Repair.org', url: links.REPAIR_ORG, icon: RepairOrgLogo },
   ],
};

export function getFooterCategories() {
   return [iFixitLinks, resourcesLinks, socialLinks];
}

export function listCategory(category: Category) {
   return category.links.map(link => {
      return (
         <FooterMenuItem key={link.label} listStyleType="none">
            <FooterMenuLink color="trueGray.400" href={link.url}>
               {link.label}
            </FooterMenuLink>
         </FooterMenuItem>
      );
   });
}

export function Partners() {
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
