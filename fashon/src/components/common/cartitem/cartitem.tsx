import { Button,Form } from "react-bootstrap";
import styles from "./cartitem.style.module.css"
import { tproduct } from "../../ecommerce/product/product";
import removefromcart from "../../../store/cart/act/actremovefromcart";
import { useAppDispatch } from "../../../store/hooks";
import { memo } from "react";
const {cartItem,product,productImg,productInfo,cartItemSelection}=styles;


type cartitemprops=tproduct & {changequatityhandler :(id :number,quantity:number )=>void} & {deleteditem:(id:number)=>void};
const Cartitem =memo( ({title,img,price,max,quantity,id,changequatityhandler}:cartitemprops)  => {
  const renderoption=Array(max).fill(0).map((_,idx)=>{
    const quantity=++idx;
    return(
      <option value={quantity} key={quantity}>{quantity}</option>
    )
  })


  const changequatity=(event:React.ChangeEvent<HTMLSelectElement>)=>{

    const quantity= +event.target.value
     changequatityhandler(id ,quantity)
  

  }

  
  const dispatch=useAppDispatch()
  return (
    <div className={cartItem}>
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
        />
      </div>
      <div className={productInfo}>
        <h2 style={{ color: "white" }} >{title}</h2>
        <h3 style={{ color: "white" }}>{price}</h3>
        <Button
          variant="secondary"
          style={{ color: "white" }}
          className="mt-auto"
          onClick={()=>{
            dispatch(removefromcart(id))
          }}
        >
          Remove
        </Button>
      </div>
    </div>

    <div className={cartItemSelection}>
      <span className="d-block mb-1"  style={{ color: "white" }}>quatity</span>
      <Form.Select value={quantity} onChange={changequatity}  >{renderoption}</Form.Select>
      
    </div>
  </div>
);
  
})

export default Cartitem
