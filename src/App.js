import React, { useState } from 'react';
import {data} from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)

  const handleClick = () => {
    if(people.length === 0){
      setPeople(data)
      return
    }
    if(people.length > 1) setPeople([])
  }

  const deletBirthday = (id) => {
    const newBirthdayList = people.filter(person => person.id !== id)
    setPeople(newBirthdayList)
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} deletBirthday={deletBirthday}/>
        <button onClick={handleClick}>
          {
            people.length === 0 ? 'Reload birthdays' : 'Clear all'
          }
        </button>
      </section>
    </main>
  )
}

export default App;