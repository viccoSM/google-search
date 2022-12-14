import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {useQuery} from "../utils";
import SearchIcon from '../assets/search.svg'

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState('')

  const query = useQuery()
  const location = useLocation()

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to='/'>
              <h2 className='text-2xl font-semibold'>
                Home
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600 flex space-x-1">
                <div className="relative w-full">
                <input
                  className='block py-2 w-full md:w-[275px] z-20 text-gray-900 px-3 rounded-2xl border-2 focus:bg-gray-50:border-b-gray-200'
                  id='search'
                  value={search}
                  onChange={handleChange}
                />
                  <Link  to={`${location.pathname}?q=${search}`}>
                    <button className='absolute top-0 right-0 p-2.5 '>
                      <img src={SearchIcon} alt="" className='h-5'/>
                    </button>
                  </Link>
                </div>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to={`/search?q=${query.get('q')}`}>
                  All
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to={`/search/news?q=${query.get('q')}`}>
                  News
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to={`/search/images?q=${query.get('q')}`}>
                  Images
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;