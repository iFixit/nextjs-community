import { color } from '@core-ds/primitives';

const Button = {
   baseStyle: {
      fontWeight: 'inherit',
   },
   sizes: {
      sm: {
         fontSize: '13px',
         height: '30px',
         py: '5px',
         px: '10px',
      },
   },
   variants: {
      outline: {
         bg: `${color.white}`,
         borderColor: `${color.gray3}`,
         color: `${color.black}`,
      },
   },
};

export default Button;
