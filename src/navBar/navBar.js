import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './navBar.css'

export default class NavBar extends Component {

  static defaultProps = {
    onNewManga(){}
  }

  static propTypes = {
    onNewManga : PropTypes.func,
  }

  render() {
    return (
      <div className='navbar'>
        <a><h2 className='logo'>Mangas</h2></a>
        <div className='nav-items'>
          <ul>
            <a onClick={this.props.onNewManga}><li>New Manga</li></a>
            <a><li>Home</li></a>
            <a><li>About</li></a>
            <a><li>Contact Us</li></a>
          </ul>
        </div>
      </div>
    )
  }
}
