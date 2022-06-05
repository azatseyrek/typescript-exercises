import React from 'react'
import {Button} from './components/Button'
import Container from './components/Container'
import Greet from './components/Greet'
import Input from './components/Input'

import Person from './components/Person'
import PersonList from './components/PersonList'
import LoggedIn from './components/state/LoggedIn'
import Status from './components/Status'

function App() {
    const personName = {
        first: 'Bruce',
        last: 'Wayne',
    }

    const nameList = [
        {
            first: 'james',
            last: 'Hardy',
        },
        {
            first: 'Clark',
            last: 'Kent',
        },
        {
            first: 'Lady',
            last: 'Diana',
        },
    ]

    const [text, setText] = React.useState('')

    return (
        <div className="App">
            <Greet name="azat" isLoggedIn={true} messageCount={12} />
            <Person name={personName} />
            <PersonList names={nameList} />
            <Status status="error" />
            <Input
                value={text}
                handleChange={(event) => setText(event.target.value)}
            />
            <Button
                handleClick={(event, id) => {
                    console.log(text, event, id)
                }}
            />
            <Container styles={{border: '1px solid black', padding: '1rem'}} />

            <LoggedIn />
        </div>
    )
}

export default App
