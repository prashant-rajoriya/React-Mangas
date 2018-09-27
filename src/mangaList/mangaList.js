import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Manga from "../manga/manga"
import './mangaList.css'

export default class mangaList extends Component {

  static propTypes = {
    mangas : PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete : PropTypes.func.isRequired,
  }

  render() {
    const {onDelete} = this.props;
    const mangas = this.props.mangas.map((manga) => (
      <Manga key={manga.id} {...manga} onDelete = {onDelete}/>
    ));

    return (
      <div className='manga-list'>
        {mangas}
      </div>
    )
  }
}
