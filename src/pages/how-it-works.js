import React, { useState } from 'react'
import Box from 'ui-box'
import { graphql } from 'gatsby'

import { Button, Code, Column, Flex, Heading, ListItem, Paragraph, Strong, UnorderedList } from 'primitives'

import Faqs from 'components/Faqs'
import Layout from 'components/Layout'
import SEO from 'components/Seo'
import ViewportArriver from 'components/ViewportArriver'

import { steps, elaborations } from 'copy/howItWorks'
import productFAQs from 'copy/productFAQs'

export default function HowItWorks(props) {
  const [stepIndex, setStepIndex] = useState(0)
  // const siteTitle = props.data.site.siteMetadata.title

  const increment = step => {
    setStepIndex(Math.min(step + 1, steps.length))
  }

  const decrement = step => {
    setStepIndex(Math.max(step - 1, 0))
  }

  return (
    <Layout location={props.location}>
      <SEO title="How it works" />
      <Heading marginTop={0} size={500} textAlign="center">
        Get up and running in no time.
      </Heading>
      <Heading h={2} marginTop={0} marginBottom={160} opacity={0.4} size={360} textAlign="center">
        Follow these four steps.
      </Heading>
      <Flex marginBottom={120}>
        <Column marginRight={32}>
          <Box position="sticky" top={160}>
            <Heading h={4} opacity={0.4} size={210}>
              Setup instructions
            </Heading>
            <Paragraph fontSize={24} marginBottom={32}>
              From static builds to Docker containers, FeaturePeek supports various types of front-end architectures.
            </Paragraph>
            <UnorderedList marginLeft={32}>
              {steps.map((step, i) => (
                <ListItem key={step} fontSize={18} marginBottom={16} opacity={stepIndex === i ? 1 : 0.4}>
                  <Code color={stepIndex === i ? '#05c5cc' : 'inherit'} fontSize={18} marginRight={8}>
                    {i + 1}.
                  </Code>{' '}
                  <Strong color="#103c52">{step}</Strong>
                </ListItem>
              ))}
            </UnorderedList>
            <Flex alignItems="center" justifyContent="center" height={100} width={180}>
              <Button href="/pricing">Get started today</Button>
            </Flex>
          </Box>
        </Column>
        <Column marginLeft={32}>
          {elaborations.map(({ strong, body, image }, i) => (
            <ViewportArriver
              key={strong}
              strong={strong}
              paragraph={body}
              image={image}
              handleArrival={() => increment(i - 1)}
              handleDeparture={() => decrement(i)}
              last={i === elaborations.length - 1}
            />
          ))}
        </Column>
      </Flex>
      <Heading marginTop={240} size={500} textAlign="center">
        Video walkthrough
      </Heading>
      <Heading h={2} marginTop={0} opacity={0.4} size={360} textAlign="center">
        See FeaturePeek in action.
      </Heading>
      <center>
        <iframe
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
          height="360"
          src="https://www.youtube.com/embed/14UwLG1jQwU"
          style={{
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1), -10px 20px 40px rgba(0, 0, 0, 0.1)',
            margin: '40px 0 240px',
          }}
          title="FeaturePeek product walkthrough"
          width="640"
        />
      </center>
      <Faqs heading="Product FAQs" faqs={productFAQs} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
