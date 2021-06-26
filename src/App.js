import React from "react";
import SearchBar from "./components/elements/header/search";
import Cardlist from "./components/CardList";
import getCharacters from "./api/marvelApi";


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
  getMarvelResponse = (id, name, offset) => {
    
    getCharacters({
      id: id,
      name: name,
      offset: offset,
    }).then(({ characters }) => {
      this.setState(
        {
          characters: characters.filter(
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
    <div className="App">
      <SearchBar onFormSubmit={this.onFormSubmit} />
      <Cardlist
      characters={this.state.characters}
      onCharacterSelect={this.onCharacterSelect}
      />
    </div>
  );
}
}

export default App;
