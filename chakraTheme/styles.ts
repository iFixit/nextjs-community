// Chakra global style reference: https://github.com/chakra-ui/chakra-ui/blob/main/packages/css-reset/src/css-reset.tsx
import cp from '@core-ds/primitives';

const styles = {
   global: {
      'h1, h2, h3': {
         lineHeight: cp.lineHeight.tight,
      },
      'h2, h3': {
         fontWeight: cp.fontWeight.semiBold,
      },
      'h4, h5, h6': {
         margin: `${cp.space[1]} 0 0`,
         fontSize: cp.fontSize[1],
      },
      h1: {
         margin: `${cp.space[1]} 0`,
         padding: '0',
         fontSize: cp.fontSize[7],
         fontWeight: cp.fontWeight.bold,
      },
      h2: {
         margin: `${cp.space[5]} 0 0`,
         padding: '0 0 2px 0',
         fontSize: cp.fontSize[5],
      },
      h3: {
         margin: `${cp.space[4]} 0 0`,
         padding: '0',
         fontSize: cp.fontSize[3],
      },
      a: {
         color: cp.color.blue,
      },
      'ol, ul': {
         marginTop: '1em',
         marginBottom: '1em',
      },
      p: {
         marginTop: cp.space[2], // matches base.less value
         marginBottom: cp.space[2], // matches base.less value
      },
      'pre, code, kbd, samp': {
         fontFamily: 'unset',
         fontSize: 'unset',
      },
      'button, input, optgroup, select, textarea': {
         fontSize: cp.fontSize[1],
      },
      'button, textarea': {
         padding: `${cp.space[1]} ${cp.space[2]}`, // matches forms.less value
      },
      select: {
         border: '1px solid #c1c1c1', // matches forms.less value
         fontFamily: 'inherit',
      },
   },
};

export default styles;
