import { useState, useEffect } from "react";
import Products from "../components/Products"
import HeaderSection from "../components/HeaderSection";
import DataError from "../components/DataError";
import getProducts from "../services/getProducts";


const HomePage = () => {
  // block code for get Products and Products Category state from redux store
  // ...
  // 
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  
  useEffect(() => {
    setIsloading(true);
    getProducts()
      .then(result => setProducts(result))
      .catch(error => setError(error.message))
      .finally(() => setIsloading(false))
  }, [])

  return (
    <>
      <HeaderSection title="Products:" />
      {(isLoading) && <h1 className="text-center mt-10 text-xl font-bold text-slate-600">Loading...</h1>}
      {(error) && <DataError message={error} />}
      {products && 
        <Products products={products} />
      }
    </>
  )
}

export default HomePage;