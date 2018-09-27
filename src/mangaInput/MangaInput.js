import React, { Component } from 'react'
import './MangaInput.css'

export default class MangaInput extends Component {
  static defaultProps = {
    onClose(){},
    onSave(){}
  }

  constructor(props) {
    super(props);
    this.state = {
      title : '',
      img : '',
      description : '',
      genre : ['']
    }

    this.handleChange = this.handleChange.bind(this);    
    this.handleNewGenre = this.handleNewGenre.bind(this);    
    this.handleChangeGenre = this.handleChangeGenre.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);    

  }
  
  handleNewGenre(e){
    const {genre} = this.state;
    this.setState({genre : [...genre, '']});
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleChangeGenre(e){
    const index = Number(e.target.name.split('-')[1]);
    const genre = this.state.genre.map((gen, i) => (
      i === index ? e.target.value : gen
    ));
    this.setState({genre});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title : '',
      img : '',
      description : '',
      genre : ['']
    });
  }

  render() {
    const {title, img, description} = this.state;
    const {onClose} = this.props;
    const genreItems = this.state.genre.map((elem, i)=> (
      <div 
        className='manga-form-line'
        key={`genre-${i}`}>
        <label htmlFor={`genre-${i}`}>{i+1}.</label>
        <input
          name={`genre-${i}`}
          type='text'
          placeholder='Genre'
          autoComplete='off'
          value={elem}
          onChange={this.handleChangeGenre}
        ></input>
      </div>
    ));
    return (
      <div className='manga-form-container'>
        <h1 className='manga-form-title'>New Manga</h1>
        <form 
          className='manga-form'
          onSubmit={this.handleSubmit}
          >

          <div className='manga-form-line'>
            <label htmlFor='manga-title-input'>Title : </label>
            <input
              id='manga-title-input'
              name='title'
              type='text'
              key='title'
              placeholder='title of Manga'
              value={title}
              autoComplete='off'
              onChange={this.handleChange}
            ></input>
          </div>

          {genreItems}
          <button
            id='newGenre'
            type='button'
            className='buttons'
            onClick={this.handleNewGenre}
          >+</button>

          <div className='manga-form-line'>
            <label htmlFor='manga-description-input'>Description : </label>
            <textarea
              key='description'
              name='description'
              placeholder='Description of the Manga'
              autoComplete='off'
              value={description}
              rows='8'
              cols='80'
              id='manga-description-input'
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className='manga-form-line'>
            <label htmlFor='manga-img-input'>Image url : </label>
            <input
              key='img'
              name='img'
              placeholder='link of the manga image'
              value={img}
              type='text'
              id='manga-img-input'
              autoComplete='off'
              onChange={this.handleChange}
            ></input>
          </div>

          <div className='manga-form-line'>
          <button
            className='buttons'
            type='submit'
          >
            Save
          </button>
          <button
            className='buttons'
            type='button'
            onClick={onClose}
          >
            Cancel
          </button>
          </div>
        </form>
      </div>
    )
  }
}
