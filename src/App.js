import React, { useState } from 'react';

  

  
function App() {
  //Creates a list of artists
  const [artists, setArtists] = useState([
    {name: 'Cryex', time: '12:00 - 13:00', stage: 'Red'},
    {name: 'Cryerrrx', time: '13:00 - 14:00', stage: 'Red'},
    {name: 'Cryex', time: '14:00 - 15:00', stage: 'Red'},
  ])
  
  const [redArtists, setredArtists] = useState([
    {name: 'Cryex', time: '12:00 - 13:00', stage: 'Blue'},
    {name: 'Cryerrrx', time: '13:00 - 14:00', stage: 'Blue'},
    {name: 'Cryex', time: '14:00 - 15:00', stage: 'Blue'},
  ])
  //Creates a list of the user's schedule
  const [schedule, setSchedule] = useState([
  ])

  function addToSchedule(index, artist) {
    //Adds the artist to the user's schedule
    setSchedule([...schedule, artists[index]])
    //Removes the artist from the list of artists
    setArtists(artists.filter((artists, i) => i !== index))
  }
  function addToScheduleRed(index, redArtist) {
    //Adds the artist to the user's schedule
    setSchedule([...schedule, redArtists[index]])
    //Removes the artist from the list of artists
    setredArtists(redArtists.filter((redArtists, i) => i !== index))
   
  }

  function removeFromSchedule(index, stage) {
    //Removes the artist from the user's schedule
    setSchedule(schedule.filter((schedule, i) => i !== index))
    //Adds the artist to the list of artists
    if(stage === 'Red'){
      setArtists([...artists, schedule[index]])
    } else {
      setredArtists([...redArtists, schedule[index]])
    }
    
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
      <ul>
        <h1>red</h1>
        {redArtists.map((redArtists, index) => (
          <li key={index} onClick={() => addToScheduleRed(index)}>
            <p className='artist'>{redArtists.name}</p>
            <p className='time'>{redArtists.time}</p>
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
