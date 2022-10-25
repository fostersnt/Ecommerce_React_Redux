import {configureStore} from '@reduxjs/toolkit';
/*{productsReducer} is a name I have intrentionally given. The actual name the reducer in ProductsSlice.js is 
productsSlice.reducer*/
//import productsReducer, { productsFetch } from './Features/ProductsSlice'
import { productsApi } from './Features/ProductsAPI';

const Store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware)
    },
})


export default Store