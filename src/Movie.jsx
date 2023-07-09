import React from 'react';
import styled from 'styled-components';

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  width: 25em;
  border: 2px solid black;
  margin-bottom: 1em;
`;

function Movie(props) {
  return (
    <MovieContainer>
      <h1>Movie: {props.movie}</h1>
      <h1>Rating: {props.rating}</h1>
    </MovieContainer>
  );
}

export default Movie;