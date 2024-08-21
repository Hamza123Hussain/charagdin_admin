'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'
import Login from '@/app/login/page'
import { UserContext } from '@/utils/Context'
import Sidebar from './SideBar'

const ConditionalLayout = ({ children }: { children: ReactNode }) => {
  const { userData } = useContext(UserContext)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  // Use useEffect to only set isClient on the client-side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Check if the current route is login or signup
  const isAuthPage =
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/forgotpass'

  // Render the layout based on client-side state
  if (!isClient) {
    return null // or a loading spinner if preferred
  }

  return (
    <>
      {userData || isAuthPage ? (
        <div className=" flex w-full">
          <Sidebar /> {children}{' '}
        </div>
      ) : (
        <Login />
      )}
    </>
  )
}

export default ConditionalLayout
