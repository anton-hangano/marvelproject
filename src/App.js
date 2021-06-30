import React from "react";
import SearchBar from "./components/elements/header/search";
import Cardlist from "./components/CardList";
import getCharacters from "./api/marvelApi";
import CharacterDetails from "./components/CharacterComics";


const imageFound = /image_not_available/gi;

class App extends React.Component {
  state = { characters: [], name: null, offset: 0}

  componentDidMount() {
    this.getMarvelResponse(null, null, this.state.offset);
  }

  onCharacterSelect = (e) => {
    this.setState({ selectedCard: e });
  };
  onFormSubmit = (e) => {
    this.getMarvelResponse(null, `&nameStartsWith=${e}`, 0);
  };
  shuffleArray = (characters) =>  {
    for (var c = characters.length - 1; c > 0; c--) {
      var b = Math.floor(Math.random() * (c + 1));
      var a = characters[c];
      characters[c] = characters[b];
      characters[b] = a;
    }
    return characters
  };
  getMarvelResponse = (id, name, offset) => {
    getCharacters({
      id: id,
      name: name,
      offset: offset,
    }).then(({ characters }) => {
      this.shuffleArray(characters)
      this.setState(
        {
          characters: characters.splice(0,12).filter(
            (chr) => !chr.thumbnail.path.match(imageFound)
          ),      

          selectedCard: null,
          offset: offset,
          name: name,
        },
        () => {
          console.log(this.state.characters);
        }
      );
    });
  };
  
  render(){
  return (
    <div className="App" >
      <SearchBar onFormSubmit={this.onFormSubmit} />
      <Cardlist
      characters={this.state.characters}
      onCharacterSelect={this.onCharacterSelect}
      />
      <CharacterDetails selectedCard={this.state.selectedCard} />

    </div>
  );
}

}



export default App;
