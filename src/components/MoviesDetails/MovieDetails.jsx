import {useSelector} from 'react-redux'; 
import { useHistory } from 'react-router-dom';




function MovieDetails () {

    const movie = useSelector(store => store.movieDetail)
    // history = useHistory();


    const goBack = () => {
        // history.push('/');
    }

//access reducer for the specific movie

    return(
        <>
            <p>{movie}</p>
            <button onClick={goBack}>Go Back</button>
        </>
    )
}


export default MovieDetails;