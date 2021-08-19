import cp from '@core-ds/primitives';

const Tab = {
   defaultProps: {
      isFitted: true,
   },
   parts: ['tab'],
   variants: {
      line: {
         tab: {
            borderColor: cp.color.gray2,
            color: cp.color.gray5,
            fontSize: cp.fontSize[1],
            fontWeight: cp.fontWeight.bold,
         },
      },
   },
};

export default Tab;
