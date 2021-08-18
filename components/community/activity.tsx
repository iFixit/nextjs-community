import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import styles from '../../styles/community/activity.module.css'
import Image from 'next/image'
import React from 'react'
import { Link } from "@chakra-ui/react"

interface Activity {
  title: string;
  author: string;
  user_url: string;
  user_img: string;
  activity_url: string;
  activity_img: string;
}

const sampleData: Activity[] = [
  {
    title: 'Published a Guide',
    author: 'Kristen Gismondi',
    user_url: 'https://www.ifixit.com/User/1020837/Kristen+Gismondi',
    user_img: 'https://guide-images.cdn.ifixit.com/igi/pfySb4UP4HQwgp6h.thumbnail',
    activity_url: 'https://www.ifixit.com/Guide/Lenovo+ThinkPad+T460+Hinges+Replacement/143411',
    activity_img: 'https://guide-images.cdn.ifixit.com/igi/W5jIROoJqS1viwJ6.standard',
  },
  {
    title: 'Published a Guide',
    author: 'Kristen Gismondi',
    user_url: 'https://www.ifixit.com/User/1020837/Kristen+Gismondi',
    user_img: 'https://guide-images.cdn.ifixit.com/igi/pfySb4UP4HQwgp6h.thumbnail',
    activity_url: 'https://www.ifixit.com/Guide/Lenovo+ThinkPad+T460+Hinges+Replacement/143411',
    activity_img: 'https://guide-images.cdn.ifixit.com/igi/W5jIROoJqS1viwJ6.standard',
  },
  {
    title: 'Published a Guide',
    author: 'Kristen Gismondi',
    user_url: 'https://www.ifixit.com/User/1020837/Kristen+Gismondi',
    user_img: 'https://guide-images.cdn.ifixit.com/igi/pfySb4UP4HQwgp6h.thumbnail',
    activity_url: 'https://www.ifixit.com/Guide/Lenovo+ThinkPad+T460+Hinges+Replacement/143411',
    activity_img: 'https://guide-images.cdn.ifixit.com/igi/W5jIROoJqS1viwJ6.standard',
  },
  {
    title: 'Published a Guide',
    author: 'Kristen Gismondi',
    user_url: 'https://www.ifixit.com/User/1020837/Kristen+Gismondi',
    user_img: 'https://guide-images.cdn.ifixit.com/igi/pfySb4UP4HQwgp6h.thumbnail',
    activity_url: 'https://www.ifixit.com/Guide/Lenovo+ThinkPad+T460+Hinges+Replacement/143411',
    activity_img: 'https://guide-images.cdn.ifixit.com/igi/W5jIROoJqS1viwJ6.standard',
  },
  {
    title: 'Published a Guide',
    author: 'Kristen Gismondi',
    user_url: 'https://www.ifixit.com/User/1020837/Kristen+Gismondi',
    user_img: 'https://guide-images.cdn.ifixit.com/igi/pfySb4UP4HQwgp6h.thumbnail',
    activity_url: 'https://www.ifixit.com/Guide/Lenovo+ThinkPad+T460+Hinges+Replacement/143411',
    activity_img: 'https://guide-images.cdn.ifixit.com/igi/W5jIROoJqS1viwJ6.standard',
  },
  {
    title: 'Published a Guide',
    author: 'Kristen Gismondi',
    user_url: 'https://www.ifixit.com/User/1020837/Kristen+Gismondi',
    user_img: 'https://guide-images.cdn.ifixit.com/igi/pfySb4UP4HQwgp6h.thumbnail',
    activity_url: 'https://www.ifixit.com/Guide/Lenovo+ThinkPad+T460+Hinges+Replacement/143411',
    activity_img: 'https://guide-images.cdn.ifixit.com/igi/W5jIROoJqS1viwJ6.standard',
  },
]

function ActivityCard({ data }: {data: Activity}) {
  return (
    <Flex className={styles.card} direction='column'>
      <Box className={`${styles.cardImage} ${styles.activityImage}`}>
        <Image src={data.activity_img} alt='' layout='fill' objectFit='cover'/>
      </Box>
      <Flex className={styles.details}>
        <Box className={styles.cardImage}>
          <Image 
            className={styles.avatar}
            src={data.user_img} 
            alt=''
            width={40} 
            height={40} />
        </Box>
        <Flex direction='column' className={styles.text}>
          <Link href={data.user_url} fontSize={14} fontWeight='bold'>{data.author}</Link>
          <Text color='var(--color-gray-5)' fontSize={14}>{data.title}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default function ActivityDisplay() {
    return (
        <React.Fragment>
          <Heading
            as='h3'
            fontSize='var(--font-size-5)'
            margin={{ base:'var(--space-7) 0 var(--space-5)', md:'var(--space-10) 0 var(--space-7)' }}>
            Latest Community Activity
          </Heading>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={5}>
            {sampleData.map((activity, i) => <ActivityCard key={i} data={activity}/>)}
          </SimpleGrid>
        </React.Fragment>
    )
}
