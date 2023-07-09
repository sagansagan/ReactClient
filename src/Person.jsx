import React from 'react';
import styled from 'styled-components';

const PersonContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
max-height: fit-content;
width: fit-content;
margin: 1em;
`;

function Person(props) {
    return (
      <PersonContainer>
        <h1>{props.firstName}</h1>
      </PersonContainer>
    );
  }
  
  export default Person;