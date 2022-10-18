import { Heading, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'

const HeroLeft = () => {
  return (
    <VStack
      px={[16, 32, 32]}
      w={['150px', '480px', '768px']}
      py={[20, 28, 28]}
      alignItems={['left', 'left', 'left']}
    >
      <Heading
        as="h3"
        flexWrap="wrap"
        color="green.600"
        fontSize={['25', '35', '35']}
        size="lg"
        textAlign={{ base: 'center', md: 'left' }}
        alignItems={['center', 'left', 'left']}
        w={['240px', '430px', '430px']}
      >
        Build this rad landing page from scratch
      </Heading>
      <Text
        w={['210px', '380px', '380px']}
        color="green.300"
        py={4}
        fontSize={['15', '18', '18']}
        textAlign={{ base: 'center', md: 'left' }}
        alignItems={['center', 'left', 'left']}
      >
        This is a subheader section where you describe the basic benefits of
        your product
      </Text>

      <Button width={60} bg="green.500" color="white">
        Create your account now &gt;
      </Button>
      <Text
        as="h6"
        fontSize={12}
        color="green.300"
        w={['210px', '380px', '380px']}
        textAlign={{ base: 'center', md: 'left' }}
        alignItems={['center', 'left', 'left']}
        py={['24px', '10px', '10px']}
      >
        No credit card required
      </Text>
    </VStack>
  )
}

export default HeroLeft
