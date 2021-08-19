import { chakra } from '@chakra-ui/react';
import Head from 'next/head'
import React from 'react';
import Footer from '../ifixit/footer';
import Header from '../ifixit/header';

export default function GuidePage({ title, children } : {
    title: string,
    children: React.ReactNode
  })  {
  
  const Main = chakra('main')

  return (
    <React.Fragment>
      <Head>
        <title>{title + ' - iFixit'}</title>
      </Head>
      <Header/>
      <Main
        margin='0 auto'
        maxWidth={{ base: '90%', xl: '998px' }}>{children}</Main>
      <Footer/>
    </React.Fragment>
  )
}