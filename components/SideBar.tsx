// components/Sidebar.js
import { useState } from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className={`w-64 bg-gray-800 text-white h-screen block`}>
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-6">Admin Panel</h1>
          <nav>
            <ul>
              <li className="mb-4">
                <Link
                  className="flex items-center text-white hover:bg-gray-700 p-2 rounded"
                  href="/"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12h18m-9 9V3"
                    />
                  </svg>
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="flex items-center text-white hover:bg-gray-700 p-2 rounded"
                  href="/category/create"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Create Category
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="flex items-center text-white hover:bg-gray-700 p-2 rounded"
                  href="/product/create"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Create Product
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="flex items-center text-white hover:bg-gray-700 p-2 rounded"
                  href="/categories"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  All Categories
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="flex items-center text-white hover:bg-gray-700 p-2 rounded"
                  href="/products"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M5 6h14m-7 6v6"
                    />
                  </svg>
                  All Products
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="flex items-center text-white hover:bg-gray-700 p-2 rounded"
                  href="/users"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7h8M5 12h14m-9 5v-1m-3-1v-1m10 0v-1m-3-1v1m-3 1v1"
                    />
                  </svg>
                  All Users
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6">{/* Main Content */}</main>
    </div>
  )
}

export default Sidebar
