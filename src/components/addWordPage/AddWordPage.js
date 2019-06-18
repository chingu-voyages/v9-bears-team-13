import React, { useState } from 'react';

import Nav from './nav/Nav';
import Spaces from './spaces/Spaces';
import AddWordForm from './addWordForm/AddWordForm';

const AddWordPage = props => (
  <>
    <Nav />
    <Spaces />
    <AddWordForm />
  </>
);

export default AddWordPage;