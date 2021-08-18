import { extendTheme, Theme } from '@chakra-ui/react';

import styles from './styles';

import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
import space from './foundations/space';

import Button from './components/Button';
import Modal from './components/Modal';
import Tabs from './components/Tabs';

const theme: Theme = extendTheme({
   styles,
   breakpoints,
   colors,
   space,
   components: {
      Button,
      Modal,
      Tabs,
   },
});

export default theme;
