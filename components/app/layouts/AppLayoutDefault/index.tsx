import React, { memo, useCallback, useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import { useRouter } from 'next/router'
import LogoutIcon from '@/assets/svg/ic-logout.svg'

/**
 *
 * @param {React.Component} children
 * @param {String} title
 * @returns JSX
 */
function AppLayoutDefault({ children }) {
  const router = useRouter()
  const [current, setCurrent] = useState(router.pathname)

  const { Sider, Content } = Layout

  const commandanMenus = [
    {
      label: 'Home',
      key: '/'
    }
  ]

  /**
   * @param {MenuProps} event
   * @returns void
   */
  const onClickMenu = useCallback(
    e => {
      setCurrent(e.key)
      router.push(e.key)
    },
    [setCurrent, router]
  )

  /**
   * @returns void
   */
  const onClickLogout = useCallback(() => {
    router.push('/login')
  }, [router])

  return (
    <section>
      <Layout className="!min-h-screen">
        <Sider width={300} theme="light" className="!bg-[#008DEB] py-10">
          <div className="fixed flex flex-col justify-center w-72">
            <h1 className="font-semibold text-xl">
              Boilerplate Next Chakra UI
            </h1>
            <Menu
              className="!bg-transparent !mt-16 !border-none"
              onClick={onClickMenu}
              selectedKeys={[current]}
              mode="vertical"
              items={commandanMenus}
            />

            <div className="flex flex-col items-center justify-end mt-64">
              <Button
                icon={<LogoutIcon />}
                className="custom-btn-default-logout !gap-x-2 !border-white !font-medium"
                size="large"
                onClick={onClickLogout}
              >
                Logout
              </Button>
            </div>
          </div>
        </Sider>
        <Layout>
          <Content className="pb-5">{children}</Content>
        </Layout>
      </Layout>
    </section>
  )
}

export default memo(AppLayoutDefault)
