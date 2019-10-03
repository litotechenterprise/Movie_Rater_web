import React, {Component} from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movies_detail';

class App extends Component {

  state = {
    movies: [],
    selectedMovie: null,
  }

  movieClicked = movie => {
    this.setState({selectedMovie: movie})
  }

  movieClicked = movie => {
    this.setState({selectedMovie: movie})
  }

  componentDidMount(){
    // fetch Data
    fetch('http://127.0.0.1:8000/api/movies/', {
        method: 'GET',
        headers: {
            'Authorization' : 'Token 9e8d4b841b37e7da7a648d8d380d7ae9a09931f6'
        }
    }).then( resp => resp.json())
    .then( res => this.setState({movies: res}))
    .catch( err => console.log(err))
  }



  render(){
      return (
        <div className="App">
              <h1>Movie Rater</h1>
              <div className="layout">
                <MovieList movies={this.state.movies} movieClicked={this.movieClicked} />
                <MovieDetails movie={this.state.selectedMovie} updateMovie={this.movieClicked}/>
              </div>
        </div>
      );
    }

}

export default App;
