import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CardProduct from "../components/CardProduct";
import Products from "../components/Products"



const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const results = await response.json();
        setProducts(results)
      } catch (error) {
        console.log(error);
      }
    }
    getProducts()
  }, [])

  return (
    <>
      <main className="bg-stone-50 min-h-screen">
        <Navbar> 
          <Navbar.Brand name="ShopeEase" />
          <Navbar.Links>
            <Navbar.Links.Item target="/home" name="Home" />
            {(isLogin) && <Navbar.Links.Item target="/cart" name="Cart" />}
            {(isLogin) && <Navbar.Links.Item target="/login" name="Logout" />}
            {!isLogin && <Navbar.Links.Item target="/login" name="Login" />}
          </Navbar.Links>
        </Navbar>
        <div className="container mx-auto">
          <h1 
            className="text-2xl font-bold pl-5 sm:pl-0 mt-5 border-b-2 pb-3 text-blue-950"
          >
            Products:
          </h1>
          <Products>
            {
              products.map(product => (
                <CardProduct key={product.id} product={product} />
              ))
            }
          </Products>

        </div>
      </main>
    </>
  )
}

export default HomePage;