import React from 'react'
import "../css/Page.css"
import { useDispatch } from 'react-redux'
import { additems } from '../redux/slice/cartSlice'
import { Link } from 'react-router-dom';

function Card(props){
 const dispatch = useDispatch()

    
     return(

<div className="Card">
  <Link to={`/Spage/${props.id}`} className="text-decoration-none">
    <img
      src={props.thumbnail}
      alt={props.brand}
      className="card-img-top"
      style={{ height: '200px', objectFit: 'cover' }}
    />
  </Link>
  <div className="card-body">
    <div className="row">
      <div className="col-lg-6">
        <h5 className="card-title">{props.brand}: {props.title}</h5>
        <p className="card-text">{props.category}</p>
        <h5 className="card-text text-success"> ${props.discountPercentage}</h5>
      </div>
      <div className="col-lg-6 text-end">
        <p className="card-text text-dark" style={{ height: '100px', overflow: 'hidden' }}>
          {props.description}
        </p>
        <h5 className="card-text">⭐{props.rating}</h5>
      </div>
    </div>
    <button onClick={()=> dispatch(additems({name: props.brand, price:props.discountPercentage, photo:props.thumbnail, id:props.id }))} className="btn btn-primary">Add to Cart</button>
  </div>
</div>

        
    )
}
export default Card