import styles from'./headercart.module.css'
// import carticon from './icons8-cart-100.png'
import { useAppSelector } from '../../../store/hooks';
import cartquantityselctor from '../../../store/selectors';
import { useState,useEffect } from 'react';
import cartitemicone from "../../../assets/icones/shopping-cart.png"


const {headercartcontainer,headercartqantitiy,pumpcarticone}=styles;
const Headercart = () => {
  const cartitems=useAppSelector(cartquantityselctor)
  const [isanimate,setisanimate]=useState(false)
  const quatitystyle= `${cartitems>0?headercartqantitiy:""} ${isanimate ?pumpcarticone :""}`

  useEffect(()=>{

   setisanimate(true);


   const deponce= setTimeout(() => {
      setisanimate(false)
    },300);

    return ()=> clearTimeout(deponce);
  },[cartitems])


  return (
    <div>
        <div className={headercartcontainer}>
            <img src={cartitemicone} alt="" />
            <div className={quatitystyle}>
              {cartitems}
            </div>
            

        </div>
      
    </div>
  )

}
export default Headercart;
