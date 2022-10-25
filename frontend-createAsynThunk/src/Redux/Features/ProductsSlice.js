import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    items: [],
    status: null
}

/*
The code below is an example of action creator. createAsyncThunk takes-in three parameters but the last
parameter is optional 
*/
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        const response = await axios.get('http://localhost:2000/products');
        return response?.data;
    }
)

const productsSlice =createSlice({
    name: 'Products',
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = 'Pending'
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = 'Success'
            state.items = action.payload
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = 'Rejected'
        }
    }
})

export default productsSlice.reducer