import React from 'react'
import { useCart } from '../../../hooks/use-cart'

const DropDown = () => {
  const { data } = useCart()
  return (
    <div>
      {data?.cards.data.map((card) => (
        <p>{card.attributes.valor}</p>
      ))}
    </div>
  )
}

export default DropDown
