import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Home = (props) => {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='container mx-auto text-gray-800 h-screen flex items-center justify-center'>
      <div className="inline-block text-center space-y-3">
        <h1 className='text-2xl font-semibold'>Home</h1>
        <input
          className='w-full text-gray-900 p-3 rounded-2xl border-2 focus:bg-gray-50:border-b-gray-200'
          id='search'
          type='search'
          value={search}
          onChange={handleChange}
        />
        <Link to={`/search?q=${search}`}>
          <button className='btn-primary mt-3'>
            Search
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;