import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../chakraTheme/index';
import '@core-ds/primitives/core-primitives.css';
// import { theme } from '@ifixit/react-components';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={theme}>
         <Component {...pageProps} />
      </ChakraProvider>
   );
}
