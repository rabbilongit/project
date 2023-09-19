import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { removeitems } from '../redux/slice/cartSlice'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navb from "./Navbar";

function Cart(){
    const dispatch = useDispatch()
    const item = useSelector(state => state) 
    return(
     
        <div>
           <Navb/>
        {
            item.cart.map((pro)=>{
                return(
                    <div>
                      
                    {/* <div className="col-md-4 mb-4" >
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <img src={pro.photo} width="50px" alt={pro.name} />
              <div className="ml-3">
                <h5 className="card-title">{pro.name}</h5>
                <p className="card-text">Price: ${pro.price}</p>
                <h1 className="btn btn-secondary rounded-circle text-light fw-bold" onClick={()=>{dispatch(removeitems())}}>-</h1>

              </div>
            </div>
          </div>
        </div> */}
        <Container>
      <Row>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top"  src={pro.photo}  alt="Product" style={{width: '150px'}}/>
            <Card.Body>
              <Card.Title>{pro.name}</Card.Title>
              <Card.Text>Price: ${pro.price}</Card.Text>
              <h1 className="btn btn-secondary rounded-circle text-light fw-bold" onClick={()=>{dispatch(removeitems({id:pro.id }))}}>REMOVE</h1>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
                    </div>
                )
            })
        }
    {/* //     {item.cart.map(pro)=>{
    //         return(
    //             <h1>{pro.name}</h1>
    //         )}} */}
    </div>
   )
    
}

export default Cart