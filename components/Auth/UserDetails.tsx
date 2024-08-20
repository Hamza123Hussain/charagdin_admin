import { SignOut } from '@/functions/AUTH/SignOut'
import { UserContext } from '@/utils/Context'
import React, { useContext, useEffect, useState } from 'react'
import Loader from '../Loader'

const Userdetails = () => {
  const { userData, setUserData } = useContext(UserContext)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const ByeBye = async () => {
    const Data = await SignOut()
    if (Data) {
      setUserData(null)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-2 items-center">
        {/* Conditionally render user's name only on the client */}
        {isClient && userData?.Name ? (
          <>
            <img
              src="https://www.hindustantimes.com/web-stories/hania-aamirs-note-worthy-ethnic-looks-_NIQlE3VcFMqP0zB05EX/assets/20.jpeg"
              width={20}
              height={20}
              className="rounded-full"
              alt="image"
            />
            <h1 className="font-bold text-sm text-slate-800">
              {userData.Name}
            </h1>
            <button
              onClick={ByeBye}
              className="px-5 gap-2 bg-red-500 text-black rounded-lg"
            >
              Sign Out
            </button>
          </>
        ) : (
          <h1 className="font-bold text-sm text-slate-800">
            <Loader />
          </h1>
        )}
      </div>
    </div>
  )
}

export default Userdetails
