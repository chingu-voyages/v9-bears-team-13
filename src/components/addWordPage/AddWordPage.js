import React, { useState } from 'react';
import { Col, Form, Input, Button } from 'reactstrap';

const AddWordPage = props => {
  const [word, setWord] = useState('');

  const onSubmitWord = e => {
    e.preventDefault()
    console.log(word);
    setWord('');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          WordList
        </a>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul
            style={{width: '100%'}}
            className="navbar-nav mr-auto d-flex justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button type="button" className="btn curve-button  btn-primary">
                  Logout
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Col xs="12" sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }} xl={{ size: 2, offset: 5 }}>
      <Form onSubmit={onSubmitWord}>
        <h1 style={{ textAlign: 'center' }}>Add a word</h1>
        <br/>      
        <Input value={word} onChange={e => setWord(e.target.value)} />
        <br/>      
        <Button action="submit" color="primary">Submit</Button>
      </Form>
      </Col>
    </>
  );
}

export default AddWordPage;