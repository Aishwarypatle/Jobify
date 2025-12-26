import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        setUser: (state: any, action: PayloadAction<any>) => {
            state.user = action.payload
        },
        setLoading: (state: any, action: PayloadAction<any>) => {
            state.loading = action.payload
        },
        setError: (state: any, action: PayloadAction<any>) => {
            state.error = action.payload
        }
    }
})



export const { setUser, setLoading, setError } = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: any) => state.user.user
export const selectIsUserLoading = (state: any) => state.user.loading