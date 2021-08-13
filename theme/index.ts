import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import foundations from './foundations';

const overrides = {
   styles,
   foundations,
   components: {
   },
};

export default extendTheme(overrides);
