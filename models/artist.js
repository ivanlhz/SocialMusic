const apikey = ''//Here you lastfm api key
const url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key='+ apikey +'&format=json'

function getArtistList()
{
    //Usamos fetch que nos devuelve una promesa con los datos
    return fetch(url)
    .then( response => response.json() )
    .then( data => data.topartists.artist)
    .then( artistList => artistList.map( artist =>{
        return{
            name: artist.name,
            image: artist.image[3]['#text'],
            likes: 0,
            comments:0
        }
    }))
}

export { getArtistList }