import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "../store/hooks";
import { actauth } from "../store/auth/authslice";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { signupschema,Tsignuptypes } from "../validations/signupvalidation";
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from "../components/common/form/input/input";
import usecheckedavabilityemail from "../hooks/usecheckedavabilityemail";
import { resete } from "../store/auth/authslice";
import { Navigate } from "react-router-dom";


const Regusiter = () => {

  const navigate=useNavigate()
  const dispatch=useAppDispatch();
  const{loading,error,accsessToken}=useAppSelector((state)=>state.Authslice)
  if(accsessToken){

    return <Navigate to="/"/>
  }
  useEffect(()=>{

   return ()=>{

    dispatch(resete())
    } ;
  },[dispatch])
  const {register,
    handleSubmit,
    formState:{errors},
    getFieldState,
    trigger,
  
  }=useForm<Tsignuptypes>({
    mode:"onBlur",
    resolver:zodResolver(signupschema)
})

const {checkingemail,
  EnterEmail,
  EmailCheckAvability,
  resetemailcheck}=usecheckedavabilityemail()

  // submit
  const submitform :SubmitHandler<Tsignuptypes>=async(data)=>{

    const {firstname,lastname,email,password}=data;

    dispatch(actauth({firstname,lastname,email,password})).unwrap().then(()=>{
      navigate("/login?message=account_created")
    })
    }

  const emailonblurhandler= async (e:React.FocusEvent<HTMLInputElement>)=>{
    await trigger("email")
    const value=e.target.value
    const {isDirty,invalid}=getFieldState("email")
    if(isDirty &&!invalid && value!==EnterEmail){

      checkingemail(value)
    }

    if(isDirty &&invalid && EnterEmail ){

      resetemailcheck()
    }
  }
  return (
  <Container>

    <Row>

      <Col md={{span:6,offset:3}}>
      
    <Form onSubmit={handleSubmit(submitform)}>
    <Input
    label="first name"
    register={register}
    name="firstname"
    error={errors.firstname?.message}
    type="text"
    />
    <Input
    label="last name"
    register={register}
    name="lastname"
    error={errors.lastname?.message}
    type="text"
    />
    <Input
    label="Email"
    register={register}
    name="email"
    error={errors.email?.message?
      errors.email?.message:EmailCheckAvability=="notavailable"?"This Email is already taken":""?
      errors.email?.message:EmailCheckAvability=="failed"?"Network error":""
    }
    type="text"
    onBlur={emailonblurhandler}
    formtext={EmailCheckAvability=="checking"?"We are Cheaking the Avability of this Email adress Pleease Wait..":""}
    success={EmailCheckAvability=="available"?"This Email Avalibe to Use":""}
    />
    <Input
    label="password"
    register={register}
    name="password"
    error={errors.password?.message}
    type="password"
    />
    <Input
    label="confirm password"
    register={register}
    name="confrimpassword"
    error={errors.password?.message}
    type="password"
    />
   
   
    <Button 
    variant="info"
     type="submit"

     disabled={EmailCheckAvability==="checking"?true:false
      ||loading==="pending"
     }
    
    >
      {loading==="pending" ?(
        <>
        <Spinner animation="border" size="sm"></Spinner>
          loading..
        
        </>
      ):("submit") }
    </Button>

    {error&&(<p style={{color:"DC3545",marginTop:"10px"}}>{error}</p>)}
  </Form>
      
      </Col>
    </Row>

  </Container>



  )
}

export default Regusiter
