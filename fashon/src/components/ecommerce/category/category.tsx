import { Link } from "react-router-dom";
import styles from"./category.module.css";
const {categor,categoryimg,categorytite}=styles;


interface Tprops  {

  title:string;
  img:string;
  prefix:string,
}



const Category = ({title,img,prefix}:Tprops) => {
 
  return (
    <div className={categor}>

      <Link to={`products/${prefix}`}>
      
      
      <div className={categoryimg}>
        <img src={img} alt="" />
      </div>
      <div className={categorytite}>{title}</div>
      </Link>

    </div>
  )
}

export default Category
