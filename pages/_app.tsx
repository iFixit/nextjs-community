import React from 'react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../chakraTheme/index'
import '../styles/ifixit/global.css'
import '@core-ds/primitives/core-primitives.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};
