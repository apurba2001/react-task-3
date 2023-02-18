import './App.css';

const MovieCard = ({ data }) => {
    console.log(data)
    return (
        <div className='movie-card'>
            <img src={data.Poster} alt='Movie' />
            <div className='movie-details'>
                <h4>{data.Title}</h4>
                <p>{data.Type}</p>
                <p>{data.Year}</p>
            </div>
        </div>
    )
}

export default MovieCard