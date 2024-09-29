import axios from 'axios'

async function getProducts() {
  const {data} = await axios({
    url: "https://fakestoreapi.com/products/",
    method: "GET"
  });
  return data;
} 

export default getProducts;