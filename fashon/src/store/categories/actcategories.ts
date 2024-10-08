import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 const actGetCategories:any=createAsyncThunk("categories/actGetCategories",async(_,thunkAPI)=>{
    type Tresponse={id:number; title:string; img:string; prefix:string}[];
    const {rejectWithValue,signal}=thunkAPI

    try {
        const response=await axios.get<Tresponse>("http://localhost:3000/categories",{signal});
        console.log(response.data)
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message||error.message)

        }else{


            return rejectWithValue("unexpected error")
        }
    }


})

export default actGetCategories;