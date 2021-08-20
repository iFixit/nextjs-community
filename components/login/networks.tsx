import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';

export default function Networks() {
   return (
      <Box>
         <Text>Or use one of these networks</Text>
         <ButtonGroup>
            <Button>Sign in with Google</Button>
            <Button>Sign in with Facebook</Button>
         </ButtonGroup>
      </Box>
   );
}
