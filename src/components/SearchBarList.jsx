import React from 'react';
import './SearchBarList.css';
import { SearchResults } from './SearchResults';

export const SearchBarList = ({results}) => {
  return (
    <div className="results-list">
        {results.map((result,id) => {
            return <SearchResults key={id} result={result} />
        })}
    </div>
  )
}
