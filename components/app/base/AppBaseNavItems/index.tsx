'use client'

import React, { memo, ReactNode } from 'react'
import { Flex, FlexProps, Icon, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface NavItemProps extends FlexProps {
  icon: IconType
  path: string
  children: ReactNode
}

function AppBaseNavItems({ icon, children, path, ...rest }: NavItemProps) {
  return (
    <Link
      href={path}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white'
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

export default memo(AppBaseNavItems)
