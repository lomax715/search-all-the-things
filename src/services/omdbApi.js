const API_KEY = 'f7ebe991';
const BASE_URL = 'http://www.omdbapi.com/';

export function search(search, page = 1) {
  const url = `${BASE_URL}?s=${search}&page=${page}&apikey=${API_KEY}`;

  return fetch(url).then(r => {
    if(r.ok) return r.json();
    return r.json().then(json => { throw json; });
  });
}


//http://www.omdbapi.com/?s=batman&apikey=f7ebe991