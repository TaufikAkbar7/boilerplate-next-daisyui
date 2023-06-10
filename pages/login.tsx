import React, { ReactElement, useCallback } from 'react'
import { NextPageWithLayout } from './_app'
import { AppLayoutAuth } from '@/components'
import { Button, Form, Input } from 'antd'
import { useRouter } from 'next/router'
import { useAuthStore } from '@/plugins/zustand'

const Login: NextPageWithLayout = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const setIsAuthenticated = useAuthStore(state => state.setIsAuthenticated)

  const onClickSubmit = useCallback(async () => {
    await form.validateFields()
    setIsAuthenticated(true)
    router.push('/')
  }, [form, router, setIsAuthenticated])

  return (
    <div className="flex flex-col">
      <div className="">
        <h1 className="font-bold text-3xl">Join our team</h1>
        <span className="text-base">
          We’re looking for amazing engineers just like you! Become a part of
          our rockstar engineering team and skyrocket your career!
        </span>
      </div>
      <Form
        layout="vertical"
        form={form}
        name="form_login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 26 }}
        autoComplete="off"
        requiredMark={false}
        className="!mt-5"
      >
        <Form.Item
          label="Email"
          name="email"
          className="font-semibold"
          rules={[
            { required: true, message: 'Silahkan masukan email!' },
            { type: 'email' }
          ]}
        >
          <Input size="large" placeholder="Email" className="!font-normal" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          className="font-semibold"
          rules={[{ required: true, message: 'Silahkan masukan password!' }]}
        >
          <Input.Password
            size="large"
            placeholder="Password"
            onPressEnter={onClickSubmit}
          />
        </Form.Item>
        <Button
          block
          type="primary"
          className="!pt-2 !pb-8 !font-semibold mt-2"
          onClick={onClickSubmit}
        >
          Login
        </Button>
      </Form>
    </div>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <AppLayoutAuth>{page}</AppLayoutAuth>
}

export default Login
