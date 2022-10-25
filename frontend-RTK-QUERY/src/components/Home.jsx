import React from 'react'
import { useGetAllProductsQuery } from '../Redux/Features/ProductsAPI'

const Home = () => {
  const {data, error, isLoading} = useGetAllProductsQuery();
  return (
    <div>
      {isLoading ? (<p>Loading...</p>) : error ? (<p>An error occured.</p>) :
      (
        <>
          <div className='myHeading bg-light mt-2 mb-4'><h2>Hew Arrivals</h2></div>
          <div className="products">
            {
            data?.map(products => <div key={products.id} className="product"> 
              <img src={products.image} alt={products.name} />
              <div className="details">
                <p>{products.description}</p>
                <p className="price">Price: ${products.price}.00</p>
              </div>
              <button>Add to Cart</button>
            </div>)
            }
          </div>
        </>
      )}
    </div>
  )
}

export default Home
