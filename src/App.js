import React, { Component } from 'react';
import MangaList from "./mangaList/mangaList";
import MangaInput from './mangaInput/MangaInput';
import NavBar from './navBar/navBar';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mangas : [
        {
          id : 0,
          title : 'Ancient Strengthening Technique',
          img : 'https://cdn.novelupdates.com/images/f49b50c7-9bc1-4f61-9b83-ef1fabe491ae.jpg',
          description : 'A human warrior cultivating the Ancient Strengthening Technique has transcended dimensions and arrived on Kyushu. Together with twelve ravishing beauties with looks that were unmatched in their generation, will he be able to stand on the summit of this world.        This novel is about the main character, named Qing Shui, who transcended dimensions and arrived in the Kyushu continent. Storms of blood and wind, resulting in corpses and bones strewn about are extremely common here. The young warrior Qing Shui forged ahead in his path to cultivate, using 10 years to train himself, only to seek vengeance for the one who had forsaken his mother!',
          genre : ['Action', 'Adventure', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Harem', 'Martial', 'Arts', 'Mature', 'Xuanhuan']
        },
        {
          id : 1,
          title : 'Douluo Dalu',
          img : 'https://cdn.novelupdates.com/images/2015/06/douluo-dalu.jpg',
          description : 'Tang Sect, the most famous martial arts sect of all. By stealing its most secret teachings to fulfill his dreams, Tang San committed an unforgivable crime. With his ambition attained, he hands his legacy to the sect and throws himself from the fearsome “Hell’s Peak.”But he could have never imagined that this would reincarnate him in another world, one without magic, martial arts, and grudges. A land where only the mystical souls of battle lay.',
          genre : ['Action', 'Adventure', 'Fantasy', 'Martial Arts', 'Romance', 'Shounen', 'Tragedy', 'Xuanhuan']
        },
        {
          id : 2,
          title : 'Unrivaled Tang Sect',
          img : 'https://cdn.novelupdates.com/images/2017/03/eyJ1cmwiOiJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy8yNjAzMjI5MTgxMTcwMTU1NTIvMjg5MTY5MjcyMDIwNzk1MzkyL0hZSC5qcGVnIn0.jpeg',
          description : 'The legend of the continent, the battle that brought fame; the Sacred Phoenix Lady, the Windfire Meteor Godrealm saber-art; the pair that ascend and fuse, the golden sun and the blue moon, the fury of the crashing thunder. There is no magic, no battle qi, nor any martial arts in this land. However, there are martial spirits. Ten thousand years have passed since the founding of the Tang Sect on the Douluo continent, and it has declined. A new, proud generation of heaven’s chosen has been born. Can the new generation of Shrek’s Seven Devils rally the Tang Sect and once more compose the song of the Unrivaled Tang Sect?',
          genre : ['Action', 'Adventure', 'Comedy', 'Fantasy', 'Martial Arts', 'Mystery', 'School Life', 'Xuanhuan']
        },
        {
          id : 3,
          title : 'Douluo Dalu: Legend of the Divine Realm',
          img : 'https://cdn.novelupdates.com/images/2016/12/96.jpg',
          description : 'Due to the God of Goodness and the God of Evil’s reincarnation and changes, the Divine Realm’s internal strife has been gradually increasing. The God of Destruction is the head of a faction opposed to Sea Asura God who heads another faction, eventually leading to war. However, it is at this time that the Sea Asura God, wife has become pregnant. Tang San has a premonition that a crisis bigger than the Divine Realm’s internal conflict is about to arrive. What is this crisis? The Legend of the Divine Realm is set after Peerless Tang Sect and in this story, many familiar characters will appear once again.',
          genre : ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Martial Arts', 'Mystery', 'Tragedy', 'Xuanhuan']
        }
      ],
      nextMangaId : 4,
      showForm : false
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  handleSave(manga){
    this.setState((prevState, props) => {
      const newManga = {...manga, id : this.state.nextMangaId};
      return {
        nextMangaId : prevState.nextMangaId+1,
        mangas : [...this.state.mangas, newManga],
        showForm : false
      }
    })
  }

  onDelete(id){
    const mangas = this.state.mangas.filter(manga => manga.id !== id)
    this.setState({mangas});
  }

  render() {
    const {showForm} = this.state;

    return (
      <div className="App">
        <NavBar onNewManga = {() => this.setState({showForm : true})}/>
        {showForm ? 
          <MangaInput
            onSave = {this.handleSave}
            onClose = {() => this.setState({showForm:false})}
          /> : null}
        <MangaList onDelete = {this.onDelete} mangas = {this.state.mangas}/>
      </div>
    );
  }
}

export default App;
