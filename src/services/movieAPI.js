const API_KEY = '1ecac68e';
const BASE_URL = 'http://www.omdbapi.com/?';

export function search(query, page = 1) {
  const url = `${BASE_URL}s=${query}&page=${page}&apiKey=${API_KEY}`;
  
  return fetch(url).then(r => {
    if(r.ok) return r.json();
    return r.json().then(json => { throw json; }); //return error
  });
}