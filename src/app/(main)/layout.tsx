import React from 'react'

const MainLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className="flex flex-col mx-auto my-2">{children}</div>
  )
}

export default MainLayout;