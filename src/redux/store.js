import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from './Slices/imagesSlice'

export default configureStore({
  reducer: {
    images: imagesReducer
  }
})