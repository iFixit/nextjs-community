// Chakra global style reference: https://github.com/chakra-ui/chakra-ui/blob/main/packages/css-reset/src/css-reset.tsx
import { color, fontFamily, fontSize, fontWeight, lineHeight, space } from '@core-ds/primitives';

const styles = {
   global: {
      'h1, h2, h3': {
         lineHeight: `${lineHeight.tight}`,
      },
      'h2, h3': {
         fontWeight: `${fontWeight.semiBold}`,
      },
      'h4, h5, h6': {
         margin: `${space[1]} 0 0`,
         fontSize: `${fontSize[1]}`,
      },
      h1: {
         margin: `${space[1]} 0`,
         padding: '0',
         fontSize: `${fontSize[7]}`,
         fontWeight: `${fontWeight.bold}`,
      },
      h2: {
         margin: `${space[5]} 0 0`,
         padding: '0 0 2px 0',
         fontSize: `${fontSize[5]}`,
      },
      h3: {
         margin: `${space[4]} 0 0`,
         padding: '0',
         fontSize: `${fontSize[3]}`,
      },
      a: {
         color: `${color.blue}`,
      },
      'ol, ul': {
         marginTop: '1em',
         marginBottom: '1em',
      },
      p: {
         marginTop: `${space[2]}`, // matches base.less value
         marginBottom: `${space[2]}`, // matches base.less value
      },
      'pre, code, kbd, samp': {
         fontFamily: 'unset',
         fontSize: 'unset',
      },
      'button, input, optgroup, select, textarea': {
         color: `${color.black}`,
         fontSize: `${fontSize[1]}`,
      },
      'button, textarea': {
         padding: `${space[1]} ${space[2]}`, // matches forms.less value
      },
      select: {
         border: '1px solid #c1c1c1', // matches forms.less value
         fontFamily: 'inherit',
      },
   },
};

export default styles;
