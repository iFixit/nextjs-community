import cp from '@core-ds/primitives';

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
         fontSize: cp.fontSize[1],
         borderColor: cp.color.gray3,
      },
      invertOnHover: {
         fontSize: cp.fontSize[1],
         border: `1px solid ${cp.color.gray5}`,
         backgroundColor: cp.color.black,
         color: cp.color.white,
         _hover: {
            color: cp.color.black,
            backgroundColor: cp.color.white,
         },
      },
      link: {
         border: 'none',
         fontWeight: 'normal',
      },
   },
};

export default Button;
