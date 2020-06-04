import React from 'react';

export default function CouncilMemberCard({name, email, phone, twitter}){
  return (
    <div className='council-card'>
      <h4 className='council-name'>{name}</h4>
      {phone && <a className='council-link' href={`tel:${phone.split('.').join("")}`}>{phone}</a>}
      <a className='council-link' href={`mailto:${email}`}>{email}</a>
      {twitter && <a className='council-link' target="_blank" rel="noopener noreferrer" href={twitter.link}>{twitter.at}</a>}
    </div>
  )
}