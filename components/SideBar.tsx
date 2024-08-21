// components/Sidebar.js
import { FaHome, FaPlus, FaBox, FaList, FaUsers } from 'react-icons/fa'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

const routes = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'Create Category', path: '/category', icon: <FaPlus /> },
  { name: 'Create Product', path: '/product', icon: <FaBox /> },
  { name: 'All Categories', path: '/categories', icon: <FaList /> },
  { name: 'All Products', path: '/products', icon: <FaBox /> },
  { name: 'All Users', path: '/users', icon: <FaUsers /> },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-[20vw] bg-gray-800 text-white h-screen block">
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-6">Admin Panel</h1>
          <nav>
            <ul>
              {routes.map((route) => (
                <li key={route.path} className="mb-4">
                  <Link
                    href={route.path}
                    className={`flex items-center p-2 rounded ${
                      pathname === route.path
                        ? ' text-green-500'
                        : 'text-white hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-xl mr-3">{route.icon}</span>
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6">{/* Main Content */}</main>
    </div>
  )
}

export default Sidebar
