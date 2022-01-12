import React from 'react'
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'

function App() {
  return (
  <div>
    <NavBar />
    <ItemListContainer greeting="Soy un Item"/>
    </div>
  );
}

export default App;
