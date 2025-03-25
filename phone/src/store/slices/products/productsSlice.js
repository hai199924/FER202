import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchDeleteProduct, fetchPatchEditProduct, fetchPostAddProduct } from "./productsAPI";

const initialState = {
    productsData: [],
    filteredProductsData: {
        products: [],
        notFound: false,
        opacity: false
    }
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterProducts(state, { payload }) {
            state.filteredProductsData.products = payload;
            state.filteredProductsData.notFound = false;
        },
        resetFilteredProducts(state) {
            state.filteredProductsData.notFound = true;
        },
        setOpacity(state, { payload }) {
            state.filteredProductsData.opacity = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
                state.productsData = payload;
            })
            .addCase(fetchDeleteProduct.fulfilled, (state, { payload }) => {
                state.productsData = state.productsData.filter(product => product.id !== payload);
            })
            .addCase(fetchPatchEditProduct.fulfilled, (state, { payload }) => {
                state.productsData = state.productsData.map(product =>
                    product.id === payload.id ? { ...payload } : product
                );
            })
            .addCase(fetchPostAddProduct.fulfilled, (state, { payload }) => {
                state.productsData.push(payload);
            });
    }
});

// Selectors
export const selectProducts = (state) => state.products;

// Actions
export const { filterProducts, setOpacity, resetFilteredProducts } = productsSlice.actions;

// Reducer export
export const productsReducer = productsSlice.reducer;
