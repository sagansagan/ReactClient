import React from 'react';
import styled from 'styled-components';

const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  width: 25em;
  border: 2px solid black;
  margin-bottom: 1em;
`;

function Genre(props) {
  return (
    <GenreContainer>
      <h1>{props.name}</h1>
    </GenreContainer>
  );
}

export default Genre;