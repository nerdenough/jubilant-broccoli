import React from 'react'

function ListItem({ variant }) {
  return (
    <li key={variant.id} className="variantListItem">
      {variant.image ? (
        <img
          src={variant.image.url}
          alt={variant.image.altText || variant.name}
        />
      ) : (
        <img src="https://placebear.com/200/200" alt={variant.name} />
      )}
      <div className="name">
        <h3>{variant.name}</h3>
      </div>

      <style jsx>{`
        .variantListItem {
          background: #efefef;
          display: flex;
          flex-direction: column;
          min-width: 20rem;
        }

        .variantListItem img {
          width: 100%;
          height: 20rem;
        }

        .name {
          display: flex;
          color: #444;
          height: 4rem;
          padding: 0.5rem 0.5rem;
          align-items: center;
        }

        .name h3 {
          margin: 0 auto;
        }
      `}</style>
    </li>
  )
}

export default ListItem
