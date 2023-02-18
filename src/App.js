import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import './App.css';
import MovieCard from './Card'
import Loder from './Loder';

function App() {

  const [movies, setMovies] = useState([])
  const movie = useRef()
  const [loding, setLoding] = useState(true)

  const handleSerach = async (e) => {
    e.preventDefault()
    setLoding(true)
    const moviesData = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=975ae092&s=${ movie.current.value }`)
    setMovies(moviesData?.data?.Search)
  }
  useEffect(()=>{
    setLoding(false)
  }, [movies])

  return (
    <div className="App">
      <form onSubmit={(e) => handleSerach(e)}>
        <input ref={movie} />
        <button type='submit'>Search</button>
      </form>
      <div className='movie-container'>
        {
          loding ? <Loder /> : movies?.map(data => <MovieCard data={ data } key={data.imdbID} />)
        }
      </div>
    </div>
  );
}

export default App;
