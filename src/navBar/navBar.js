import React, { Component } from 'react'
import './navBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <a><h2 className='logo'>Mangas</h2></a>
        <div className='nav-items'>
          <ul>
            <a><li>New Manga</li></a>
            <a><li>Home</li></a>
            <a><li>About</li></a>
            <a><li>Contact Us</li></a>
          </ul>
        </div>
      </div>
    )
  }
}
