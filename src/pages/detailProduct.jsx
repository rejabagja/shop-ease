import { useParams } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import { useEffect, useState } from "react";
import getProduct from "../services/getProduct";
import DataError from "../components/DataError";


const DetailproductPage = () => {
  const {id} = useParams();
  // block code for get product by id in redux store
  // ----

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true)
    getProduct(id)
      .then(result => {
        (result !== "") ? setProduct(result) : setError("Product Not Found")
      })
      .catch(error => setError(error.message))
      .finally(() => setIsloading(false))
  }, []);

  return (
    <>
      <HeaderSection title="Detail Product:" />
      {(isLoading) && <h1 className="text-center mt-10 text-xl font-bold text-slate-600">Loading...</h1>}
      {(error) && <DataError message={error} />}
      {product && (
        <div className="flex flex-col lg:flex-row p-5 items-center lg:justify-center lg:gap-x-6 lg:mt-5">
          <div className="image max-w-64 sm:max-w-96 mb-2 relative">
            <button className="bg-blue-900 text-white px-3 py-1 absolute bottom-0 opacity-90 shadow-md shadow-black rounded font-bold cursor-default">{product.category}</button>
            <img src={product.image} alt="" className="max-h-96" />
          </div>
          <div className="body sm:max-w-2xl">
            <h2 className="text-2xl text-slate-900 font-bold my-3 tracking-tighter">{product.title}</h2>
            <p className="text-xl font-bold mb-2">$ {product.price}</p>
            <p className="text-medium font-medium mb-2">🌟 {product.rating.rate}/5.0 ({product.rating.count} reviews)</p>
            <p className="text-lg text-slate-800 bg-slate-50 text-justify mb-4">{product.description}</p>
            <div className="flex items-center gap-x-4">
              <button className="text-slate-900 font-medium border-2 border-blue-900 px-4 py-2 rounded cursor-default">Stock: 20 pcs</button>
              <button className="py-2 px-4 bg-green-700 text-white rounded hover:bg-green-800 font-medium">Add to cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DetailproductPage;