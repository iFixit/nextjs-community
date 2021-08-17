import Image from 'next/image'
import styles from '../../styles/ifixit/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <Image src='/images/footer.png' alt='' layout='fill' objectFit='cover' />
        </footer>
    )
}
  