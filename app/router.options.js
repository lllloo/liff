import qs from 'qs'

export default {
  // parseQuery: (query) => {
  //   return qs.parse(query) 
  // },
  stringifyQuery: (query) => {
    return qs.stringify(query)
  },
}