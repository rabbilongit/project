import React, { useEffect } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { removeitems } from '../redux/slice/cartSlice'
import { Link } from "react-router-dom";
import axios from "axios";
import LiveSearchBar from "./searchBar";

function Navb() {
  const dispatch = useDispatch()

  const item = useSelector(state => state)
  //
  const total = item.cart.reduce((a, b)=> a + b.price, 0)
  console.log('items', item)



useEffect(()=>{
  axios.get('https://dummyjson.com/products/search?q=phone')

  .then((response)=>{
    console.log(response.data)
  })

  .catch((error)=>{
    console.log('error', error)
  })





})
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >AppSquadz</Navbar.Brand>
        <div className="d-flex align-items-center mx-auto">
          <Form inline className="mr-sm-2">
            <LiveSearchBar/>
          </Form>
          
        </div>
        
        <Link  to={`/Cart`}>
        <h4 style={{ color: "white"  }}>Total items:{item.cart.length} (Rs.{total}) </h4>
        </Link>
        {/* <h1 className="btn btn-secondary rounded-circle text-light fw-bold" onClick={()=>{dispatch(removeitems())}}>-</h1> */}
      </Container>
    </Navbar>
  );
}
export default Navb;