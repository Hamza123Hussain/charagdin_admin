'use client'
import { CreateProduct } from '@/functions/CRUD/Product/Create'
import React, { useState } from 'react'

const CreateProducts = () => {
  const [productName, setProductName] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [category, setCategory] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files ? e.target.files[0] : null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const Data = await CreateProduct(
      productName,
      imageFile,
      'hamza@gmail.com',
      category
    )
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Create Product
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="productName"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="imageFile"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Image Upload
            </label>
            <input
              type="file"
              id="imageFile"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-2 rounded-lg bg-gray-50 text-gray-700 cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 text-gray-700 p-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="books">Books</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProducts
