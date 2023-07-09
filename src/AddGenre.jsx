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
  border-radius: 3px;`

function AddGenre() {
    const [genre, setGenre] = React.useState('');
    const [person, setPerson] = React.useState('');

    function handleGenreChange(evt) {
        console.log(evt.target.value);
        setGenre(evt.target.value)
    }
    function handleUserChange(evt) {
        console.log(evt.target.value);
        setPerson(evt.target.value);
    }

    function handleSubmit(evt) {
        console.log(evt);
        addGenre(person, genre);
        evt.preventDefault();

        help.ReloadPage();
    }

    async function addGenre(person, genre) {
        await axios
          .post(URL.ADD_GENRE_BY_PERSONID(person, genre))
          .then(() => {
            console.log('Added');
          })
          .catch(() => {
            console.log('error');
          });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
           <h2>Add new genre</h2> 
           <p>Genre:</p>
           <Input type="text" value={genre} placeholder="genre ID"onChange={handleGenreChange}/>
           <p>User:</p>
           <Input type="text" value={person} placeholder="person ID"onChange={handleUserChange}/><br/>
        <Button type="submit">Add Genre</Button>

        </form>
        </>

    );
}
export default AddGenre;