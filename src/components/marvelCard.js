import React from "react";
import './CardList.css'
import './elements/header/navbar.css'

const CharacterCard = ({ character, onCharacterSelect }) => {
  const image = character.thumbnail.path;
  const file = character.thumbnail.extension;

  return (
    
          <div className="imageContainer" alt=""style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 70%,rgba(0,0,0,0.5) 100%),
            linear-gradient(228deg, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.1) 30%),
            url(${image}.${file})
            `,backgroundPosition: "center",
            backgroundSize: "cover" 
              }}
              onClick={() => {
                onCharacterSelect(character);
              }}>
          <div className="namePosition">
                <p className="name">{character.name}</p>
          </div>
          </div> 
    
  );
};

export default CharacterCard;
