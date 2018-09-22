import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './manga.css'

class Manga extends Component {

  static propTypes = {
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    genre : PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render(){

    const {title, img, description} = this.props;
    const genre = this.props.genre.map((val, i) => (
      <li key={i}>{val}</li>
    ));

    return (
    <div className='manga-card'>
      <div className='manga-card-img'>
        <img src={img} alt={title}/>
      </div>
      <div className='manga-card-details'>
        <h3 className='manga-title'>{title}</h3>
        <h4>Genre : </h4>
        <ul>{genre}</ul>
        <h4>Description : </h4>
        <p>{description}</p>
      </div>
    </div>
    );
  }
}

export default Manga;