import React from 'react';

import people from './data/people';

import GlobalStyle from './styles/global';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { People } from './components/People';
import { CardList } from './components/CardList';

const App = () => (
  <>
    <GlobalStyle />
    <div className="App">
      <Header />

      <CardList people={people} />

      <People people={people} />

      <Footer />
    </div>
  </>
);

export default App;
