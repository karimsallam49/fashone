import { createSlice } from "@reduxjs/toolkit";
import actgetproductbyid from "./act/actgetproductbyid";
import actaddtocart from "./act/actaddtocart";

export type Tcarts={

    item:{[key:number]:number};
    productinfo:{id:number; 
        title:string;
         img:string;
          cat_prefix:string;
          price:number
          ,quantitey:number
          ,max:number}[];
    loading:"idle"|"pending"|"succeeded"|"failed";
    error:string|null;
    
}

const initialState:Tcarts={

    item:{},
    productinfo:[],
    loading:"idle",
    error:null

}

const cartslices=createSlice({

    name:"cartslices",
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            const id=action.payload
            console.log(id)
            if(state.item[id]){
                state.item[id]++;
            }else{
                state.item[id]=1;

            }
        },

        changeitemquatity:(state,action)=>{

            state.item[action.payload.id]=action.payload.quantity
        },

    
        removeitemfromcart:(state,action)=>{

                delete state.item[action.payload.id];
                state.productinfo=state.productinfo.filter((el)=>el.id!==action.payload.id)

        
        },

        cleanproductinfo:(state)=>{

            state.productinfo=[];

        }
        ,clrearitems:(state)=>{

             state.item={0:0};

        }
    },
    extraReducers:(bulder)=>{
        bulder.addCase(actgetproductbyid.pending,(state)=>{

            state.loading ="pending";
            state.error=null;

        })
        bulder.addCase(actgetproductbyid.fulfilled,(state,action)=>{

            state.loading ="succeeded";

            if(action.payload.datatype==="productfullinfo"){
                state.productinfo=action.payload.data 
            }else if(action.payload.datatype==="productid"){

                const productid=action.payload.data as number[]

                productid.map((el)=>{


                    if(state.item[el]){
                        state.item[el]++
                    }else{
                        state.item[el]=1;
        
                    }
                })



            }
            

        })
        bulder.addCase(actgetproductbyid.rejected,(state,action)=>{

            state.loading ="failed";
            if(action.payload && typeof action.payload=="string"){

                state.error=action.payload;
            }

        })

        // add to cart
        bulder.addCase(actaddtocart.pending,(state)=>{

            state.loading ="pending";
            state.error=null;

        })
        bulder.addCase(actaddtocart.fulfilled,(state,action)=>{

            state.loading ="succeeded";
            console.log(action.payload.productid)
            const id=action.payload.productid
            if(state.item[id]){
                state.item[id]++
            }else{
                state.item[id]=1;

            }
           

        })
        bulder.addCase(actaddtocart.rejected,(state,action)=>{

            state.loading ="failed";
            if(action.payload && typeof action.payload=="string"){

                state.error=action.payload;
            }

        })


    }
}
)

export default cartslices.reducer;
export const {changeitemquatity,removeitemfromcart,cleanproductinfo,addtocart,clrearitems}=cartslices.actions