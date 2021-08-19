import { color, fontWeight } from '@core-ds/primitives';

const Tab = {
   defaultProps: {
      isFitted: true,
   },
   parts: ['tab'],
   variants: {
      line: {
         tab: {
            borderColor: `${color.gray2}`,
            color: `${color.gray5}`,
            fontWeight: `${fontWeight.bold}`,
         },
      },
   },
};

export default Tab;
