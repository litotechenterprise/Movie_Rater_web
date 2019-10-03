import React, {Component,} from 'react';
var FontAwesome = require('react-fontawesome');


class MovieForm extends Component {
    
    state = {
        
    }

    cancelClicked = () => {
        this.props.cancelForm();
    }

    InputChanged = () => {
        console.log('changed');
    }

    render(){

        return (
            <React.Fragment>
                <span>Title</span><br/>
                <input type='text' value={this.props.movie.title} onChange={this.InputChanged}/><br/>
                <span>Description</span><br/>
                <textarea value={this.props.movie.description} onChange={this.InputChanged}/><br/>
                <button>Save</button>
                <button onClick={this.cancelClicked}>Cancel</button>
            </React.Fragment>
        )
    }
}

export default MovieForm;
