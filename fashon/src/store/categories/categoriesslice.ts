import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./actcategories";
type TcategoriesState={

    record:{id:number; title:string; img:string; prefix:string}[];
    loading:"idle"|"pending"|"succeeded"|"failed";
    error:string|null;
    
}

const initialState :TcategoriesState = {

    record:[],
    loading:"idle",
    error:null,

};

const Categoriesslice=createSlice({

    name :"categories",
    initialState,
    reducers:{

        cleancategoreis:(state)=>{

            state.record=[];

        }
    },
    extraReducers:(bulder)=>{
        bulder.addCase(actGetCategories.pending,(state)=>{

            state.loading ="pending";
            state.error=null;

        })
        bulder.addCase(actGetCategories.fulfilled,(state,action)=>{

            state.loading ="succeeded";
            state.record=action.payload

        })
        bulder.addCase(actGetCategories.rejected,(state,action)=>{

            state.loading ="failed";
            if(action.payload && typeof action.payload=="string"){

                state.error=action.payload;
            }

        })


    }



})
export {actGetCategories};
export default Categoriesslice.reducer;
export const {cleancategoreis}=Categoriesslice.actions