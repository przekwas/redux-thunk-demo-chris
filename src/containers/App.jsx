import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {

    render() {
        return (
            <div>
                <button onClick={() => this.props.addChirp('Fuck me')}>Wtf</button>
                {this.props.chirps.map(chirp => (<h1>Test? {chirp}</h1>))}
                <p>{this.props.pizza}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { chirps: state.chirps.list, pizza: state.chirps.derp };
}

export default connect(mapStateToProps, actions)(App);



