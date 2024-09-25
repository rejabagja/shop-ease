const Products = ({children}) => {
  return (
    <div className="p-5 flex gap-6 flex-wrap justify-center">
      {children}
    </div>
  )
}

export default Products;