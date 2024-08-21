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
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Product List
      </h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{product.Name}</h2>
            <img
              src={product.ImageUrl}
              alt={product.Name}
              className="w-full h-auto rounded-lg mb-2"
            />
            <p className="text-gray-700">Category: {product.Category}</p>
            <p className="text-gray-700">Made by: {product.MadeBY}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
