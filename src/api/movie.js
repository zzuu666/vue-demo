import jsonp from 'jsonp'
import { DOUBAN_HOST } from './config'

let getInTheaterMovies = (cb) => {
  jsonp(`${DOUBAN_HOST}/v2/movie/in_theaters`, null, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      cb(data)
    }
  })
}

export default {
  getInTheaterMovies
}
