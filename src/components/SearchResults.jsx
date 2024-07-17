import React from 'react';
import './SearchResults.css';

export const SearchResults = ({result}) => {
  return (
    <div className='search-results'>{result.name}</div>
  )
}
