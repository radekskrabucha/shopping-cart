import React, { useEffect, useReducer, useContext } from 'react'

import reducer from './reducer'
import data from './data'


const AppContext = React.createContext()

const initialState = {
   products: data,
   cart: [],
   total: 0,
   amount: 0,
   isCartOpen: false,
}

const AppProvider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, initialState)

   const toggleCart = () => {
      dispatch({type: 'TOGGLE_CART'})
   }

   const increase = (id) => {
      dispatch({type: 'INCREASE', payload: id})
   }

   const decrease = (id) => {
      dispatch({type: 'DECREASE', payload: id})
   }

   const clearCart = () => {
      dispatch({type: 'CLEAR_CART'})
   }

   const removeItem = (id) => {
      dispatch({type: 'REMOVE_ITEM', payload: id})
   }

   const addItem = (id, index) => {
      dispatch({type: 'ADD_ITEM', payload: id})
   }

   useEffect(() => {
      dispatch({type: 'GET_TOTALS'})
   }, [state.cart])

   return (
      <AppContext.Provider
         value={{
            state,
            toggleCart,
            increase,
            decrease,
            clearCart,
            removeItem,
            addItem,
         }}
      >
         {children}
      </AppContext.Provider>
   )
}

export const useGlobalContext = () => {
   return useContext(AppContext)
}

export { AppContext, AppProvider }
