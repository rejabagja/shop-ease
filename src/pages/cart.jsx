import HeaderSection from "../components/HeaderSection";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { checkoutCart } from "../store/feature/authSlice";
import { decrementStock } from "../store/feature/productSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart } = useSelector((state) => state.auth);
  const { isLoading, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = () => {
    const total = cart.reduce((acc, current) => {
      const product = products.find(p => p.id === current.id);
      const subTotal = product.price * current.qty;
      return acc + subTotal
    },0)
    return total.toFixed(2);
  }

  const handleCheckout = () => {
    const confirmation = confirm("Are you sure want to checkout?");
    if (confirmation) {
      dispatch(checkoutCart())
      dispatch(decrementStock(cart))
      alert("Checkout successfull")
      navigate("/")
    }
  }

  return (
    <>
      <HeaderSection>My Cart:</HeaderSection>
      <section className="px-5">
        {isLoading && 
          <h1 className="text-center mt-10 text-xl font-bold text-slate-600">
            Loading...
          </h1>
        }
        {cart.length === 0 && (
          <h1 className="text-center mt-10 text-red-600 font-medium">
            *You dont have cart
          </h1>
        )}
        {cart.length > 0 && products.length > 0 && 
          <>
            <div className="mb-4 pb-2 border-blue-950">
              <span className="text-xl font-bold text-slate-900 mr-3">Total Price:</span>
              <span className="text-xl font-bold text-slate-900 my-2">{"$ "}{totalPrice()}</span>
              <button className="px-4 py-2 bg-green-600 text-white font-medium rounded shadow block mt-3 shadow-green-700" onClick={() => handleCheckout()}>Checkout now</button>
            </div>
            <div className="overflow-auto flex flex-wrap gap-4 justify-center md:justify-start">
              {
                cart.map((item, i) => {
                  const product = products.find(p => p.id === item.id);
                  return (
                    <CartItem key={`cart-${i}`} product={product} cart={item} />
                  )
                })
              }
            </div>
          </>
        }
      </section>
    </>
  );
};

export default CartPage;
