import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

export default function Header() {
    const Header = chakra('header');

    return (
        <Header
            position='relative'
            display='flex'
            alignItems='center'
            height='68px'>
            <Image src='/images/header.png' alt='' layout='fill' objectFit='cover' />
        </Header>
    )
}
  