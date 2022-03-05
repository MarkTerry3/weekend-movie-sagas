import {useSelector} from 'react-redux'; 





function MovieDetails () {

    const movie = useSelector(store => store.movieDetail)

//access reducer for the specific movie

    return(
        <>
            <p>{movie}</p>
        </>
    )
}


export default MovieDetails;