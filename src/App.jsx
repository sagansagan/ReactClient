import React from 'react'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import PersonList from './PersonList';
import PersonalPage from './PersonalPage';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: burlywood;
  min-height: 100vh;
`;


function App() {
return (
<Router>
  <MainContainer>
   <Switch>
      <Route path="/person">
         <PersonalPage/> 
      </Route>
      <Route path="/">
          <PersonList/> 
      </Route>
    </Switch>
  </MainContainer>
</Router>
  )
}

export default App;
