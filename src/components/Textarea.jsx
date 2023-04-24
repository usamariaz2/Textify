import React,{useContext} from 'react'
import {States} from './Context'

export default function Textarea() {
    const {text ,setText }=useContext(States);

  return (
    
    <textarea className='rounded form-control' style={{height:"176px"}} placeholder='Enter Your text Here' value={text} onChange={(e)=>setText(e.target.value)}></textarea>
  )
}
