import React, {Component,} from 'react';
var FontAwesome = require('react-fontawesome');


class MovieDetails extends Component {
    
    state = {
        highlighted: -1
    }

    highlightRate = high => evt => {
        this.setState({highlighted: high});
    }

    rateClick = stars => evt => {
          // send Data 
          // below is a back-tick not a single quote
        fetch(`${process.env.REACT_APP_API_URL}/api/movies/${this.props.movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Token fb0501ed838183ca5a33cc7947d980e3359d1747'
            },
            body: JSON.stringify({stars: stars + 1})
            }).then( resp => resp.json())
            .then( res => this.getDetails())
            .catch( err => console.log(err))
    }

    // refreshing the data
    getDetails = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/movies/${this.props.movie.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Token fb0501ed838183ca5a33cc7947d980e3359d1747'
            }
            }).then( resp => resp.json())
            .then( res => this.props.updateMovie(res))
            .catch( err => console.log(err))
    }

    render(){
        const mov = this.props.movie;

        return (
            <React.Fragment>
            {  mov ? (
                <div>
                    <h3>{mov.title}</h3>
                    <FontAwesome name='star' className={mov.avg_ratings > 0 ? 'orange': ''}/>
                    <FontAwesome name='star' className={mov.avg_ratings > 1 ? 'orange': ''}/>
                    <FontAwesome name='star' className={mov.avg_ratings > 2 ? 'orange': ''}/>
                    <FontAwesome name='star' className={mov.avg_ratings > 3 ? 'orange': ''}/>
                    <FontAwesome name='star' className={mov.avg_ratings > 4 ? 'orange': ''}/>
                    ({mov.no_of_ratings})
                    <p>{mov.description}</p>

                    <div className="rate-container">
                            <h2>Rate it!!</h2>
                            { [...Array(5)].map((e,i) => {
                                return <FontAwesome key={i}name='star' className={this.state.highlighted > i - 1 ? 'purple': ''}
                                    onMouseEnter={this.highlightRate(i)} onMouseLeave={this.highlightRate(-1)}
                                    onClick={this.rateClick(i)}/>;
                            })}
                    </div>

                </div>
            ) : null }
            </React.Fragment>
        )
    }
}

export default MovieDetails;
