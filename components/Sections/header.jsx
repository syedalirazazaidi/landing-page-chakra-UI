import { Box, Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const LayoutLanding = () => {
  const [show, setShow] = React.useState(false)

  const toggleMenu = () => setShow(!show)
  return (
    <Flex
      w="100%"
      color="green"
      justify={['space-between', 'space-between', 'space-between']}
      wrap="wrap"
      mb={8}
      p={4}
      px={[20, 12, 32]}
    >
      <Box>
        <Text fontWeight="600">Logo</Text>
      </Box>
      <Box display={['flex', 'flex', 'flex']} gap={48}>
        <IconButton
          onClick={toggleMenu}
          aria-label="Open Menu"
          size="lg"
          icon={show ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: 'block', md: 'none' }}
        />
      </Box>

      <Box
        fontWeight="500"
        display={{ base: show ? 'block' : 'none', md: 'block' }}
      >
        <Stack
          marginTop={['50px', '10px', '10px']}
          marginLeft={['14px', '10px', '10px']}
          gap={8}
          textAlign={['center', 'center', 'center']}
          alignItems={['center', 'center', 'center']}
          direction={['column', 'row', 'row']}
        >
          <NextLink colorScheme="teal" href="/How it Works">
            Home
          </NextLink>
          <NextLink colorScheme="teal" href="/Crypto">
            How it works
          </NextLink>
          <NextLink colorScheme="teal" href="/Marketplace">
            Features
          </NextLink>
         
            <NextLink colorScheme="teal" href="/Sign In" passHref>
              Pricing
            </NextLink>
            <Button
              bg="green.400"
              color="white"
              px="10"
              variant="outline"
              marginLeft="30px"
              borderColor="black.500"
              _hover={{ bg: 'white', color: 'green' }}
            >
              <NextLink href="/Marketplace">Create Account</NextLink>
            </Button>
         
        </Stack>
      </Box>
    </Flex>
  )
}

export default LayoutLanding
