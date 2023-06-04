import { createSlice,createAsyncThunk,  } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/MovieApiKey';



export const fetchAsyncMovies= createAsyncThunk('movies/fetchAsyncMovies',async()=>{
    const movieText='Harry';
    const response=await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
  
    return response.data;

})
const initialState={
    movies:{},
}

const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
          state.movies=payload;  
        },
    },
    extraReducers:{
       

        [fetchAsyncMovies.pending]:()=>{
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload}) =>{
            console.log('fetched successfully');
            return{...state,movies:payload};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log('rejected');
        }
    }
})

export const{addMovies}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export default movieSlice.reducer;