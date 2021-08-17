import Image from 'next/image'
import styles from '../../styles/ifixit/header.module.css'

export default function Header() {
    return (
        <header className={styles.container}>
            <Image src='/images/header.png' alt='' layout='fill' objectFit='contain' />
        </header>
    )
}
  