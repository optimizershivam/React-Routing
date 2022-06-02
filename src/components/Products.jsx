import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Products = () => {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
          let r = await fetch("http://localhost:8080/products")
          let d = await r.json();
          setProducts(d)
        };
        fetchProducts()

    },[])






  return (
    <div>
     Products:{" "}
     <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
         <div >
           <table>
             <thead>
               <tr>
                 <th>
                   Product name
                 </th>
                 <th>
                   Price ®
                 </th>
                 <th>
                   More detail
                 </th>
               </tr>
             </thead>
             <tbody>
             {products.map((p)=>(
             <tr key={p.id}>
              
               <td>{p.name}</td>
               <td>{p.price}</td>
               <td><Link to={`/products/${p.id}`}>More Details</Link></td>

             </tr>

          
        
             
             
             
         ))}
            </tbody>
           </table>
        </div>
        <div >
        <Outlet></Outlet>
        </div>
    
     </div>


    </div>
  )
}

export default Products