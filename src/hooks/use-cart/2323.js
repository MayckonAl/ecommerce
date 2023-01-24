/* import { useQuery } from '@apollo/client'
import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from '../../localStorage'

import GET_IDS_CARDS from '../../pages/lib/queries/getIdsCards'

const CART_KEY = 'cartItem'
export const CartContext = createContext([])

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([])
  console.log(cartItem.length)
  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItem(data)
    }
  }, [])

  const { data } = useQuery(GET_IDS_CARDS, {
    skip: !cartItem.length,
    variables: {
      filters: {
        id: cartItem
      }
    }
  })

  const total = data?.cards.data.reduce((acc, cards) => {
    return (acc += cards.attributes.valor || 0)
  }, 0)

  const quantity = cartItem.length

  const addToCart = (id) => {
    const newItems = [...cartItem, id]
    setCartItem(newItems)
    setStorageItem(CART_KEY, newItems)
  }

  return (
    <CartContext.Provider
      value={{
        item: data?.cards.data.map((card) => {
          card.attributes.id
          card.attributes.valor
        }),
        total,
        addToCart,
        quantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart, useContext }
 */
