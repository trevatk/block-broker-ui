
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../../app/store'

import type { MessageState } from './types'

const initialState: MessageState = {
    hash: ''
}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setHash: (state, action: PayloadAction<string>) => {
            state.hash = action.payload
        }
    }
})

export const selectHash = (state: RootState) => state.message.hash

export default messageSlice.reducer