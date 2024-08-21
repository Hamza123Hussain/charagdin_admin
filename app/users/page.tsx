'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchUsers } from '@/functions/Users/GetUsers'
import { UserContext } from '@/utils/Context'
import Loader from '@/components/Loader'

interface User {
  id: string
  imageUrl: string
  name: string
  email: string
  role: string
}

const UsersPage = () => {
  const [Users, SetUsers] = useState<User[]>([])
  const { userData, loading, setLoading } = useContext(UserContext)
  useEffect(() => {
    const GetALL = async () => {
      setLoading(true)
      const Userdata = await fetchUsers(userData.email)
      if (Userdata) {
        SetUsers(Userdata)
        setLoading(false)
      }
    }
    GetALL()
  }, [])
  if (loading) {
    return <Loader />
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={user.imageUrl}
              alt={user.name}
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {user.name}
              </h2>
              <p className="text-gray-600 mb-2">Email: {user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersPage
