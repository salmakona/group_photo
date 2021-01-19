import React, { Component } from 'react';
import {Text} from 'react-native';
import ReduxThunk from 'redux-thunk'; // this is a middleware
import Router from './Router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

class App extends Component {

    render() {
        return (
                <Router />
        )
    }
};

export default App;