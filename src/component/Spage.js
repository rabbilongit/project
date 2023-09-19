

import axios from "axios"
import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {  useParams } from 'react-router-dom'
import Navb from "./Navbar"


function Spage(){
    const [values , setValues] = useState()
    const [image , setImage] = useState()
    const [loading , setLoading] = useState(true)

//UseParams is used to Fetch the {id} which was passed by <link/> 
   const{id} =useParams()

//useEffect is used to fetch the API
   useEffect(()=>{
    setLoading(true)
    
//here we place the {id} we fetched from the URL
   axios.get(`https://dummyjson.com/products/${id}`)
    
   .then((response)=>{
    console.log(response.data)
    setValues(response.data)
    setImage(response.data.images)
    setLoading(false)
   })

   .catch((error)=>{
    setLoading(false)
    console.log('error',error)
   })

},[])

   return(
    <div>
          <Navb/> 
     {loading ? 'loading....'
     :    
       
     <div className="container my-5">
    <div className="row">
    
        <div className="col-md-6">
        <img src={values.thumbnail} className="img-fluid" alt="Product Image"/>  
        </div>
        
        <div className="col-md-6">
            <h1>{values.brand}</h1>
           <p className="text-muted">{values.category}</p>
            <p className="text-success">Price: ${values.discountPercentage}</p>
            <p>Description:{values.description}</p> 
            {
                image?.map((el)=>{
                    return(
                       <img src={el} width="50px" />
                    )
                })
            }
        </div>
    </div>
   </div>
}

</div>
   

   
   )
}

export default Spage