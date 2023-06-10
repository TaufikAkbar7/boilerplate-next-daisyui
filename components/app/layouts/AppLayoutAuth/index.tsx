import React, { memo } from 'react'

function AppLayoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center">
          <span>Senior web designers </span>
          <span>& </span>
          <span>Full-Stack Developers</span>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}

export default memo(AppLayoutAuth)
