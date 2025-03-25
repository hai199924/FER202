import {createSlice} from "@reduxjs/toolkit";
import {fetchAllBlockedUsers, fetchAllUsers, fetchDeleteUser, fetchPatchEditUser, fetchPostAddBlockedUser, fetchPostDeleteBlockedUser} from "./userAPI";
import {fetchPatchAddToCartProduct,fetchPatchDecCountCartProduct, fetchPatchDeleteCartProduct, fetchPatchIncCountCartProduct } from "../products/productsAPI";

const initialState = {
    isAdmin: false,
    isBlocked: false,
    usersData: [],
    currentUser: null,
    blockedUsers: [],
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        logIn: (state, { payload }) => {
            state.currentUser = payload;
        },
        isAuthAdmin: (state) => {
            state.isAdmin = true;
        },
        logOut: (state) => {
            state.currentUser = null;
            state.isBlocked = false;
            state.isAdmin = false;
        },
        isAuthBlockedUser: (state) => {
            state.isBlocked = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
                state.usersData = payload;
            })
            .addCase(fetchDeleteUser.fulfilled, (state, { payload }) => {
                state.usersData = state.usersData.filter(user => user.id !== payload);
            })
            .addCase(fetchPatchEditUser.fulfilled, (state, { payload }) => {
                state.usersData = state.usersData.map(user => 
                    user.id === payload.id ? { ...payload } : user
                );
            })
            .addCase(fetchPostAddBlockedUser.fulfilled, (state, { payload }) => {
                state.blockedUsers.push(payload);
            })
            .addCase(fetchPostDeleteBlockedUser.fulfilled, (state, { payload }) => {
                state.blockedUsers = state.blockedUsers.filter(user => user.id !== payload);
            })
            .addCase(fetchAllBlockedUsers.fulfilled, (state, { payload }) => {
                state.blockedUsers = payload;
            })
            .addCase(fetchPatchAddToCartProduct.fulfilled, (state, { payload }) => {
                state.currentUser = payload;
            })
            .addCase(fetchPatchDeleteCartProduct.fulfilled, (state, { payload }) => {
                state.currentUser = payload;
            })
            .addCase(fetchPatchIncCountCartProduct.fulfilled, (state, { payload }) => {
                state.currentUser = payload;
            })
            .addCase(fetchPatchDecCountCartProduct.fulfilled, (state, { payload }) => {
                state.currentUser = payload;
            });
    }
});

// Selectors
export const selectUsers = (state) => state.users;

// Actions
export const { logIn, logOut, isAuthAdmin, isAuthBlockedUser } = usersSlice.actions;

// Reducer export
export const usersReducer = usersSlice.reducer;