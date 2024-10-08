import Categorysceleton from "./sceletones/categoreysceletone/categorysceleton"
import ProductSkeleton from "./sceletones/productscelton/producrscelton"
import CartSkeleton from "./sceletones/cartsceltone/cartsceltone"
import Loattehandler from "../lottiehandler/loattehandler"
type loadingprop={

    loading:"idle"|"pending"|"succeeded"|"failed";
    error: null|string;
    type?:"cart"|"product"|"category"
    children:React.ReactNode;
}
const sketonetypes={
  cart:CartSkeleton,
  product:ProductSkeleton,
  category:Categorysceleton

}

const Loadingpage = ({loading,children,type="category"}:loadingprop) => {
const Component=sketonetypes[type]
    if(loading=="pending"){

        return <div><Component/></div>


    }
    if(loading=="failed"){

        return <Loattehandler types="error"  />


    }
  return (
    <div>
     {children}
    </div>
  )
}

export default Loadingpage
