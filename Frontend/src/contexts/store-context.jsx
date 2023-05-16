/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { items } from "../api/Items"
import {createContext, useState} from "react"

export const StoreContext = createContext()

export const StoreContextProvider = (props) => {
  const totalItems = items.length

  const getDefaultCart = () => {
    const cart = {}
    for (let i = 0; i < totalItems; i++){
      cart[items[i].id] = 0
    }
    return cart
  }
  const [cartItems, setCartItems] = useState(getDefaultCart())


  const addToCart = (id) => {
    setCartItems((prev) => ({...prev, [id]: prev[id] + 1}))  
  }

  const removeFromCart = (id) => {
    if (cartItems[id] > 0){
      setCartItems((prev) => ({...prev, [id]: prev[id] - 1}))
    }
  }

  const resetCart = () => {
    setCartItems(getDefaultCart)
  }

  const getTotalCost = () => {
    var totalCost = 0
    items.map((item) => {
      totalCost += item.price * cartItems[item.id]
    })
    return totalCost
  }

  const contextValue = {cartItems, addToCart, removeFromCart, resetCart, getTotalCost}

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}
