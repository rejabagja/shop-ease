import CardProduct from "./CardProduct";

const Products = ({products}) => {
  return (
    <div className="p-5 flex gap-6 flex-wrap justify-center">
      {products.map(product => {
        return (
          <CardProduct 
            key={product.id} 
            product={product} 
          />
        )
      })}
    </div>
  )
}

export default Products;