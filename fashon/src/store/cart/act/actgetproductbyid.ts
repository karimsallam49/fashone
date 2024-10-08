import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../..";
import axios from "axios";
import { Tresponse } from "../../product/actproduct";
type tproduct = Tresponse[];
type Tdatatype= "productid"|"productfullinfo"
 const actgetproductbyid:any=createAsyncThunk("actgetproductbyid/catchdata",async(datatype:Tdatatype,thunkAPI)=>{

    const {rejectWithValue,getState}=thunkAPI

   
    try {

        const {Authslice}=getState()as RootState
        const userid=Authslice.users?.id
        const getproductid=await axios.get<{productid:number}[]>(`http://localhost:3000/cart?userid=${userid}`)
        if(datatype==="productfullinfo"){
            
            if(!getproductid.data.length){
       
               return  {data:[],datatype:"productfullinfo"}
       
            }else{
                const connecteditemsid=getproductid.data.map((el)=>`id=${el.productid}`).join("&")
                const response=await axios.get<tproduct>(`http://localhost:3000/products?${connecteditemsid}`)

                return  {data:response.data,datatype:"productfullinfo"}
            }

            }else if(datatype==="productid"){
                const connecteditemsid=getproductid.data.map((el)=>el.productid
            
            )

            if(!connecteditemsid.length){

                return {data:[],datatype:"productid"}
            }else{

                return {data:connecteditemsid ,datatype:"productid"}
            }

            
            }
    
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message||error.message)

        }else{

            return rejectWithValue("unexpected error")
        }
        
    }
})

export default actgetproductbyid