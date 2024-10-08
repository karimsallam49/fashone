import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Mainlayout from "../components/layout/mainlayouts/mainlayout";
import Loattehandler from "../components/feedback/lottiehandler/loattehandler";
const Home=lazy(()=> import ("../pages/Home"))
const Categories=lazy(()=> import ("../pages/Categories"))
const Aboutus=lazy(()=> import ("../pages/Aboutus"))
const Products=lazy(()=> import ("../pages/Products"))
const Cart=lazy(()=> import ("../pages/cart"))
const Login=lazy(()=> import ("../pages/Login"))
const Regusiter=lazy(()=> import ("../pages/Regusiter"))
const Profile=lazy(()=> import ("../pages/profile"))
import Protectedrouters from "../components/Auth/protectedrouters";
import Error from "../pages/error";


const router=createBrowserRouter([

    {
        path:"/",
        element:<Mainlayout/>,
        errorElement:<Error/>,
        
        children:[
    
            {
                index:true,
                element:(
                <Suspense fallback={<Loattehandler types="loading"/>}>
                    <Home/>
                </Suspense>
                )
            },
            {
                path:"categories",
                element:(

                    <Suspense fallback={<Loattehandler types="loading"/>}>
                       <Categories/>
                    </Suspense>

                    )
                
            },
            {
                path:"/cart",
                element:(


                    <Suspense fallback={<Loattehandler types="loading"/>}>
                       <Cart/>
                    </Suspense>

                    )

            },
            {
                path:"about-us",
                element:(



                    <Suspense fallback={<Loattehandler types="loading"/>}>
                       <Aboutus/>
                    </Suspense>
                    )
            },
            {
                path:"categories/products/:prefix",
                element: (



                    <Suspense fallback={<Loattehandler types="loading"/>}>
                       <Products/>
                    </Suspense>
                    ),
                loader :({params})=>{

                    if(typeof params.prefix !=="string"||
                    !/^[a-z]+$/i.test(params.prefix)){

                        throw new Response("bad request ",{
                            statusText :"category not found",
                            status: 400,
                        });
                    }
                    return true;

                },
            }, 
            {
                path:"login",
                element:(
                    
                    <Suspense fallback={<Loattehandler types="loading"/>}>
                      <Login/>
                    </Suspense>
                    )
            }, 
            {
                path:"regusiter",
                element:(
                    <Suspense fallback={<Loattehandler types="loading"/>}>
                       <Regusiter/>
                    </Suspense>
                    )
            }, 
            {
                path:"profile",
                element:(
                    <Protectedrouters>

                    <Suspense fallback={<Loattehandler types="loading"/>}>
                       <Profile/>
                    </Suspense>
                    </Protectedrouters>
                    )
            }, 
        ],
    },
])

const Approuter = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Approuter
