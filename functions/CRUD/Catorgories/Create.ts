import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const CreateCatorgorie = async (
  CategoryName: string,
  UserEmail: string
) => {
  try {
    // Make the API request
    const response = await axios.post(`${APIURL}/api/category`, {
      CategoryName,
      UserEmail,
    })

    if (response.status === 200) {
      console.log('API RESPONSED', response.data)
      return true
    }
  } catch (error) {
    // Handle errors
    console.error('Failed to create product:', error)
  }
}
