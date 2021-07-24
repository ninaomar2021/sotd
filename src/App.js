
import React from 'react';
import './style.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';

function App(props) {
      return(
        <div className="App">
          <Header />
          <CreateArea />
          <Note />
        </div>
      );
}

export default App;
