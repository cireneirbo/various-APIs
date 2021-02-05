import React, { Component } from 'react';
import logo from '../logo.svg';


export class ApiOne extends Component {
    static displayName = ApiOne.name;

    render () {
        return (
            <div className="App">
            <header className="App-header">
                
                
                    "employees":[
                    "firstName":"John", "lastName":"Doe",
                    "firstName":"Anna", "lastName":"Smith",
                    "firstName":"Peter", "lastName":"Jones"
                    ]
                
                
                
            </header>
            </div>
        );
    }
}