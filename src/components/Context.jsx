import React, { createContext, useState } from 'react'
const States = createContext();

export default function Context({children}) {
    const [text ,setText]=useState([])
    const [summary ,setSummary]=useState([])
  const [voice , setVoice]= useState([null])
//   functions
  const toClear=()=>{
    let newtext ='';
    setText(newtext)
  }
  const toCopy=()=>{
    navigator.clipboard.writeText(text);
  }

  return (
    <States.Provider value={{text, setText , summary ,setSummary,voice ,setVoice,toClear,toCopy}}>{children}</States.Provider>
  )
}
export {States}