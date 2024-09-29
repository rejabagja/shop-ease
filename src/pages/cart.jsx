import HeaderSection from "../components/HeaderSection";

const CartPage = () => {
  // block code for get cart data from redux store
  // ----

  const cart = null;

  return (
    <>
      <HeaderSection title="My Cart:" />
      {!cart && <h1 className="text-center mt-10 text-red-600 font-medium">You dont have cart</h1>}
      {/* passing data carts to cartTable component */}
    </>
  )
}

export default CartPage;