import React from 'react'

function ProductListFilter({ onFilterChange, items }) {
  return (
    <select className="productListFilter" onChange={onFilterChange}>
      <option value="/">All</option>
      {items.map(item => (
        <option key={item.id} value={item.path}>
          {item.name}
        </option>
      ))}

      <style jsx>{`
        .productListFilter {
          margin: 0 1rem;
        }
      `}</style>
    </select>
  )
}

export default ProductListFilter
