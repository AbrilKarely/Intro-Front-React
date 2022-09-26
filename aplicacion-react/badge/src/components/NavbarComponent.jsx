import React, { Component } from 'react'
import "./Navbar.css"

export class NavbarComponent extends Component {
  render() {
    return (
      <div className ="Navbar">
        <div className = "container-fluid">
            <div className ="Navbar_brand">
                <span className = "front-weight-light"> Devf</span>
                <span className = "font-weight-bold"> Online</span>

            </div>

        </div>
      </div>
    )
  }
}

export default NavbarComponent