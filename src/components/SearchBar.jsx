import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'


export default function SearchBar() {
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    fetch(url).then(res => res.json())
      .then(json => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
        );
      });
      console.log(results)
  })
}

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }


  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        placeholder='type to search..'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}
