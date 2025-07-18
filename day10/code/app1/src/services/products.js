import axios from 'axios'
import { config } from '../config/config'

export async function getProducts() {
  try {
    // construct the required url
    const url = `${config.serverUr}/products`

    // send a GET request and get response
    const response = await axios.get(url)

    // check if the response type is success (OK)
    if (response.status == 200) {
      // get the response body (JSON)
      return response.data
    }
  } catch (ex) {
    console.log('exception: ', ex)
  }
}

export async function getProductDetails(id) {
  try {
    // construct the required url
    const url = `${config.serverUr}/products/${id}`

    // send a GET request and get response
    const response = await axios.get(url)

    // check if the response type is success (OK)
    if (response.status == 200) {
      // get the response body (JSON)
      return response.data
    }
  } catch (ex) {
    console.log('exception: ', ex)
  }
}
