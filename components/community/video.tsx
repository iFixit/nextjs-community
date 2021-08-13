import { AspectRatio, Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../../styles/video.module.css'

export default function VideoDisplay() {
    return (
        <React.Fragment>
          <Flex direction='row' className={styles.container}>
            <Flex direction='column' justify='space-between' className={styles.videoText}>
              <Heading fontSize='24px' className={styles.title}>{'Contribute to iFixit'}</Heading>
              <Text fontSize='16px' className={styles.description}> 
                {'No one knows how to fix everything,\
                but everyone knows how to fix something.\
                Teach us what you know and make sure\
                things work longer! The easier it is to\
                fix something, the more people will do it.'}
              </Text>
              <Link href='https://www.ifixit.com/New'>
                <Button>{'Start a New Page'}</Button>
              </Link>
            </Flex>
            <AspectRatio w={'50%'}>
              <iframe
                title="naruto"
                src='https://www.youtube-nocookie.com/embed/O7CSWHVTUT8?rel=0'
                allowFullScreen
              />
            </AspectRatio>
          </Flex>
        </React.Fragment>
    )
}
  