'use client'
import Loader from '@/components/Loader'
import { fetchProducts } from '@/functions/CRUD/Product/GettingProduct'
import { UserContext } from '@/utils/Context'
import React, { useContext, useEffect, useState } from 'react'

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([])
  const { loading, setLoading } = useContext(UserContext)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      try {
        const productData = await fetchProducts('hamza@gmail.com')
        setProducts(productData)
        setLoading(false)
      } catch (error) {
        setError('Failed to fetch products.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) {
    return <Loader />
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
            className="shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="w-full aspect-w-16 aspect-h-9">
              <img
                src={product.ImageUrl}
                alt={product.Name}
                className="w-full h-full object-cover"
              />
            </div>
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
