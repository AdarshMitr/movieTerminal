import { createSlice,createAsyncThunk,  } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/MovieApiKey';



export const fetchAsyncMovies= createAsyncThunk('movies/fetchAsyncMovies',async(term)=>{
   
    const response=await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
  
    return response.data;

})

export const fetchAsyncShows= createAsyncThunk('movies/fetchAsyncShows',async(term)=>{
    
    const response=await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
  
    return response.data;

})

export const fetchAsyncMovieorShowDetail= createAsyncThunk('movies/fetchAsyncMovieorShowDetail',async(id)=>{
   
    const response=await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`)
  
    return response.data;

})
const initialState={
    movies:{},
    shows:{},
    selectMovieorShow:{},
}

const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
      
        removeSelectedMovieorShow:(state)=>{
            state.selectMovieorShow={};
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
        },
        [fetchAsyncShows.fulfilled]:(state,{payload}) =>{
            console.log('fetched successfully');
            return{...state,shows:payload};
        },
        [fetchAsyncMovieorShowDetail.fulfilled]:(state,{payload}) =>{
            console.log('fetched successfully');
            return{...state,selectMovieorShow:payload};
        },
    }
})

export const{removeSelectedMovieorShow}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getSelectedMovieorShow=(state)=>state.movies.selectMovieorShow;
export default movieSlice.reducer;