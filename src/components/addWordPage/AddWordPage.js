import React, { useState } from 'react';

import Spaces from './spaces/Spaces';
import AddWordForm from './addWordForm/AddWordForm';

const AddWordPage = props => (
  <>
    <Spaces />
    <AddWordForm />
  </>
);

export default AddWordPage;