import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/ifixit/global.css'
import React from 'react'
import '@core-ds/primitives/core-primitives.css'
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}