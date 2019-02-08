import React, { Component } from 'react';
import './App.css';
import Artworks from './Artworks';
import ArtworkForm from './ArtworkForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            artworks: []
        }
    }

    render() {
        return (
            <div className='App'>
                <h1>React Art Gallery</h1>
                <Router>
                    <React.Fragment>
                        <NavBar />
                        <Route exact path='/' component={Artworks} />
                        <Route exact path='/new' component={ArtworkForm} />
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

export default App;