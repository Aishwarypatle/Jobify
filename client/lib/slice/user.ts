import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        setUser: (state: any, action: any) => {
            state.user = action.payload
        },
        setLoading: (state: any, action: any) => {
            state.loading = action.payload
        },
        setError: (state: any, action: any) => {
            state.error = action.paload
        }
    }
})



export const { setUser, setLoading, setError } = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: any) => state.user.user