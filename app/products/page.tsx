'use client'
import { fetchProducts } from '@/functions/CRUD/Product/GettingProduct'
import React, { useEffect, useState } from 'react'

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await fetchProducts('hamza@gmail.com')
        setProducts(productData)
      } catch (error) {
        setError('Failed to fetch products.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-gray-700 text-lg">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Product List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={product.ImageUrl}
              alt={product.Name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {product.Name}
              </h2>
              <p className="text-gray-700 mb-1">
                Category:{' '}
                <span className="font-medium">{product.Category}</span>
              </p>
              <p className="text-gray-700">
                Made by: <span className="font-medium">{product.MadeBY}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
