import styles from "./Cartsubtotal.style.module.css"
import { tproduct } from "../../ecommerce/product/product";

type totalpriceprops={products:tproduct[]}

const Cartsubtotal = ({products}:totalpriceprops) => {
  const subtotal=products.reduce((accumulator,el)=>{

    const price=el.price;
    const quantity=el.quantity

    if(quantity &&typeof quantity=="number"){

      return accumulator + price * quantity
    }
    else{
      return accumulator
    }

  },0)
  return (
    <div className={styles.container}>
      <span style={{ color: "white" }}>total</span>
      <span style={{ color: "white" }}>{subtotal}$</span>
    </div>
  )
}

export default Cartsubtotal
