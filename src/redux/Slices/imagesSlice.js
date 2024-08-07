import { createSlice } from '@reduxjs/toolkit'

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    imgList: []
  },
  reducers: {
    appendImgToList: (state, action) => {
      state.imgList.unshift(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { appendImgToList } = imagesSlice.actions

export default imagesSlice.reducer