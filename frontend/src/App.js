import React, { useState } from 'react';

import './App.css';
import bgImg from './assets/bg.jpg';

import Header from './components/Header';

function App() {
  const [ projects, setProjects ] = useState(['dev', 'front']);

  function handleAddProject() {
    setProjects([...projects, `New project ${Date.now()}`])
  }

  return (
    <>
      <Header title="Projects" />

      <img src={ bgImg } alt="" width={200} />

      <ul>
        { projects.map(project => <li key={ project }>{ project }</li>) }
      </ul>

      <button type="button" onClick={ handleAddProject }>Add project</button>
    </>
  )
}

export default App;