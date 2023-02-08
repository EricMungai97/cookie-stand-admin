import React from 'react';
import { useState } from 'react';

function Form() {
  const [reportTable, setReportTable] = useState([])
  function inputHandler(e) {
    e.preventDefault();
    const cookieStand = {
      location: e.target.location.value,
      minCustomers: e.target.minCust.value,
      maxCustomers: e.target.maxCust.value,
      avgCookies: e.target.avgCookies.value
    }

    setReportTable([...reportTable, cookieStand])

  }
  return (
    <div className=''>

      <form onSubmit={inputHandler} className="bg-violet-400 rounded border-2 text-white border-violet-400 justify-center mt-10 p-5 mr-20 ml-20 ">
        <div>
        <h2 className='text-2xl font-sans-bold flex justify-center'>Create Cookie Stand</h2>
        </div>
        <fieldset>
        <label className='p-2' htmlFor="location">Location</label>
        <input className="text-black" name="location" />
        </fieldset>
        <div className='flex'>
        <fieldset className="flex-grow" >
        <legend className='flex flex-col'>Minimum Customers per Hour</legend>
        <input className="text-black" name="minCust" />
        </fieldset>
        <fieldset className='flex-grow'>
        <legend>Maximum Customers per Hour</legend>
        <input className="text-black" name="maxCust" />
        </fieldset>
        <fieldset className='flex-grow'>
        <legend>Average Cookie per Sale</legend>
        <input className="text-black" name="avgCookies" />

        </fieldset>
        <button className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 mt-4">Create</button>
        </div>
        
      </form>
      <div className='flex justify-center'>
      <p >Report Table Coming Soon...</p>
      </div>
      <div className='flex justify-center'>
      {reportTable.map((cookieStand, idx) => {
        return (
            <p key={idx}>
              {JSON.stringify({ cookieStand })}
            </p>
      


        );
      })

      }</div>
    
    
    </div>
    
  );
}

export default Form;