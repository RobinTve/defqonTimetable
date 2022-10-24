import React from 'react'
import DJset from './DJset'
import './TimeTable.css'



export default function TimeTable() {
  return (
    //Shows 5 DJsets in an unordered list
    <div className="TimeTable">
      <ul className="RedStage">
        <li><h1>Red</h1></li>
        <li><DJset /></li>
        <li><DJset /></li>
        <li><DJset /></li>
        <li><DJset /></li>
        <li><DJset /></li>
      </ul>
      <ul className="BlueStage">
        <li><h1>Blue</h1></li>
        <li><DJset /></li>
        <li><DJset /></li>
        <li><DJset /></li>
        <li><DJset /></li>
        <li><DJset /></li>
      </ul>
      <ul className="BlackStage">
        <li><h1>Black</h1></li>
        <li><DJset /></li>
        <li><DJset /></li>
        <li><DJset /></li>
        <li><DJset /></li>
        <li><DJset /></li>
      </ul>
    </div>
  )
}


