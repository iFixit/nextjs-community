import { color, fontSize } from '@core-ds/primitives';

const Button = {
   baseStyle: {
      fontWeight: 'bold',
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
         fontSize: `${fontSize[1]}`,
         borderColor: `${color.gray3}`,
         color: `${color.black}`,

      },
      invertOnHover: {
         border: `1px solid ${color.gray3}`,
         backgroundColor: `${color.black}`,
         color: `${color.white}`,
         _hover: {
            color: `${color.black}`,
            backgroundColor: `${color.white}`,
         },
      },
   },
};

export default Button;
