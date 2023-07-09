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
justify-content: space-around;
align-items: center;
min-height: 20em;
width: 30em;
margin: 5em;
font-size: 1em;
padding: 3em;
background-color: #acc6aa;
border-radius: 20%;

`;

const NavbarLink = styled(Link)`
color: black;
 font-size: large;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: papayawhip;
}
&:active{
    color: red;
}`;

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
            <NavbarLink to={`/person/${person.firstName}`} key={person.personId}>
                <Person firstName={person.firstName}/>
            </NavbarLink>
            ))}
        </PersonListContainer>
      </>
    );
  }
  export default PersonList;