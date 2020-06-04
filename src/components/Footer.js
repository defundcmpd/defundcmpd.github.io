import React from 'react';

export default function Footer({footer}){
  return (
    <span className='footer'>
      {footer.text}
      <a className='footer-link' href={footer.link}>{footer.linkText}</a>
    </span>
  )
}