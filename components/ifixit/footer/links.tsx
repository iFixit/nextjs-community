import links from '../../../lib/links';
import {
   FacebookLogo,
   TwitterLogo,
   InstagramLogo,
   YoutubeLogo,
   RepairOrgLogo,
} from '@ifixit/react-components';

export const footerLinks = [
   [
      { label: 'About Us', url: links.ABOUT_US },
      { label: 'Customer Support', url: links.HELP },
      { label: 'Careers', url: links.CAREERS },
      { label: 'Feedback', url: links.FEEDBACK },
      { label: 'Newsletter', url: links.NEWSLETTER },
      { label: 'API', url: links.API },
   ],
   [
      { label: 'Community', url: links.CONTRIBUTE },
      { label: 'Pro Wholesale', url: links.PRO },
      { label: 'Retail Locator', url: links.RETAIL_LOCATOR },
      { label: 'For Manufacturers', url: links.MANUFACTURERS },
      { label: 'Press', url: links.PRESS },
      { label: 'Blog', url: links.NEWS },
   ],
];

export const socialLinks = [
   { label: 'Facebook', url: links.FACEBOOK, icon: FacebookLogo },
   { label: 'Twitter', url: links.TWITTER, icon: TwitterLogo },
   { label: 'Instagram', url: links.INSTAGRAM, icon: InstagramLogo },
   { label: 'YouTube', url: links.YOUTUBE, icon: YoutubeLogo },
   { label: 'Repair.org', url: links.REPAIR_ORG, icon: RepairOrgLogo },
];
