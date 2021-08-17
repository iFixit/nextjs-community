import { Avatar, Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import styles from '../../styles/community/activity.module.css'
import Image from 'next/image'
import React from 'react'

const sampleData = {
  title: 'Published a Guide',
  author: 'Kristen Gismondi',
  user_url: 'https://www.ifixit.com/User/1020837/Kristen+Gismondi',
  user_img: 'https://guide-images.cdn.ifixit.com/igi/pfySb4UP4HQwgp6h.thumbnail',
  activity_url: 'https://www.ifixit.com/Guide/Lenovo+ThinkPad+T460+Hinges+Replacement/143411',
  activity_img: 'https://guide-images.cdn.ifixit.com/igi/W5jIROoJqS1viwJ6.standard',
}

function ActivityCard() {
  return (
    <Flex className={styles.card} direction='column'>
      <Box className={styles.cardImage}>
        <Image src={sampleData.activity_img} alt='' width={400} height={250} />
      </Box>
      <Flex>
        <Box className={styles.cardImage}>
          <Image 
            className={`${styles.cardImage} ${styles.avatar}`}
            src={sampleData.user_img} 
            alt=''
            width={40} 
            height={40} />
        </Box>
        <Flex direction='column'>
          <Text fontWeight='bold'>{sampleData.author}</Text>
          <Text>{sampleData.title}</Text>
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
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </SimpleGrid>
        </React.Fragment>
    )
}
