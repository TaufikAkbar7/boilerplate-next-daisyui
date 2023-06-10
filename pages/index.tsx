import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Table } from 'antd'
import { AppLayoutDefault } from '@/components'

type Person = {
  id: number
  username: string
  age: number
}

const defaultData: Person[] = [
  {
    id: 1,
    username: 'tanner',
    age: 24
  },
  {
    id: 2,
    username: 'tandy',
    age: 40
  },
  {
    id: 3,
    username: 'joe',
    age: 45
  }
]

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  }
]

const Home: NextPageWithLayout = () => {
  return (
    <div className="shadow-lg rounded-lg bg-white p-5">
      <span>View a summary of all your customers over the last month.</span>
      <Table className="mt-5" dataSource={defaultData} columns={columns} />
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayoutDefault>{page}</AppLayoutDefault>
}

export default Home
