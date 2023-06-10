import React, { memo } from 'react'

type TProps = {
  children: React.ReactNode
}

function AppLayoutAuth({ children }: TProps) {
  return (
    <section className="min-h-screen">
      <div className="flex flex-row min-h-screen align-center px-10 gap-x-20">
        <div className="flex flex-col items-center justify-center max-w-[700px]">
          <span className="text-[60px] font-bold">
            Senior web designers <span className="text-primary">&</span>{' '}
            Full-Stack Developers
          </span>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-gray-300 rounded-lg py-5 px-8">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default memo(AppLayoutAuth)
