import axios from 'axios'

async function getProduct(id) {
  const {data} = await axios({
    url: "https://fakestoreapi.com/products/" + id,
    method: "GET"
  });
  // console.log(data);
  return data;
} 

export default getProduct;