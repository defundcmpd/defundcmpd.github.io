import React, {useState} from 'react';
import CouncilMemberCard from './CouncilMemberCard';

export default function Call({title, help, script, global, optional}){
  const [showScript, setShowScript] = useState(false);
  return (
    <div className='card-container'>
          <h3>{title}</h3>
  <button className='script-button' onClick={() => setShowScript(e => !e)}>{help}</button>
          <div className={showScript ? 'script-show' : 'script-hide'}>
            {script.help.map((help, index) => {
              return (
                <p className='script-help' key={index}>
                  {help}
                </p>
              )
            })}
            {script.text.map((text, index) => {
              return (
                <p className='script-text' key={index}>
                  {text}
                </p>
              )
            })}
          </div>
          {
            global.map((member, index) => {
              return <CouncilMemberCard {...member} key={index} />
            })
          }
          {
            optional.map((member, index) => {
              return <CouncilMemberCard {...member} key={index} />
            })
          }
  </div>
  )

}

