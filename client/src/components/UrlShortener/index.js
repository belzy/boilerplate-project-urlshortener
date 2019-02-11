import React, { Component } from 'react';
import { Card, Elevation, Button, Intent, FormGroup, InputGroup, ControlGroup, Spinner, } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import styled from 'styled-components';
import axios from 'axios';

class UrlShortener extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'url-input': '',
      shortUrl: `${ window.location.href }api/url/0`,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createShortUrl = this.createShortUrl.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  handleSubmit() {

    this.setState({ shortUrl: null });

    setTimeout(() => {
      this.createShortUrl(this.state['url-input'], (err, data) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({
            shortUrl: data,
          });
          console.log(data);
        }
      })
    }, 500);
  }
  createShortUrl(url, done) {

    axios({
      method: 'post',
      url: '/api/shorturl/new',
      data: {
        url,
      }
    }).then(res => {
      done(null, `${ window.location }api/shorturl/${ res.data['short_url'] }`);
    }).catch(err => {
      done(err);
    });
  }

  render() {
    return (
      <Container>
        <Card interactive={ false } elevation={ Elevation.TWO } style={{ display: 'flex', flexDirection: 'column', height: '200px', justifyContent: 'space-between', alignItems: 'center', }}>
          <Title>URL Shortener</Title>

          {
            this.state.shortUrl === null ? <Spinner size='25' /> : <a href={ this.state.shortUrl } target='_blank'>{ this.state.shortUrl }</a>
          }

          <FormGroup label='Enter a URL:' labelFor='url-input'>
            <ControlGroup vertical={ false }>
              <InputGroup id='url-input' type='text' value={ this.state['url-input'] } onChange={ this.handleChange } placeholder='ex: https://www.freecodecamp.org/' style={{ backgroundColor: '#f5f8fa' }} style={{ width: '235px', }} />
              <Button fill='true' text='Submit' onClick={ this.handleSubmit } />
            </ControlGroup>
          </FormGroup>

        </Card>
      </Container>
    );
  }
}

export default UrlShortener;

const Container = styled.div`

`;

const Title = styled.h1`

  /* border: 1px solid black; */
  font-size: 1.8rem;
  text-align: center;

`;
