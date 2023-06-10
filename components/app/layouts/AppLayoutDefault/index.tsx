import React, { memo, useCallback, useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import { useRouter } from 'next/router'
import LogoutIcon from '@/assets/svg/ic-logout.svg'
import { useAuthStore } from '@/plugins/zustand'

type TProps = {
  children: React.ReactNode
}

function AppLayoutDefault({ children }: TProps) {
  const router = useRouter()
  const [current, setCurrent] = useState(router.pathname)
  const logout = useAuthStore(state => state.logout)

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
    logout()
  }, [logout])

  return (
    <section>
      <Layout className="!min-h-screen">
        <Sider width={300} theme="light" className="!bg-[#008DEB] py-10">
          <div className="fixed flex flex-col justify-center w-72">
            <h1 className="font-semibold text-xl text-white text-center">
              Boilerplate Next Antd
            </h1>
            <Menu
              className="!bg-transparent !mt-5 !border-none"
              onClick={onClickMenu}
              selectedKeys={[current]}
              mode="vertical"
              items={commandanMenus}
            />

            <div className="flex flex-col items-center justify-end mt-96">
              <Button
                icon={<LogoutIcon />}
                className="custom-btn-default-logout !gap-x-2 !border-white !font-medium !cursor-pointer"
                size="large"
                onClick={onClickLogout}
              >
                Logout
              </Button>
            </div>
          </div>
        </Sider>
        <Layout>
          <Content className="p-10">{children}</Content>
        </Layout>
      </Layout>
    </section>
  )
}

export default memo(AppLayoutDefault)
