import { Flex } from '@chakra-ui/react'
import React from 'react'
import HeroLeft from './heroLeft'
import HeroRight from './heroRight'

const Hero = () => {
  return (
    <Flex direction={['column-reverse', 'row', 'row']}>
      <HeroLeft />
      <HeroRight />
    </Flex>
  )
}

export default Hero
