import React from 'react';
import {Button} from './components/Button';
import Greet from './components/Greet';

import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Lady',
      last: 'Diana',
    },
  ];

  return (
    <div className="App">
      <Greet name="azat" isLoggedIn={true} messageCount={12} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Button
        handleClick={() => {
          console.log('clikced');
        }}
      />
    </div>
  );
}

export default App;
