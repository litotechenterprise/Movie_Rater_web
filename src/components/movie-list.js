import React from 'react';
var FontAwesome = require('react-fontawesome');

function MovieList(props){
    
    const movieClicked = movie => evt => {
        props.movieClicked(movie);
    };

    const editClicked = movie => {
        props.editClicked(movie)
    }

    const removedClicked = movie => {
        fetch(`${process.env.REACT_APP_API_URL}/api/movies/${movie.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Token fb0501ed838183ca5a33cc7947d980e3359d1747'
            }
            }).then( resp => props.movieDeleted(movie))
            .catch( err => console.log(err))
    };

    const newMovie = () => {
        props.newMovie();
    }

    return (
        <div>
            { props.movies.map( movie => {
                return (
                    <div key={movie.id} className='movie-item'>
                        <h2 onClick={movieClicked(movie)}>
                            {movie.title}
                        </h2>

                        <FontAwesome name='edit' onClick={() => editClicked(movie)}/>
                        <FontAwesome name='trash' onClick={() => removedClicked(movie)}/>
                    </div>
                )
            })}
            <button onClick={newMovie}>Add New</button>
        </div>
    )
}

export default MovieList;