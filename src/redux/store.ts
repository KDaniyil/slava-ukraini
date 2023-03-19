import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import likeReducer from './likeReducer'
import thumbReducer from './thumbReducer'

export const store = configureStore({
  reducer: {
    productsLikeState: likeReducer,
    productsInCart: cartReducer,
    postsThumbState: thumbReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

