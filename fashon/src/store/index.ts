import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categoriesreducer from './categories/categoriesslice'
import productslice from './product/productslice'
import cartslices from './cart/cartSlices'
import Authslice from './auth/authslice'
import { persistStore,persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const authconfigration={
  key:"Authslice",
  storage,
  whitelist:["users","accsessToken"]

}
const cartconfigration={
  key:"cart",
  storage,
  whitelist:["item"]

}


const rootpersistconfgritaion={

key:"root",
storage,
whitelist:["cart","Authslice"]
}

const rootreducer= combineReducers({

  categoriesreducer,
  productslice,
  Authslice:persistReducer(authconfigration,Authslice),
  cartslices:persistReducer(cartconfigration,cartslices),
  
})
const persistedreducer=persistReducer(rootpersistconfgritaion,rootreducer)
export const store = configureStore({
  reducer:  persistedreducer,
  middleware:(getDefalutmiddleware)=>getDefalutmiddleware({
    serializableCheck:{
      ignoredActions:[  FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER]
    },
  })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const persistor=persistStore(store)
export default persistor