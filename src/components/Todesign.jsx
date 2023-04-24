import React, { useContext } from 'react';
import { States } from './Context';
import Textarea from './Textarea';
export default function Todesign ({ title,txt, buttons ,text_summary }){
    const {text}=useContext(States)
return(
        <div className='textutlis container bg-trasparent'>
      <h1 className='text-center my-3 fs-3 font-family-roboto'>{title}</h1>
      <div className='text-section'>
        <Textarea/>
        <div className='my-3 d-flex flex-wrap gap-2'>
          {buttons}
        </div>
      </div>

      { text_summary&& <div className=' text_summary'>
        <h3 className='text-center mb-3'>Summery Of Your Text</h3>
        <div className='sum'>
          {/* 
          Trim(): is used to remove the white spaces from both side of string 
          split(): convert the string into arrays of an substring and return new array
          */}
         <p className='mb-1 summary d-flex flex-column justify-content-around align-items-center'><span className='details'>{text.length>0 ? text.trim().split(/\s+/).filter((elem)=>{return elem!==''}).length : "0"} </span> Total words are </p>
         <p className='mb-1 summary  d-flex flex-column justify-content-around align-items-center'><span className='details'> {text.length}</span> Total Number of characters are</p>
         <p className='mb-1 summary d-flex flex-column justify-content-around align-items-center'> <span className='details'>{text.length>0 ? 0.008 *text.split("").length :"0"}</span> Reading Time </p>
        </div>
      </div> }

      <div className='mt-2'>
      <h3 className='text-center '>Preview Document</h3>
      <p className='card p-2'style={{minHeight:"100px"}}>{txt}</p>
      </div>
    </div>
  );
}