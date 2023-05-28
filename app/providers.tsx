'use client'

import React, { Suspense } from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import ChakraTheme from '@/plugins/chakra-ui'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={{ ...ChakraTheme }}>
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </ChakraProvider>
    </CacheProvider>
  )
}
