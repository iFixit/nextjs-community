import { AspectRatio, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'

export default function VideoDisplay() {
    return (
      <Flex 
        overflow='hidden'
        borderRadius='var(--border-radius-lg)'
        bgColor='var(--color-black)'
        direction={{ base:'column', md:'row' }}
        height={{ base:'600px', md:'unset' }}
        marginTop={{ base:'var(--space-7)', md:'var(--space-10)' }}>
        <Flex
          direction='column'
          justify='space-between'
          align='flex-start'
          width={{ base:'100%', md:'50%' }}
          height={{ base:'50%', md:'unset' }}
          margin='var(--space-5) var(--space-0);'
          padding={{ base:'var(--space-6) var(--space-8)', md:'var(--space-8) var(--space-10)' }}>
          <Heading 
            marginTop='0' 
            fontSize='24px' 
            color='var(--color-white)'
            >{'Contribute to iFixit'}</Heading>
          <Text 
            fontSize='16px'
            color='var(--color-gray-3)'
            margin='var(--space-4) 0'> 
            {'No one knows how to fix everything,\
            but everyone knows how to fix something.\
            Teach us what you know and make sure\
            things work longer! The easier it is to\
            fix something, the more people will do it.'}
          </Text>
          <Link _hover={{ textDecoration: 'none'}} href='https://www.ifixit.com/New'>
            <Button 
              variant='outline'
              backgroundColor= 'var(--color-black)'
              color='var(--color-white)'
              _hover={{ 
                color: 'var(--color-black)',
                backgroundColor: 'var(--color-white)'
              }}>{'Start a New Page'}</Button>
          </Link>
        </Flex>
        <AspectRatio 
          width={{ base:'100%', md:'50%' }}
          height={{ base:'50%', md:'unset' }}>
          <iframe
            title="How to Write a Repair Guide on iFixit.com!"
            src='https://www.youtube-nocookie.com/embed/O7CSWHVTUT8?rel=0'
            allowFullScreen
          />
        </AspectRatio>
      </Flex>
    )
}
  