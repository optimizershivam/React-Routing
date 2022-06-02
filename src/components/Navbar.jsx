import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const handleOnClick = (id) => 
    {
     
      navigate(`/products/${id}`)

    }
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/products">Product</Link>
      <button onClick={()=> handleOnClick(1)}>Go To Product 1</button>
      <button onClick={()=> handleOnClick(2)}>Go To Product 2</button>
      <button onClick={()=> handleOnClick(3)}>Go To Product 3</button>
      <button onClick={()=> handleOnClick(4)}>Go To Product 4</button>

    </div>
  )
}

export default Navbar