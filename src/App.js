import React, { Fragment } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';
import EditBooks from './components/EditBooks';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <AddForm><EditBooks /></AddForm>
        <BookContainer />
      </Container>
    </Fragment>
  );
};

export default App;
