import { useQuery } from '@apollo/client'
import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from '../../localStorage'

import GET_IDS_CARDS from '../../pages/lib/queries/getIdsCards'

const CART_KEY = 'cartItem'
export const CartContext = createContext([])

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([])

  /* useEffect(() => {
    const data = getStorageItem(CART_KEY)
    if (data) {
      setCartItem(data)
    }
    console.log({ getStorageItem })
  }, []) */

  const { data } = useQuery(GET_IDS_CARDS, {
    skip: !cartItem.length,
    variables: {
      filters: {
        id: cartItem
      }
    }
  })

  const itemsCout = Object.keys(cartItem).length

  const addToCart = (id) => {
    const newItems = [...cartItem, id]
    setCartItem(newItems)
    /* setStorageItem(CART_KEY, newItems) */
  }

  const IsinCart = (id) => (id ? cartItem.includes(id) : false)

  return (
    <CartContext.Provider
      value={{
        data,
        addToCart,
        itemsCout
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
