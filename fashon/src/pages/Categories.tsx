import { Container,Row,Col } from "react-bootstrap"
import { Category } from "../components/common/header";
import { useAppDispatch,useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import actGetCategories from "../store/categories/actcategories";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loadingpage from "../components/feedback/loading/loading";
import { cleancategoreis } from "../store/categories/categoriesslice";


const Categories = () => {

  const {error,loading,record}=useAppSelector((state)=>state.categoriesreducer);
  
  const dispatch=useAppDispatch();
  
  useEffect(()=>{
  const promise=dispatch(actGetCategories());
  return()=>{ dispatch(cleancategoreis())
    promise.abort()
  }
  
  },[dispatch])

  const categorieslist=record.length > 0 ? record.map((records)=>(

    <Col xs={6} md={3} key={records.id} className="d-flex justify-content-center mb-5 mt-2">
        <Category {...records}/>
        </Col>
 )):"there is no category";
  return (
    <Container>

<Loadingpage loading={loading} error={error} type="category" >

  
      <Row>

        {categorieslist}
        
        
      </Row>
</Loadingpage>






    </Container>
  )
}

export default Categories
