import React, { useEffect, useState } from 'react'
import { getPeople } from './components/getPeople'
// import data from './data.json'


export const App = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
      getPeople().then(data => setPeople(data.results));
    }, []);



  return (
    <div>
      {
        people.map(({name}) => (
          <li key={name}>
            {name}
          </li>
        ))
      }
    </div>
  )
}
