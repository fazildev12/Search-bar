import React from 'react';
import { FaSearch } from "react-icons/fa";


export default function SearchBar() {
  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon'/>
      <input placeholder='type to search..' />
    </div>
  )
}
