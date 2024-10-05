import HeaderSection from "../components/HeaderSection";
import { useSelector } from "react-redux";

const CartPage = () => {
  const {cart} = useSelector(state => state.auth);
  return (
    <>
      <HeaderSection>My Cart:</HeaderSection>
      {cart.length === 0 && <h1 className="text-center mt-10 text-red-600 font-medium">You dont have cart</h1>}
      <div className="p-5 overflow-auto mt-2">
        {JSON.stringify(cart)}
      </div>
    </>
  )
}

export default CartPage;