const URL = 'https://swapi.co/api/';

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(response => response.ok ? response.json() : response.json().then(throwJson));

export function search(topic){
  const searchURL = `${URL}?search=${topic}`;

  return get(searchURL);
}