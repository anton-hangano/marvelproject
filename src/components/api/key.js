import md5 from "react-native-md5"

function KeyApi(){
const API_PUB = process.env.REACT_APP_API_PUB_KEY;
const API_DEV = process.env.REACT_APP_API_DEV_KEY;
const ts = Date.now();
const hash = md5("" + ts + API_DEV + API_PUB);
const URL_KEY = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${API_PUB}&hash=${hash}`;

return URL_KEY
}

export default KeyApi;

