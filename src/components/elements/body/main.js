import React from 'react';
import './main.css';
import axios from 'axios';

function Personajes() {

  const [character, setCharacters] = React.useState([])
  // const API_DEV = process.env.REACT_APP_API_DEV_KEY;
  const ts = 1;
  const hash = '64e20774a9bc0da1b2783e768cd14567';


  React.useEffect(()=>{
    const API_PUB = process.env.REACT_APP_API_PUB_KEY;
    const URL_KEY = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${API_PUB}&hash=${hash}`;
    
    axios.get(URL_KEY)
    .then(characters=>{
    setCharacters(characters.data.data.results.slice(0,8));
    }).catch(error=>console.log(error))
  },[])

  return (
    <section className="containerGalery">
     <article className="container">
        {character.map(personaje=>(
     <div key={personaje.id} className="imageContainer" 
     style={{background:  `linear-gradient(rgba(255,255,255,0.1) 70%,rgba(0,0,0,0.5) 100%) ,
      linear-gradient(228deg, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.1) 30%) ,
      url(${personaje.thumbnail.path}.${personaje.thumbnail.extension}) 
      `,backgroundSize: "cover"}}>
        {/* <img src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} className="imagen" alt=""/> */}
          <div className="namePosition">
            <p className="name">{personaje.name}</p>
          </div>
     </div> 
     ))
        }
    </article>

    </section>
  );
}

  export default Personajes;