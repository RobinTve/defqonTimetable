import React, { useState } from 'react';

  

  
function App() {
  //Creates a list of artists
  const [artists, setArtists] = useState([
    {name: 'Cryex', time: '12:00 - 13:00'},
    {name: 'Cryerrrx', time: '12:00 - 13:00'},
    {name: 'Cryex', time: '12:00 - 13:00'},
    
  ])
  //Creates a list of the user's schedule
  const [schedule, setSchedule] = useState([
  ])

  function addToSchedule(index) {
    //Adds the clicked artist index to the schedule list
    setSchedule([...schedule, artists[index]])
    //Removes the clicked artist from the artists list
    setArtists(artists.filter((artist, i) => i !== index))
  }

  function removeFromSchedule(index) {
    //Adds the clicked artist index to the artists list
    setArtists([...artists, schedule[index]])
    //Removes the clicked artist from the schedule list
    setSchedule(schedule.filter((artist, i) => i !== index))
  }

  return (
    <div>
      <h1>Artists</h1>
      <ul>
        {artists.map((artist, index) => (
          <li key={index} onClick={() => addToSchedule(index)}>
            <p className='artist'>{artist.name}</p>
            <p className='time'>{artist.time}</p>
          </li>
        ))}
      </ul>
      <h1>Schedule</h1>
      <ul>
        {schedule.map((artist, index) => (
          <li key={index} onClick={() => removeFromSchedule(index)}>
            <p className='artist'>{artist.name}</p>
            <p className='time'>{artist.time}</p>
          </li>
        ))}
      </ul>
      
    </div>
    

  );

  


  
  
 
}
  
export default App;
