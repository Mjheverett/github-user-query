import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchForm from './components/SearchForm';

import 'bulma/css/bulma.css';
import { Box } from 'bloomer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <SearchForm />
      </Router>
    </div>
  );
}

export default App;
