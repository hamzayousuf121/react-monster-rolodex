import React from 'react';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Cards from './components/Cards';
import './App.css';
function App() {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  const [user, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const monsters = user;
  const SeacrhField = search;

  // const handleChange = e =>  console.log(e.target.value)
  const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(SeacrhField.toLowerCase()))
  return (

    <div className="App">


      <Search placeholder={'Serach Montser here'} handlechange={(e) => setSearch(e.target.value)} />
      <h1>Monster RoloDex</h1>

      <div className="container">
        <div className="row">
          <Cards monster={filterMonster} />
        </div>
      </div>
    </div>

  );
}

export default App;
