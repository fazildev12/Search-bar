import React from 'react';
import './SearchResults.css';

export const SearchResults = ({result}) => {
  return (
    <div className='search-results' onClick={(e) => {
      alert(`you have clicked  ${result.name}`)
    }}>{result.name}</div>
  )
}
