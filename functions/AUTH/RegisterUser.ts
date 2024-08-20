import { APIURL, InputValues } from '@/utils/SignupInterface'
import axios from 'axios'
import toast from 'react-hot-toast'

export const RegisterUser = async (inputValues: InputValues) => {
  const { email, password, Name, Image } = inputValues

  try {
    // // Append the image file if provided
    // if (Image) {
    //   formData.append('image', Image)
    // }

    // Send the POST request with FormData
    const response = await axios.post(`${APIURL}/api/Auth/Register`, {
      email,
      password,
      Name,
    })

    if (response.status === 201) {
      return response.data
    } else if (
      response.status === 400 &&
      response.data.message === 'Email already in use'
    ) {
      toast.error(
        'This email is already registered. Please use a different email.'
      )
    } else if (response.status === 500) {
      alert('Internal server error. Please try again later.')
    }
  } catch (error) {
    console.error('ERROR IN FUNCTION : ', error)
    toast.error('An error occurred. Please try again.')
  }
}
