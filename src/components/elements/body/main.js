import React from 'react';
import './main.css';
import axios from 'axios';

function Personajes() {

  const [character, setCharacters] = React.useState([])
  const API_PUB = process.env.REACT_APP_API_PUB_KEY;
  // const API_DEV = process.env.REACT_APP_API_DEV_KEY;
  const ts = 1;
  const hash = '64e20774a9bc0da1b2783e768cd14567';


  React.useEffect(()=>{
    const URL_KEY = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${API_PUB}&hash=${hash}`;
    axios.get(URL_KEY).then(characters=>{
    setCharacters(characters)
    console.log(characters)
    }).catch(error=>console.log(error))
  },[])

 

  return (
    <div>
        
    </div>
  );
}

  export default Personajes;