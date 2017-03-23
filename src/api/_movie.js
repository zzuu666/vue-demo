import mock from '../mock'

let getInTheaterMovies = (cb) => {
  let data = mock.movies
  setTimeout(() => {
    cb(data)
  }, 1000)
}

let getMovieDetail = (id, cb) => {
  let data = mock.details
  setTimeout(() => {
    cb(data)
  }, 1000)
}

export default {
  getInTheaterMovies,
  getMovieDetail
}
