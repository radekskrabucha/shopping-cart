const reducer = (state,action) => {
   if(action.type === 'TOGGLE_CART') {
      return {...state, isCartOpen: !state.isCartOpen}
   }

   if(action.type === 'INCREASE') {
      let tempCart = state.cart.map((cartItem) => {
         if(cartItem.id === action.payload) {
            cartItem = {...cartItem, amount: cartItem.amount + 1}
         }
         return cartItem
      })

      return {...state, cart: tempCart}
   }

   if(action.type === 'DECREASE') {
      let tempCart = state.cart.map((cartItem) => {
         if(cartItem.id === action.payload) {
            cartItem = {...cartItem, amount: cartItem.amount - 1}
         }
         return cartItem
      }).filter((cartItem) => cartItem.amount !== 0)

      return {...state, cart: tempCart}
   }

   if(action.type === 'CLEAR_CART') {
      return {
         ...state,
         cart: []
      }
   }

   if(action.type === 'REMOVE_ITEM') {
      return {
         ...state,
         cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
      }
   }

   if(action.type === 'ADD_ITEM') {
      if(state.cart.some((cartItem) => cartItem.id === action.payload)) {
         let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload) {
               cartItem = {...cartItem, amount: cartItem.amount + 1}
            }
            return cartItem
         })

         return {...state, cart: tempCart, isCartOpen: true}
      }
      return {
         ...state,
         cart: [...state.cart, state.products[action.payload - 1]],
         isCartOpen: true
      }
   }

   if (action.type === 'GET_TOTALS') {
      let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
         const { price, amount } = cartItem;
         const itemTotal = price * amount;

         cartTotal.total += itemTotal;
         cartTotal.amount += amount;

         return cartTotal;
      },
      {
         total: 0,
         amount: 0,
      }
      );
      total = (Math.round(total * 100) / 100).toFixed(2);
      return { ...state, total, amount };
   }
}

export default reducer