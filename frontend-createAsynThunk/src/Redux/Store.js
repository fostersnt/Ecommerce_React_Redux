import {configureStore} from '@reduxjs/toolkit';
/*{productsReducer} is a name I have intrentionally given. The actual name the reducer in ProductsSlice.js is 
productsSlice.reducer*/
import productsReducer, { productsFetch } from './Features/ProductsSlice'

const Store = configureStore({
    reducer: {
        products: productsReducer,
    },
})

Store.dispatch(productsFetch())

export default Store