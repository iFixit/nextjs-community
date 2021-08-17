import { AspectRatio, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../../styles/community/video.module.css'

export default function VideoDisplay() {
    return (
        <React.Fragment>
          <Flex 
            className={styles.container}
            direction={{ base:'column', md:'row' }}
            height={{ base:'600px', md:'unset' }}
            marginTop={{ base:'var(--space-7)', md:'var(--space-10)' }}>
            <Flex 
              className={styles.videoText}
              width={{ base:'100%', md:'50%' }}
              height={{ base:'50%', md:'unset' }}
              padding={{ base:'var(--space-6) var(--space-8)', md:'var(--space-8) var(--space-10)' }}>
              <Heading fontSize='24px' className={styles.title}>{'Contribute to iFixit'}</Heading>
              <Text fontSize='16px' className={styles.description}> 
                {'No one knows how to fix everything,\
                but everyone knows how to fix something.\
                Teach us what you know and make sure\
                things work longer! The easier it is to\
                fix something, the more people will do it.'}
              </Text>
              <Link _hover={{ textDecoration: 'none'}} href='https://www.ifixit.com/New'>
                <Button 
                  className={styles.button} 
                  variant='outline'
                  color='var(--color-white)'
                  _hover={{ 
                    color: 'var(--color-black)',
                    backgroundColor: 'var(--color-gray-1)'
                  }}>{'Start a New Page'}</Button>
              </Link>
            </Flex>
            <AspectRatio 
              className={styles.video}
              width={{ base:'100%', md:'50%' }}
              height={{ base:'50%', md:'unset' }}>
              <iframe
                title="How to Write a Repair Guide on iFixit.com!"
                src='https://www.youtube-nocookie.com/embed/O7CSWHVTUT8?rel=0'
                allowFullScreen
              />
            </AspectRatio>
          </Flex>
        </React.Fragment>
    )
}
  