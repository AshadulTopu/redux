
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    return data
})


const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isLoading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.posts = action.payload
            state.error = null
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false
            state.posts = []
            state.error = action.error.message
        })
    }
    // reducer
    // reducers: {
    //     addPost: (state, action) => {
    //         state.posts.push(action.payload)
    //     },

    //     deletePost: (state, action) => {
    //         state.posts = state.posts.filter(post => post.id !== action.payload)
    //     },

    //     updatePost: (state, action) => {
    //         state.posts = state.posts.map(post => post.id === action.payload.id ? action.payload : post)
    //     },
    //     getPost: (state, action) => {
    //         state.posts = action.payload
    //     }
    // }
})


export default postSlice.reducer