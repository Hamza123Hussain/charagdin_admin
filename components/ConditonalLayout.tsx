'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { UserContext } from '@/utils/Context'
import { usePathname } from 'next/navigation'

import Navbar from './Navbar'

import Login from '@/app/login/page'
import MobileSideBar from './MobileSIdeBAR'

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
      {userData ? (
        <div className="flex flex-col min-h-screen">
          {/* Sidebar
          <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:top-0 md:left-0 md:h-full bg-slate-800 text-white">
            <Sidebar />
          </div> */}

          {/* <div className="flex-1 flex flex-col md:ml-64"> */}
          <MobileSideBar />
          <main className="flex-1 min-h-screen overflow-y-auto bg-gray-100 ">
            {children}
          </main>
          {/* </div> */}
        </div>
      ) : isAuthPage ? (
        <div className="flex flex-col min-h-screen">
          <Navbar />

          {children}
        </div>
      ) : (
        <div className="flex flex-col  min-h-screen">
          <Navbar />

          <Login />
        </div>
      )}
    </>
  )
}

export default ConditionalLayout
