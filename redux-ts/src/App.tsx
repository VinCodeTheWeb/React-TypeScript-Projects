import React from 'react';

import { RepositoriesList } from './components/repositories-list.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </header>
    </div>
  );
}

export default App;
