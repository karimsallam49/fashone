import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../..";
import axios from "axios";


const removefromcart:any=createAsyncThunk("act/removefromcart",async(id,thunkApi)=>{

    const{rejectWithValue,getState}=thunkApi;


    
    try {
        const {Authslice}=getState()as RootState
        const userid=Authslice.users?.id
        const isrecordingexsist=await axios.get(`http://localhost:3000/cart?userid=${userid}&productid=${id}`)
     if(isrecordingexsist.data.length >0){

         await axios.delete(`http://localhost:3000/cart?userid=${userid}&productid=${id}`)
         
     }
    
        
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message||error.message)

        }else{

            return rejectWithValue("unexpected error")
        }
        
    }

})

export default removefromcart;