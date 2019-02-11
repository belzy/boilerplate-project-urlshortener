import React, { Component } from 'react';
import styled from 'styled-components';
import UrlShortener from './UrlShortener/index';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContainer>
        <UrlShortener />
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;

`;
