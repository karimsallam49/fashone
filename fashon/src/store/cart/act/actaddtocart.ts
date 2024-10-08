import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../..";

const actaddtocart:any=createAsyncThunk("act/addtocart", async (id:number,thunkApi)=>{

    const {rejectWithValue,getState}=thunkApi
    const {Authslice}=getState() as RootState
    const userid=Authslice.users?.id
    try {
        if(!userid){

            alert("you have to login first")
        }else{
        const response= await axios.post("http://localhost:3000/cart/",{userid:userid,productid:id})
        return response.data
        }
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message||error.message)

        }else{

            return rejectWithValue("unexpected error")
        }
        
    }
})

export default actaddtocart