import { useAppSelector } from "../../store/hooks"
import { Navigate } from "react-router-dom"
import React from "react"

const Protectedrouters = ({children}:{children:React.ReactNode}) => {

    const{accsessToken}=useAppSelector((state)=>state.Authslice)

    if(accsessToken){


        return (
          <div>
            {children}
          </div>
        )
    }else{

        return <Navigate to="/"/>
    }


}

export default Protectedrouters
