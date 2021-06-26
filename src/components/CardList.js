import React from "react";
import CharacterCard from "./marvelCard";
import './CardList.css'

const cardList = ({ characters, onCharacterSelect }) => {
  const renderList = characters.map((chr,i) => {  
  return (
      
        <article key={i}>
          <CharacterCard
          character={characters[i]}
          onCharacterSelect={onCharacterSelect}
          
          ></CharacterCard>
        </article>
    );
  });
  return <section className="container">{renderList}</section>
  };

  export default cardList;

