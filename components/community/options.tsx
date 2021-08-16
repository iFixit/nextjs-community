import React from 'react'
import Image from 'next/image'
import styles from '../../styles/options.module.css'
import { Button, Flex, Stack } from "@chakra-ui/react"
import { Box, Heading, Text } from '@chakra-ui/layout'
import { getImage } from '../../lib/images'
import { Link } from "@chakra-ui/react"
import { isEnglish } from '../../lib/lang'

interface Option {
  title: string;
  description: string;
  button: string;
  link: string;
  image: string;
  icon: string;
}

const optionSolve: Option = {
  'title': 'Solve Problems',
  'description': 'Get help from friendly fixers and share a helping \
  hand with others around the world.',
  'button': 'Answers Forum',
  'link': 'https://www.ifixit.com/Answers',
  'image': getImage('Community/solve'),
  'icon': getImage('Community/solve-icon'),
}

const optionImprove: Option = {
  'title': 'Improve iFixit',
  'description': 'Help us improve how-to guides that others have \
    started and become a guardian of good quality.',
  'button': 'Improve Guides',
  'link': 'https://www.ifixit.com/Contribute',
  'image': getImage('Community/improve'),
  'icon': getImage('Community/improve-icon'),
}

const optionTeach: Option = {
  'title': 'Teach a Repair',
  'description': 'No one knows how to fix everything, but\
    everyone knows how to fix something.',
  'button': 'Create a Guide',
  'link': 'https://www.ifixit.com/Guide/new',
  'image': getImage('Community/teach'),
  'icon': getImage('Community/teach-icon'),
}

const optionTranslate: Option = {
  'title': 'Help Translate',
  'description': 'Translate iFixit into your mother tongue and \
    make repair information available to everyone!',
  'button': 'Start Translating',
  'link': 'https://www.ifixit.com/Translate',
  'image': getImage('Community/help'),
  'icon': getImage('Community/help-icon'),
}

function OptionCard({ option }: { option: Option }) {
  return (
    <Flex direction='column' align='center' className={styles.optionCard}>
      <Box className={styles.cardImage}>
        <Image src={option.image} alt='' layout='fill' objectFit='cover'/>
      </Box>
      <Box className={styles.cardIcon}>
        <Image src={option.icon} alt='' layout='fill'/>
      </Box>
      <Flex className={styles.cardText} align='center' direction='column'>
        <Heading className={styles.title} as='h3' fontSize='18px'>{option.title}</Heading>
        <Text className={styles.description} align='center' fontSize='14px'>{option.description}</Text>
        <Link _hover={{ textDecoration: 'none'}} href={option.link}>
          <Button 
            padding='9px 16px 10px'
            fontSize='14px'
            border='1px solid var(--color-gray-3)'
            backgroundColor='transparent'>{option.button}</Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default function OptionsDisplay() {
    return (
        <React.Fragment>
          <Stack direction='row' justify='space-between' spacing='20px'>
            <OptionCard option={optionSolve}/>
            <OptionCard option={optionImprove}/>
            {isEnglish() ? 
              <OptionCard option={optionTeach}/> : 
              <OptionCard option={optionTranslate}/>}
          </Stack>
        </React.Fragment>
    )
}
