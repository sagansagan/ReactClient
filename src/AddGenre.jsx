import * as React from 'react';
import axios from 'axios';

import * as URL from './ApiCalls';

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
           <input type="text" value={genre} placeholder="genre ID"onChange={handleGenreChange}/>
           <p>user:</p>
           <input type="text" value={person} placeholder="person ID"onChange={handleUserChange}/><br/>
        <button type="submit">Add Genre</button>

        </form>
        </>

    );
}
export default AddGenre;