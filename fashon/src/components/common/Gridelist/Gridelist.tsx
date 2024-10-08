// import { Row,Col } from "react-bootstrap";

// type Gridelistprops={

//   records:{id:number; title:string; img:string; prefix:string}[];
//   renderitem:(  records:{id:number; title:string; img:string; prefix:string}[]
//   )=>React.ReactNode
// }
// const Gridelist = ({records,renderitem}:Gridelistprops) => {
//   const categorieslist=records.length > 0 ? records.map((record)=>(

//     <Col xs={6} md={3} key={record.id} className="d-flex justify-content-center mb-5 mt-2">
//         {renderitem(record)}
//         </Col>
//  )):"there is no category";
//   return (
    
//     <Row>
//       {categorieslist}
//     </Row>
//   )
// }

// export default Gridelist
