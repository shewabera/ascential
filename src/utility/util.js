import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
export const Util = {
  endPoints: {
    good: 'https://athena-7.herokuapp.com/ancients.json',
    search: 'https://athena-7.herokuapp.com/ancients.json?search=Ath',
    error: 'https://athena-7.herokuapp.com/ancients.json?error=true'
  },

  axiosGet: url => {
    return axios.get(url)
  },

  axiosGetWithCache: url => {
    const cache = setupCache({
      maxAge: 15 * 60 * 1000
    })

    // Create `axios` instance passing the newly created `cache.adapter`
    const api = axios.create({
      adapter: cache.adapter
    })

    // Send a GET request to some REST api
    return api({
      url,
      method: 'get'
    })
  },

  convertToUpperCase: obj => {
    for (var key in obj) {
      if (obj[key] !== null && typeof obj[key] === 'object') {
        this.convertToUpperCase(obj[key])
      } else if (obj[key] !== null && typeof obj[key] === 'string') {
        obj[key] = obj[key].toUpperCase()
      }
    }

    return obj
  }
}
