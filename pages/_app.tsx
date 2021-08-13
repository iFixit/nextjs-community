import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/global.css'
import React from 'react'
import '@core-ds/primitives/core-primitives.css'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}