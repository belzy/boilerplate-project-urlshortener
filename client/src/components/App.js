import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Intent, Spinner, FormGroup, InputGroup, ControlGroup } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'url-input': '',
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    return (
      <AppContainer>

        <Title>URL Shortener</Title>

        <Form>
          {/*<Spinner intent={Intent.PRIMARY} />*/}


          <FormGroup label='Enter a URL:' labelFor='url-input'>
            <ControlGroup>
              <InputGroup id='url-input' type='text' value={ this.state['url-input'] } onChange={ this.handleChange }/>
              <Button fill='true' text='Submit'/>
            </ControlGroup>
          </FormGroup>
        </Form>


      </AppContainer>
    );
  }
}

export default App;

const Title = styled.h1`

  text-align: center;
  font-size: 3rem;
  margin: 40px 0 60px 0;

`;

const Form = styled.form`
  /* border: 1px solid black; */
  width: 300px;
`;

const AppContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
