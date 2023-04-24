import React, { useContext, useState } from 'react'
import { States } from './Context'
import Todesign from './Todesign';

export default function Texttovoice() {
    const {text,voice,setVoice,toClear,toCopy}=useContext(States)
    const [btntxt ,setBtntxt]=useState('To Stop')

    const speak =()=>{
      if(btntxt ==='To Stop'){
        msgTospeak();
        setBtntxt('To Speak')
      }
      else{
        msgTostop();
        setBtntxt('To Stop')
      }
    }
    const msg = new SpeechSynthesisUtterance();
    const msgTospeak =() => {
        // SpeechSynthesisUtterance interface of the Web Speech API represents a speech request.
        var voices = window.speechSynthesis.getVoices(voice);
        msg.text = text;
        msg.voice =  voices[voice]
        window.speechSynthesis.speak(msg);
      };

      const msgTostop =()=>{
        speechSynthesis.cancel()
      }

      const btn =(
        <>
   <button className='btn btn-success btn-sm px-3' onClick={speak}>{btntxt==='To Speak'? "To Stop" :"To Speak"}</button>
<button className='btn btn-primary btn-sm px-3' onClick={toCopy}>Copy</button>
 <button className='btn btn-warning btn-sm px-3' onClick={toClear}>Clear</button>
        </>
      )
  return (
    <>
    <div className='w-100 m-2'>
    <select class="float-end btn color-red text-bg-secondary badge form-select-sm w-1 m-2"  aria-label=".form-select-sm example" name="voice" id="" onClick={(e)=>setVoice(e.target.value)}>
        <option defaultValue=''>Change the Voice</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Female</option>
    </select>
    </div>
    <div className='mt-5'>
    <Todesign title={"Bring Your Words to Life: Transform Text into Speech with Our Textify"} buttons={btn} txt={text}/>
    </div>
    </>
  )
}
