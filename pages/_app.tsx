import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/global.css'
import React from 'react'
import '@core-ds/primitives/core-primitives.css'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/index';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}