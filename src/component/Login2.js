import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login2(){
    const [namee, setNamee] = useState()

    const navigate = useNavigate()
    function handleForm(event){
        event.preventDefault()
       
        const name = event.target.elements.name.value
        const password = event.target.elements.password.value

         setNamee(event.target.name.value)

        if (!name || !password){
            alert("fill all fields")
            return;
        }
        
        else {

            
    
              const resp = {
                username: name,
                password: password,
              }

              var jstring = JSON.stringify(resp)
            const header = 'application/json'
            axios.post('https://dummyjson.com/auth/login',jstring, {header})

            .then(response=>{
                console.log('response', response.data)
                navigate(`/Page/${name}`)
                
            })

            .catch(error=>{
                console.log('error', error)
                navigate(`/Page/${name}`)
                
            })

            
        }
    }


    return(
        <>
        <form onSubmit={handleForm}>
            <h1>{namee}</h1>
            <input type='text' name="name" placeholder="Name"/>
            <input type='password' name="password" placeholder="Password"/>
             <button  type="submit">Login</button>
        </form>
        </>
    )
}

export default Login2