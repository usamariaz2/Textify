import React, { useContext } from 'react'
import {States} from './Context'
import Todesign from './Todesign';

export default function Textutlis() {
const{text ,setText,toCopy,toClear}=useContext(States)

  const toUp=()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  const toLower=()=>{
    let newtext = text.toLowerCase();
    setText(newtext)

  }
  
  const toRemoveextra=()=>{
    let newtext= text.trim().split(/[ ]+/);
    setText(newtext.join(" "))
  }
 
  const btn =(
    <>
    <button className='btn btn-primary btn-sm px-3' onClick={toUp}>To Uppercase</button>
    <button className='btn btn-primary btn-sm px-3' onClick={toLower}>To Lowercase</button>
    <button className='btn btn-success btn-sm px-3' onClick={toCopy}>Copy Text</button>
    <button className='btn btn-primary btn-sm px-3' onClick={toRemoveextra}>Remove Extra Space</button>
    <button className='btn btn-warning btn-sm px-3' onClick={toClear}>To Clear</button>
    </>
  )
  return (

    <Todesign title={"Maximize Your Writing Potential with Textify"} buttons={btn} txt={text} text_summary={true}/>
  )
}

