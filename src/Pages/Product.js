import { React } from 'react'


function Product(props) {

  //http://localhost:3005/products

  //const [products, setProducts] = useState(data)

  console.log(props.products);

  return (
    <div className='Products'>
      <div className="menu-top d-flex flex-column justify-content-center align-items-center font-monospace">
      <h2 className="fw-bold mt-5 ">Our Products</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mb-5 mt-2">

          {
            props.products.map(product => {
              return (
                <div className=" col" >

                  <div className="card">
                    <img src={product.url} className="card-img-top" alt="chocolate" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-decoration-underline ">{product.title}</h5>
                    <p className="card-text"><small className="text-muted">{product.preis}</small></p>
                  </div>

                </div>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}



export default Product
