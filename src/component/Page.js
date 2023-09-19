
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card'
import Navb from './Navbar';

//import { useNavigate } from "react-router-dom";
import { Link, Navigate, useParams } from 'react-router-dom'


function Page() {

  const{name} = useParams()

  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [selectOption, setSelectOption] = useState(0)
  const [secondSelectOption, setSecondSelectOption] = useState()
  

//this set the  selectOption to the dropdown value
  const handleDropDown=(event)=>{
    setSelectOption(event.target.value)
  }
  
  const handleSecondDropDown=(event)=>{
    setSecondSelectOption(event.target.value)
  }
//useEffect is necessary to call Api
  useEffect(() => {
    setLoading(true)
    const headers = {
      'Content-Type': 'application/json',
    };

//Axios call the APi
    axios.get('https://dummyjson.com/products', { headers })
      .then(response => {
        setData(response.data.products)
        setLoading(false)

       
      })
      .catch(error => {
        console.error('Request failed:', error);
        setLoading(false) 
      });

  }, [])
   //filtering the data as it is fetched from API
  //Filtering the data on the basis of price {selectOption} 
   const filteByPrice = selectOption ? data.filter((product) => product.discountPercentage <= selectOption) : data

   const filteByCategory = secondSelectOption ? data.filter((product) => product.category <= secondSelectOption) : data

  const filteByboth = data ? data.filter((product) => product.discountPercentage <= selectOption && product.category === secondSelectOption ) : data;


let result;

if (selectOption && !secondSelectOption) {
  // Only selectOption is true (&& !secondSelectOption)
  result = filteByPrice;
} else if ( secondSelectOption && !selectOption) {
  // Only secondSelectOption is true ()
  result = filteByCategory;
} else if (selectOption && secondSelectOption) {
  // Both selectOption and secondSelectOption are true
  result = filteByboth
} else {
  // None of the conditions are true
  result = data;
}

const affordableProduct = result;


  console.log('data----', data)
  return (

<div>
    <Navb/>
    {/* <h1>Welcome {name}!!!</h1> */}
    
  <h1 className="text-center display-4 text-dark">Welcome {name}!!!</h1>


    <div className="container mt-4">
        <div className="row justify-content-center g-0">
            <div className="col-4">
                <select id="dropdown" className="form-select" value={selectOption} onChange={handleDropDown}>
                    <option value="">Select The price limit</option>
                    <option value={6}> price limit Rs:6</option>
                    <option value={12}> price limit Rs:12</option>
                    <option value={18}> price limit Rs:18</option>
                </select>
            </div>
            <div className="col-4">
                <select id="secondDropdown" className="form-select" value={secondSelectOption} onChange={handleSecondDropDown}>
                    <option value="">Select category</option>
                    <option value="samrtphones">samrtphones</option>
                    <option value="laptops">laptops</option>
                    <option value="fragrances">fragrances</option>
                    <option value="skincare">skincare</option>
                    <option value="groceries">groceries</option>
                </select>
            </div>
        </div>
    </div>





   
    
      {loading ? 'loading....' :
        <div >
          <div >

            <div className='Card_p'>
              {// affordableProduct is the filtered data... befor this here was just {data}
              //.map is used when you want to perform aech value of array
              affordableProduct?.map((event) => {
                  console.log('pro', event)
                  return (
                    <>
                       
                       
                     
                      <div>
                        {/* link send the {id} of the product in URL 
                        we transfered this link to card componenet, wraping only */}
                    
                          
                        <Card 
                          brand={event.brand}
                          title={event.title}
                          id={event.id}
                          category={event.category}
                          description={event.description}
                          discountPercentage={event.discountPercentage}
                          thumbnail={event.thumbnail} 
                          rating={event.rating}/>
                          
                         
                          
                      </div>
                    </>
                  )
                })}
            </div>

          </div>
        </div>
      }


    </div>
  )
}

export default Page


