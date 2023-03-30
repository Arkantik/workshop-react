import { useState } from 'react'
import './App.css'
import Avatar from './components/Avatar.jsx'

/** TO DO:
 * Dans une application React:
 * créez un composant <Avatar /> qui reçoit comme props : 
 * image, firstName, lastName
 * 
 * Dans <App /> appeler ce composant 2 fois avec des valeurs différentes
 * Utilisez les props dans <Avatar />
 * 
 * Vous devrez créer un objet Homer)
 */

function App() {
  
  const bart = 
    {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  }

  const homer =
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
    firstName: "Homer",
    lastName: "Simpson"
  }

  return (
    <div>
      <Avatar image={bart.image} firstName={bart.firstName} lastName={bart.lastName} />
      <Avatar image={homer.image} firstName={homer.firstName} lastName={homer.lastName} />
    </div>
  )
};

export default App;