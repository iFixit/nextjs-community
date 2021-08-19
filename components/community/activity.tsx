import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
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
    author: 'Kristen Gismondgfdsagsdfsgdsgrefresjhrsiherslwlrei',
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

function ActivityCard({ data }: { data: Activity }) {
  return (
    <Flex
      borderRadius='var(--border-radius-lg)'
      overflow='hidden'
      boxShadow='var(--shadow-3)'
      position='relative'
      direction='column'
      _hover={{
        cursor: 'pointer'
      }}>
      <Box
        position='relative'
        height='200px'
        transition='0.5s'
        _hover={{
          opacity: '50%'
        }}>
        <Image src={data.activity_img} alt='' layout='fill' objectFit='cover'/>
      </Box>
      <Flex 
        padding='12px'
        height='64px'
        sx={{
          '&:hover a': {
            textDecoration: 'underline',
          }
        }}>
        <Box
          transition='0.5s'
          borderRadius='50%'
          overflow='hidden'
          minWidth='40px'
          _hover={{
            opacity: '50%'
          }}>
          <Image
            src={data.user_img} 
            alt=''
            width={40}
            height={40}
            />
        </Box>
        <Flex 
          direction='column' 
          marginLeft='16px'
          overflow='hidden'>
          <Link
            overflow='hidden'
            textOverflow='ellipsis'
            whiteSpace='nowrap'
            wordBreak='break-all'
            href={data.user_url}
            margin='0'
            fontSize={14}
            fontWeight='bold'>{data.author}</Link>
          <Text 
            overflow='hidden'
            textOverflow='ellipsis'
            whiteSpace='nowrap'
            wordBreak='break-all'
            color='var(--color-gray-5)' 
            fontSize={14}
            margin='0'>{data.title}</Text>
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
            spacing={7}>
            {sampleData.map((activity, i) => <ActivityCard key={i} data={activity}/>)}
          </SimpleGrid>
        </React.Fragment>
    )
}
