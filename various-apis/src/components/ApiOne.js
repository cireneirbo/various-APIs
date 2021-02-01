import React, { Component } from 'react';
import logo from '../logo.svg';


export class ApiOne extends Component {
    static displayName = ApiOne.name;

    render () {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                New page here.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            </div>
        );
    }
}