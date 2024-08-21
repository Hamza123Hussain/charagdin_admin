import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const CreateProduct = async (
  ProductName: string,
  ImageUrl: string,
  UserEmail: string,
  Category: string
) => {
  try {
    // Make the API request
    const response = await axios.post(`${APIURL}/api/Product/Create`, {
      ProductName,
      ImageUrl,
      UserEmail,
      Category,
    })

    if (response.status === 200) {
      console.log('API RESPONSED', response.data)
      return true
    }
  } catch (error) {
    // Handle errors
    console.error('Failed to create product:', error)

    // Depending on the error structure, you might want to throw an error or return an error message
    throw new Error('Failed to create product. Please try again.')
  }
}
