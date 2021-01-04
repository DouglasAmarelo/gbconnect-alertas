import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import people from './data/people';

import GlobalStyle from './styles/global';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { People } from './components/People';
import { CardList } from './components/CardList';
import { Schedule } from './components/Schedule';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <>
              <Header />

              <CardList people={people} />

              <People people={people} />

              <Footer />
            </>
          </Route>

          <Route path="/:nickname">
            <Schedule />
          </Route>
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
};

export default App;
