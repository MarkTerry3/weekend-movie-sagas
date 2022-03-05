import {useSelector} from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';



function MovieDetails () {

    useEffect(() => {
    }, []);

//access reducer for the specific movie
    const movie = useSelector(store => store.movieDetail)
    const genre = useSelector(store => store.genres)
    const history = useHistory();


    const goBack = () => {
        console.log(genre);
        history.push('/');
    }



    return(
        <>
            <img src={movie.poster} />
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            {genre.map(g => (
                        <p key={g.name}>{g.name}</p>
                ))}
            <button onClick={goBack}>Go Back</button>
        </>
    );
}


export default MovieDetails;