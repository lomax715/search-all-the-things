const URL = 'https://swapi.co/api/';

export function search(category, topic){
  const searchURL = `${URL}${category}/?search=${topic}`;

  return fetch(searchURL).then(response => return response.json);
}