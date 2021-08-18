import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

export default function Footer() {
    const Footer = chakra('footer');

    return (
        <Footer
            position='relative'
            display='flex'
            alignItems='center'
            marginTop='var(--space-10)'
            height='852px'>
            <Image src='/images/footer.png' alt='' layout='fill' objectFit='cover' />
        </Footer>
    )
}
