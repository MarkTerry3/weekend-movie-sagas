import {useSelector} from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';



function MovieDetails () {

    useEffect(() => {
    }, []);

//access reducer for the specific movie
    const movie = useSelector(store => store.movieDetail)
    const history = useHistory();


    const goBack = () => {
        history.push('/');
    }



    return(
        <>
            <img src={movie.poster} />
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            <button onClick={goBack}>Go Back</button>
        </>
    )
}


export default MovieDetails;