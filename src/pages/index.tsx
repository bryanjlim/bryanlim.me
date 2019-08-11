import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

import { Heading, Flex, Box, Image, Text, Link } from 'rebass'
import { SocialIcon } from 'react-social-icons'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Box width={1}>
          <Heading fontFamily="Helvetica" fontSize={[6, 7, 8]} paddingTop={'3%'} color="lavender" textAlign="center">
            Hi, I'm Bryan
          </Heading>
        </Box>
        <Box width={[1 / 2, 0]} marginLeft="auto" marginRight="auto" paddingTop="1em">
          <div css={{ textAlign: 'center' }}>
            <Image
              alt="Me in San Francisco"
              src={require('../content/me-square.jpeg')}
              sx={{
                width: '100%',
                borderRadius: '20%'
              }}
            />
          </div>
        </Box>
        <Flex paddingTop="1em" marginLeft="auto" marginRight="auto">
          <Box width={[1, 1 / 2]} alignSelf="center">
            <Text fontSize={[2, 3, 4]} textAlign="center">
              CS Major @{' '}
              <Link href="https://cs.washington.edu" color="lavender">
                <b>UW - Seattle</b>
              </Link>
              {" '21"}
            </Text>
            <Text fontSize={[2, 3, 4]} textAlign="center" marginTop="1em">
              {'UW '}
              <Link href="https://huskyrobotics.me" color="lavender">
                <b>Robotics</b>
              </Link>
              {', '}
              <Link href="https://hyperloop.io" color="lavender">
                <b>Hyperloop</b>
              </Link>
              {' Member'}
            </Text>
            <Text fontSize={[2, 3, 4]} textAlign="center" marginTop="1em">
              {'Internships @ '}
              <Link href="https://salesforce.com" color="lavender">
                <b>Salesforce</b>
              </Link>
              {', '}
              <Link href="https://expedia.com" color="lavender">
                <b>Expedia</b>
              </Link>
            </Text>
            <Text fontSize={[2, 3, 4]} textAlign="center" marginTop="1em">
              Pineapple Sympathizer <Link href="https://www.food.com/recipe/ham-and-pineapple-pizza-28572">🍍</Link>
            </Text>
          </Box>
          <Box width={[0, 1 / 2]} alignSelf="center">
            <div css={{ textAlign: 'center' }}>
              <Image
                alt="Me in San Francisco"
                src={require('../content/me-square.jpeg')}
                sx={{
                  width: '75%',
                  borderRadius: '20%'
                }}
              />
            </div>
          </Box>
        </Flex>
        <Flex
          marginTop="3em"
          marginLeft="auto"
          marginRight="auto"
          width={[1 / 2, 1 / 3]}
          backgroundColor="lavender"
          padding="1em"
          sx={{ borderRadius: '2em' }}
        >
          <Box marginLeft="0">
            <SocialIcon url="http://github.com/bryanjlim" />
          </Box>
          <Box marginLeft="auto" marginRight="auto">
            <SocialIcon url="mailto:bryanjlim@outlook.com" />
          </Box>
          <Box marginRight="0">
            <SocialIcon url="https://www.linkedin.com/in/bryanjlim/" />
          </Box>
        </Flex>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
