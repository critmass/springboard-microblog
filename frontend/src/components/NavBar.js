import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap"

const NavBar = () => {
    return (<div className="jumbotron">
        <h1 className="display-1">Microblog</h1>
        <Navbar expand="md">
            <Nav>
                <NavItem>
                    <NavLink exact to="/">
                        Blog
                    </NavLink>
                </NavItem>
                --
                <NavItem>
                    <NavLink exact to="/new">
                        Add new post
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>)
}

export default NavBar