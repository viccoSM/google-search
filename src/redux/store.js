import { configureStore } from '@reduxjs/toolkit'
import searchReducers from './services/search'

export default configureStore({
  reducer: {
    results: searchReducers
  }
})