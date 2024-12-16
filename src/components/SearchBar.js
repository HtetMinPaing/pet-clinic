import React from 'react'
import SearchIcon from '../images/search.png'
import { usePatientContext } from '../storage/PatientContent'

const SearchBar = () => {

  const {query, setQuery} = usePatientContext();

  const handleSearch = (query) => {
    setQuery(query)
  }

  return (
    <div className="w-full">
      <div className="relative">
        <input
          className='w-full border border-[rgba(68, 68, 68, 0.5)] rounded-2xl p-1 px-5'
          placeholder='Search table'
          onChange={e => handleSearch(e.target.value)}
          value={query}
        />
        <button
          className='absolute top-2 right-4'
        >
          <img 
            src={SearchIcon}
            alt='Search'
          />
        </button>
      </div>
    </div>
  )
}

export default SearchBar