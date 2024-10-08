import { Button,Spinner } from "react-bootstrap";
import styles from './product.module.css';
const {productcontainer,productimg}=styles;
import {useAppDispatch } from "../../../store/hooks";
import { useEffect, useState,memo } from "react";
import actaddtocart from "../../../store/cart/act/actaddtocart";
export type tproduct = {

  title:string;
  img:string;
  cat_prefix:string
  ;price:number;
  max:number;
  id:number;
  quantity?:number;
}



const Product =memo( ({title,img,id,price,max,quantity}:tproduct) => {
  const dispatch=useAppDispatch();

const currentquatity=max-(quantity ?? 0)
const quatityreachmax =currentquatity <=0 ?true :false


  const [isbtnclicked,setisbtnclicked]=useState(0)
  const [isbtndeasible,setisbtndeasible]=useState(false)
  
  useEffect(()=>{
    
    if(!isbtnclicked){
      return
    }
    setisbtndeasible(true)
    
    const deponce=setTimeout(() => {
      setisbtndeasible(false)
      
    }, 300);
    
    return ()=> clearTimeout(deponce)
    
  },[isbtnclicked])
  const handlecart=()=>{

    dispatch(actaddtocart(id))
    setisbtnclicked((prev)=>prev+1)
  }


  return (
    <div className={productcontainer} key={id}>
        <div className={productimg}>

            <img src={img} alt="" />
        </div>
      <h2 style={{color:"white"}}>{title}</h2>
      <h3 style={{color:"white"}}>{price}</h3>
      <h3 style={{color:"white"}}>{currentquatity}</h3>
      <p style={{color:"red"}}>{quatityreachmax ? "You reached to max quantity":""}</p>
        <Button onClick={handlecart}
         disabled={isbtndeasible ||quatityreachmax}
          variant="info"
           style={{color :'white'}}>
            {isbtndeasible? <><Spinner animation="border" size="sm"/>loading.. </>:"Add to Cart"}
            </Button>
    </div>
  )
})

export default Product;
