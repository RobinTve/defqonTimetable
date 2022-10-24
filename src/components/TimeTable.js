import React from 'react'
import DJset from './DJset'
import './TimeTable.css'



export default function TimeTable() {
  return (
    //Shows 5 DJsets
    <div>
       <div className="Stage">
        <h1>Red</h1>
        <DJset />
        </div>
        <div className="Stage">
        <h1>Blue</h1>
        <DJset />
        </div>
        <div className="Stage">
        <h1>TimeTable</h1>
        <DJset />
        </div>
    </div>
  )
}


