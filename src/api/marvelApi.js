

function getCharacters(options){
  const {name, offset } = { ...options };

    const API_PUB = process.env.REACT_APP_API_PUB_KEY;
    const ts = 1;
    const hash = "64e20774a9bc0da1b2783e768cd14567";
    const URL_KEY = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&limit=11&apikey=${API_PUB}&hash=${hash}&offset=${offset}${name}`;

    return fetch(URL_KEY)
    .then((res) => res.json())
    .then((res) => {
      return {
        characters: res.data.results
            };
        });
    }

    export default getCharacters;
