import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import LayoutLanding from '../components/Sections/header'
import Hero from '../components/Sections/hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box>
      <LayoutLanding />
      <Hero />
    </Box>
  )
}
