import React, { Component } from 'react';
import { Container, Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <div className="navbar-nav flex-grow">
            <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to="/api-one">API One</NavLink>
            </NavItem>
            </div>
          </Container>
        </Navbar>
      </header>
    );
  }
}