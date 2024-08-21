'use client'

import { CreateCategory } from '@/functions/CRUD/Catorgories/Create'
import React, { useState } from 'react'
const CreateCatogory = () => {
  const [CatorgoryName, setCatorgoryName] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const handleFileChange = (e: any) => {
    setImageFile(e.target.files[0])
    console.log('IMAGE :', imageFile)
  }
  /**  CatorgoryName: string,
  ImageUrl: string,
  UserEmail: string,
  Category: string */
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const dATA = await CreateCategory(
      CatorgoryName,
      'hamza@gmail.com',
      imageFile
    )
  }

  return (
    <div className="flex justify-center items-center w-[50vw] mx-auto text-black  ">
      <div className="  bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Create Product
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="CatorgoryName"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="CatorgoryName"
              value={CatorgoryName}
              onChange={(e) => setCatorgoryName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageFile"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Image Upload
            </label>
            <input
              type="file"
              id="imageFile"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateCatogory
