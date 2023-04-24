import React from 'react'
import img from './Abo.png'

export default function About() {
  return (
    <>
    <div className='d-flex about container  align-item-center my-2'>
      <div className='about-left'>
      <h1 className='my-2 text-info'>
      What is Textify ?
      </h1>
      <p className=''>
      Textify is an innovative online tool that provides a comprehensive range of text manipulation features. Whether you want to convert your text to uppercase or lowercase, remove extra spaces, summarize your text, or even convert it to speech, Textify has got you covered. <br/><br/>
      Our easy-to-use interface and powerful algorithms make it simple for users to enhance their writing potential and productivity in just a few clicks. With Textify, you can make your text more readable, concise, and professional. Say goodbye to the hassle of manually editing your text and hello to the convenience of Textify.
      </p>
      </div>
      <img src={img} width="350px" alt="" srcset="" />
    </div>
    </>
     
  )
}
