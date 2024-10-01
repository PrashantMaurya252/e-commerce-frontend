import React from 'react'

const ItemsNavbar = ({items}) => {
  return (
    <div>
        {items.map(item =>(
            <div key={item.id}>
                <span>{item.name}</span>
            </div>
        ))}
    </div>
  )
}

export default ItemsNavbar