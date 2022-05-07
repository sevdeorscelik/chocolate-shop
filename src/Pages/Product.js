import { React } from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'



function Product() {

  //http://localhost:3005/products

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios('http://localhost:3005/products')
      .then(resp => setProducts(resp.data))
      .catch(err => console.log(err))
  }, [])

 


  return (
    <div className='Products'>
      <div className="card-group">
        
        {
          products.map(product => {
            return (
              <div className="card" >
                <img src={products.url} className="card-img-top" alt="chocolate" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text"><small className="text-muted">{product.preis}</small></p>
                </div>
              </div>

            )
          })

        }
      </div>
    </div>
  )
}



export default Product
