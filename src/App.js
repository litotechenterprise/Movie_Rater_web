import React, {Component} from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movies_detail';
import MovieForm from './components/movie-form';

class App extends Component {

  state = {
    movies: [],
    selectedMovie: null,
    editedMovie: null,
  }

  loadClicked = movie => {
    this.setState({selectedMovie: movie, editedMovie: null})
  }

  movieDeleted = Selmovie => {
    const movies = this.state.movies.filter( movie => movie.id !== Selmovie.id);
    this.setState({movies: movies, selectedMovie: null})
  }

  editClicked = Selmovie => {
   this.setState({editedMovie: Selmovie});
  }

  newMovie = () => {
    this.setState({editedMovie: {title: '', description: ''}});
   }

   cancelForm = () => {
    this.setState({editedMovie: null});
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
                <MovieList movies={this.state.movies} movieClicked={this.loadClicked}
                  movieDeleted={this.movieDeleted} editClicked={this.editClicked} newMovie={this.newMovie}/>

                <div>
                  { !this.state.editedMovie ? 
                    <MovieDetails movie={this.state.selectedMovie} updateMovie={this.loadClicked}/>
                   :  <MovieForm movie={this.state.editedMovie} cancelForm={this.cancelForm}/>}
                </div>

              </div>
        </div>
      );
    }

}

export default App;
