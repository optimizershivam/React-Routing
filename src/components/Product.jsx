import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Product = () => {
    const [product,setProduct]= useState({})
    const {id} = useParams()
    useEffect (()=>{
        fetch(`http://localhost:8080/products/${id}`)
        .then((r)=>r.json())
        .then((d)=>setProduct(d))

    },[id])
  return (
    <div>Product ID:{id}
    
    <div>{product.name==null ? <h1>Product is Not Available</h1> : <div><h1>{product.name}</h1> <h1>{product.price}</h1> </div> }</div>
    
    </div>
    
  )
}

export default Product