import React from 'react';
import { Pie } from 'react-chartjs-2';



export default function Budget({ budget }){
  return (
    <div className='budget'>
      <h2>Proposed city budget for 2021</h2>
      <Pie
          data={budget}
          options={{
            title:{
              display:true,
              text: "FY 2021 General Fund Expenditures - $718.8 million",
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      <a className='budget-link' target="_blank" rel="noopener noreferrer" href={budget.help.link}>{budget.help.text}</a>
    </div>
  )
}