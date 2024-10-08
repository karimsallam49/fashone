import { useCallback, useEffect } from "react"
import { useAppDispatch,useAppSelector } from "../store/hooks"
import actgetproductbyid from "../store/cart/act/actgetproductbyid"
import Loadingpage from "../components/feedback/loading/loading"
import { Cartitem } from "../components/common/header"
import { changeitemquatity, cleanproductinfo, removeitemfromcart } from "../store/cart/cartSlices"
import Cartsubtotal from "../components/common/Cartsubtotalprice/Cartsubtotal"
import Loattehandler from "../components/feedback/lottiehandler/loattehandler"

const Cart = () => {
  const dispatch=useAppDispatch()
  useEffect(()=>{
  
    dispatch(actgetproductbyid("productfullinfo"))
    return()=>{ dispatch(cleanproductinfo())}
  
  },[dispatch]) 

  // change quatntity function 

  const changequatityhandler= useCallback((id:number,quantity:number)=>{
    dispatch (changeitemquatity({id ,quantity}))
  },[dispatch])

  // delete item function 

  const deleteditem= useCallback((id:number)=>{

    dispatch(removeitemfromcart({id}))
  },[dispatch])
  const { item,productinfo,loading,error}=useAppSelector((state)=>state.cartslices);

  const product =productinfo.map((el)=>({
    ...el,
    quantity:item[el.id]
}))

const products=product.length > 0 ? product.map((el)=>(

  
      <Cartitem {...el} changequatityhandler={changequatityhandler} deleteditem={deleteditem} />
      
)):<Loattehandler types="cartempty"/>;
return (

    <Loadingpage loading={loading} error={error} type="cart">
      {product.length >0 ?(

      <div>
        {products}
<Cartsubtotal products={product}/>
      </div>

      ):(
        <Loattehandler types="cartempty" />
      )}
    </Loadingpage>
    
  )
}

export default Cart
