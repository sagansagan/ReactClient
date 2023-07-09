export const GET_PERSONS = "https://localhost:7192/person";

export const GET_GENRES_BY_FIRSTNAME = (firstName) =>
`https://localhost:7192/person/genre?firstName=${firstName}`

export const GET_RATINGS_BY_FIRSTNAME = (firstName) =>
    `https://localhost:7192/person/ratings?firstName=${firstName}`

export const ADD_GENRE_BY_PERSONID = (personId, genreId) => 
`https://localhost:7192/person/add-genre?personId=${personId}&genreId=${genreId}`

export const ADD_RATING_BY_PERSONID = (rating, movieName, personId, genreId) => 
`https://localhost:7192/person/add-rating?rating=${rating}&movieName=${movieName}&personId=${personId}&genreId=${genreId}`