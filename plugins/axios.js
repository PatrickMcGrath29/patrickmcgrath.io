import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'

export default applyCaseMiddleware(
  axios.create({
    baseURL: process.env.baseUrl
  })
)
