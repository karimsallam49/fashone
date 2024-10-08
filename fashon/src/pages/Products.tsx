import { Container,Row,Col } from "react-bootstrap"
import { Product } from "../components/common/header"
import  { actGetproduct } from "../store/product/productslice"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useParams } from "react-router-dom";
import { productcleanup } from "../store/product/productslice"
import Loadingpage from "../components/feedback/loading/loading"


const Products = () => {
  const{error,record,loading}=useAppSelector((state)=>state.productslice)
  const cartitems=useAppSelector((state)=>state.cartslices.item)

  const productfullinfo=record.map((ele)=>(
    {...ele,quantity:cartitems[ele.id] ||0
      

  }))

  const dispatch=useAppDispatch();
  const params=useParams()
  useEffect(()=>{

   const promise= dispatch(actGetproduct(params.prefix as string))

    return()=>{
      dispatch(productcleanup())
      promise.abort()
    }

  },[dispatch,params])

  const productlist=record.length > 0 ? productfullinfo.map((records)=>(

    <Col xs={6} md={3} key={records.id} className="d-flex justify-content-center mb-5 mt-2">
        <Product {...records}/>
        </Col>
 )):"there is no product";


  return (
    <Container>
<Loadingpage loading={loading} error={error} type="product">


      <Row>

        {productlist}
      </Row>
</Loadingpage>



    </Container>
  )

  


}
export default Products
