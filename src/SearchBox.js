import React from 'react'

// prettier-ignore
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 br3 ba b--green bg-lightest-blue"
        type="search"
        value={searchfield}
        onChange={searchChange}
        placeholder="Search Robots"
      />
    </div>
  )
}

export default SearchBox
