import React from 'react';

export default function Body({text}){
  return (
    <div className="paragraph-parent">
    {text.paragraphs.map((par, index) => {
      return (
        <p className={`paragraph-item ${par === text.strong && 'strong'}`} key={index}>{par}</p>
      )
    })}
    </div>
  )
}