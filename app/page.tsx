'use client'

import { AppLayoutDefault } from '@/components'
import { Card, CardBody, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <AppLayoutDefault>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
    </AppLayoutDefault>
  )
}
