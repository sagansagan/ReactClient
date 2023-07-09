import * as React from "react";
import styled from "styled-components";
import axios from "axios";
import {Link} from 'react-router-dom';

import * as URL from "./ApiCalls";
import Person from "./Person";

const PersonListContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
min-height: 20em;
width: 30em;
margin: 1em;
font-size: 1em;
padding: 2em;
background-color: green;
border-radius: 20%;

`;

function PersonList(props) {
    const [persons, setPerson] = React.useState({ data: [] });

    React.useEffect(() => {
      const fetchData = async () => {
        const result = await axios(URL.GET_PERSONS);
        setPerson(result);
        console.log(result);
      };
      fetchData();
    }, []);
  
    return (
      <>
      <PersonListContainer>
        <h1>Click on a person to see its movieratings and genres:</h1>
        {persons.data.map(person => (
            <Link to={`/person/${person.firstName}`} key={person.personId}>
                <Person firstName={person.firstName}/>
            </Link>
            ))}
        </PersonListContainer>
      </>
    );
  }
  export default PersonList;