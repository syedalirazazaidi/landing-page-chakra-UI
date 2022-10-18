import {  Container, Image } from '@chakra-ui/react'
import React from 'react'
import { imgURl } from '../../image'

const HeroRight = () => {
  return (
    <Container width="100%" margin="0 auto" my={[12,12,28]}>
      <Image
        src={imgURl}
        alt="flower"
        border="1px"
        borderRadius="lg"
        borderColor="gray.200"
      />
    </Container>
  )
}

export default HeroRight
