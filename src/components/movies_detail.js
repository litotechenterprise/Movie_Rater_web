import React, {Component,} from 'react';
var FontAwesome = require('react-fontawesome');


class MovieDetails extends Component {

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
                </div>
            ) : null }
            </React.Fragment>
        )
    }
}

export default MovieDetails;
