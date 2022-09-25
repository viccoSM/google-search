import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import axios from "axios";

export const getSearch = createAsyncThunk('search/getSearch', async ({type, query}) => {
  const response = await axios.request({
    method: 'GET',
    url: `https://google-search3.p.rapidapi.com/api/v1/${type}/q=${query}`,
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'EU',
      'X-RapidAPI-Key': '3d9d850c3amshf2153efaaf103d6p19cd0ajsna1ac1ab60411',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
  })

  return response.data
})

const searchEntity = createEntityAdapter()

const searchSlice =createSlice({
  name: 'search',
  initialState: {
    data: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder.addCase(getSearch.fulfilled, (state, action) => {

    })
  }
})

export const resultsSelector = searchEntity.getSelectors(state => state.results)

export default searchSlice.reducer