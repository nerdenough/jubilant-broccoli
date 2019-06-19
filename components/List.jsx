import React from 'react'

function List({ children }) {
  return (
    <ul className="list">
      {children}

      <style jsx>{`
        .list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
          gap: 1rem;
          list-style: none;
          padding: 0 1rem;
        }
      `}</style>
    </ul>
  )
}

export default List
