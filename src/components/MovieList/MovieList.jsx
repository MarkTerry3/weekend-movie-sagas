import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    // const movieDetails = () => {
    //     console.log('clicked a movie', movie.id);
    // }


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                        const movieDetails = () => {
                            console.log('clicked a movie', movie.id);
                            dispatch({type: 'MOVIE_DESCRIPTION', payload: movie.id})
                            history.push('/details');

                        }
                    return (
                        <div key={movie.id} onClick={movieDetails}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;