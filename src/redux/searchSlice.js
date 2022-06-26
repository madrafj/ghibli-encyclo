import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    update: (state, action) => state = action.payload,
    reset: (state) => state = ''
  }
})

export const { update, reset } = searchSlice.actions

export default searchSlice.reducer