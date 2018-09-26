import React, { Component } from 'react'
import './navBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <h2 className='logo'>Mangas</h2>
        <div className='nav-items'>
          <ul>
            <li>New Manga</li>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    )
  }
}
