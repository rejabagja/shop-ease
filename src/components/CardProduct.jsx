const Header = ({image, title}) => {
  return (
    <div className="mb-2">
      <img src={image} alt={title} className="h-56 w-full object-cover rounded-t-md border-b"/>
    </div>
  )
}

const Body = (props) => {
  const {title, category, price, description} = props;
  const categoriesMap = {
    "electronics": "bg-yellow-600",
    "jewelery": "bg-stone-600",
    "men's clothing": "bg-blue-900",
    "women's clothing": "bg-rose-600",
  }
  return (
    <div className="px-3 mb-2">
      <h2 className="text-xl mb-1 font-bold text-slate-900 tracking-tighter">
        {title.substring(0,25)}...
      </h2>
      <button className={`px-2 py-1 ${categoriesMap[category]} text-white rounded mb-1 text-sm`}>
        {category}
      </button>
      <p className="mb-1">
        {description.substring(0,100)}...
      </p>
      <p className="text-xl font-bold">
        ${" "}{price}
      </p>
    </div>
  )
}

const CardProduct = ({product}) => {
  return (
    <div className="card w-full max-w-xs rounded-lg bg-stone-100 border shadow-md">
      <Header image={product.image} title={product.title} />
      <Body 
        title={product.title}
        category={product.category}
        description={product.description}
        price={product.price}
      />
      <div className="footer flex gap-x-3 px-3 mb-3">
        <button className="py-2 px-4 bg-blue-800 text-white rounded">Details</button>
        <button className="py-2 px-4 bg-green-700 text-white rounded">Add to cart</button>
      </div>
    </div>
  )
}

export default CardProduct;