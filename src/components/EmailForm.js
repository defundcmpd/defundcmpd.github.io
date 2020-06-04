import React, { useState, useEffect } from 'react';
import Select from 'react-select';

export default function EmailForm({title, subtitle, strongSubtitle, help, global, optional, placeholder, linkText, body}){
  const [cityCouncilMember, setCityCouncilMember] = useState('');
  const [mailLink, setMailLink] = useState('');

  useEffect(() => {
    const link = getEmailList(global, cityCouncilMember, getBodyString(body));
    setMailLink(`mailto:${link}`);
  }, [cityCouncilMember, global, optional, body])

  return (
    <div className='email-card'>
      <h4 className='email-title'>{title}</h4>
      <span className='email-subtitle'>
        {subtitle}
        <strong>{strongSubtitle}</strong>
      </span>
      <a className='email-lookup' target="_blank" rel="noopener noreferrer" href={help.link}>{help.text}</a>
      <Select 
        className='email-select' 
        value={cityCouncilMember} 
        onChange={setCityCouncilMember}
        isMulti={false}
        options={optional.map(el => ({label: `${el.name} - ${el.title}`, value: el.email}))}
        placeholder={placeholder}
      />
      <span className='email-link'>
        <a className='email-link' href={mailLink} body={body}>{linkText}</a>
      </span>
    </div>
  )
}

const getBodyString = (body) => {
  let baseStr = "?subject=2021%20budget%20vote&body=";
  body.forEach(paragraph => {
    baseStr += `${paragraph.split(" ").join("%20")}%0D%0A%0D%0A`
  })
  return baseStr;
}

const getEmailList = (global, councilMember, body) => {
  let str = "";
  global.forEach(person => {
    str += `${person.email},`
  })
  if(councilMember && councilMember.value) {
    str += councilMember.value;
  }
  str += body;
  return str;
}