import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export type Tresponse={id:number; title:string; img:string; cat_prefix:string;price:string}[];
 const actGetproduct:any=createAsyncThunk("product/actGetproduct",async(prefix,thunkAPI)=>{
    const {rejectWithValue,signal}=thunkAPI

    try {
        const response=await axios.get<Tresponse>(`
            http://localhost:3000/products?cat_prefix=${prefix}`,
        
            {signal}
        );
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message||error.message)

        }else{


            return rejectWithValue("unexpected error")
        }
    }


})

export default actGetproduct;