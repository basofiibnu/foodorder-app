import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals';
import Cart from './components/UI/Cart';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
