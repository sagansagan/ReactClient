import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import * as URL from './ApiCalls';

const Button = styled.button`
background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: #000000;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #acc6aa;
  border: none;
  border-radius: 3px;
  `;

function AddRating(){
  const [movie, setMovie] = React.useState('');
  const [person, setPerson] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [genre, setGenre] = React.useState('');

  const rate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleRatingChange(evt) {
    console.log(evt.target.value);
    setRating(evt.target.value);
  }

  function handleMovieChange(evt) {
    console.log(evt.target.value);
    setMovie(evt.target.value);
  }

  function handleUserChange(evt) {
    console.log(evt.target.value);
    setPerson(evt.target.value);
  }

  function handleGenreChange(evt) {
    console.log(evt.target.value);
    setGenre(evt.target.value)
}

  function handleSubmit(evt) {
    console.log(evt);
    addRating(rating, movie, person, genre);
    evt.preventDefault();
  }

  async function addRating(rating, movie, person, genre) {
    await axios
      .post(URL.ADD_RATING_BY_PERSONID(rating, movie, person, genre))
      .then(() => {
        console.log('Added');
      })
      .catch(() => {
        console.log('error');
      });
  }

  const allGenres = [
    {
        id: 2,
        name: "Comedy"
    },
    {
        id: 3,
        name: "Action"
    },
    {
        id: 4,
        name: "Horror"
    },
    {
        id: 5,
        name: "Drama"
    },
]

  return (
    <>
    <form onSubmit={handleSubmit}>
        <h2>Add Rating</h2>
        <p>User:</p>
        <Input type="text" placeholder="user ID" onChange={handleUserChange}/>
        <p>Movie:</p>
        <Input type="text" placeholder='movie name' onChange={handleMovieChange} /><br />
        <select onChange={handleGenreChange}>
                    <option value=""> Select a genre </option>
                    {allGenres.map(genre => (<option value={genre.id}>{genre.name}</option>))}
                </select><br />
        <select value={rating} onChange={handleRatingChange}>
            <option>select rating</option>
                {rate.map(r => (<option>{r}</option>))}
        </select>
        <Button type="submit">Add Rating</Button>
    </form>
    </>
  );
}
export default AddRating;