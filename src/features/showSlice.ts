import {createSlice,PayloadAction} from '@reduxjs/toolkit'

type contentState = {
    content: string,
    previousCalc: string
}

const initialState: contentState = {
    content : "",
    previousCalc: ""
}

const showSlice = createSlice({
    name: "show",
    initialState,
    reducers: {
        editContent: (state, action: PayloadAction<string>) =>{
            state.content = action.payload
        },
        setPreviousCalc: (state,action: PayloadAction<string>)=>{
            state.previousCalc = action.payload
        }
    }
})

export const {editContent,setPreviousCalc} = showSlice.actions 

export default showSlice.reducer