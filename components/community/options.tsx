import React from 'react'
import Image from 'next/image'
import styles from '../../styles/options.module.css'
import { Button, Stack } from "@chakra-ui/react"
import { Box, Heading, Text } from '@chakra-ui/layout'
import { getImage } from '../../lib/images'
import { Link } from "@chakra-ui/react"

function OptionCard() {
  return (
    <Stack align='center' className={styles.optionCard}>
      <Box className={styles.cardImage}>
        <Image src={getImage('Community/solve')} alt='' layout='fill'/>
      </Box>
      <Box className={styles.cardIcon}>
        <Image src={getImage('Community/solve-icon')} alt='' layout='fill'/>
      </Box>
      <Box className={styles.cardText}>
        <Heading as='h3' textAlign='center' fontSize='18px'>{'Solve Problems'}</Heading>
        <Text textAlign='center' fontSize='14px'>
          {'Get help from friendly fixers and share a helping \
          hand with others around the world.'}
        </Text>
      </Box>
      <Link href='https://www.ifixit.com/Answers'>
        <Button>{'Answers Forum'}</Button>
      </Link>
    </Stack>
  );
}

export default function OptionsDisplay() {
    return (
        <React.Fragment>
          <Stack direction='row' justify='space-between' spacing='20px'>
            <OptionCard/>
            <OptionCard/>
            <OptionCard/>
          </Stack>
        </React.Fragment>
    )
}
