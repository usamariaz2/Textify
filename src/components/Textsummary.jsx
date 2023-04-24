import React,{useContext, useState} from 'react'
import {States} from './Context'
import Todesign from './Todesign';

export default function Textsummary() {
const {text,toClear }=useContext(States);
const[summary ,setSummary]=useState('')

const textSummary = async()=>{
  const apiKey= process.env.REACT_APP_API_KEY;
      setSummary("Working on that...")
    try {
      const response = await fetch(
        `https://api.meaningcloud.com/summarization-1.0?key=${apiKey}&sentences=3&txt=${text}&lang=en`
      );
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error(alert(error))
    }
}

const btn =(
    <>
    <button className='btn btn-success btn-sm px-3' onClick={textSummary}>To Summary</button>
    <button className='btn btn-warning btn-sm px-3' onClick={toClear}>To Clear</button>
    </>
)
  return (
   
    <Todesign title={"Summarize your long texts in a snap with our user-friendly Textify."} buttons={btn} txt={summary} />
  )
}
