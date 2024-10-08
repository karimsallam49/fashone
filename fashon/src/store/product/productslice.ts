import { createSlice } from "@reduxjs/toolkit";
import actGetproduct from "./actproduct";
type Tproductstate={

    record:{
        id:number;
         title:string;
          img:string;
           cat_prefix:string;
           price:number
           ,max:number
           ,home_render:string
        
        }[];
    loading:"idle"|"pending"|"succeeded"|"failed";
    error:string|null;
    
}

const initialState :Tproductstate = {

    record:[],
    loading:"idle",
    error:null,

};

const Productslice=createSlice({

    name :"Product",
    initialState,
    reducers:{

        productcleanup:(state)=>{

            state.record=[]
        }
    },
    extraReducers:(bulder)=>{
        bulder.addCase(actGetproduct.pending,(state)=>{

            state.loading ="pending";
            state.error=null;

        })
        bulder.addCase(actGetproduct.fulfilled,(state,action)=>{

            state.loading ="succeeded";
            state.record=action.payload

        })
        bulder.addCase(actGetproduct.rejected,(state,action)=>{

            state.loading ="failed";
            if(action.payload && typeof action.payload=="string"){

                state.error=action.payload;
            }

        })


    }



})


export {actGetproduct};
export default Productslice.reducer;
export const {productcleanup} =Productslice.actions