import React from 'react';

export default function Header({text}){
  return (
    <div className="header">
      <h1 className="title-text">{text.title}</h1>
      <h2 className="subtitle-text">{text.subtitle}</h2>
    </div>
  )
}