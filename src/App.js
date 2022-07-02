import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Navbar from "./components/Navbar";

export default function App() {

 const [searchText ,setSearchText]=useState("");

  useEffect(() => {
    console.log(searchText); ;
    }, [searchText]); 


  return (
    <div className='fullscreen-container'>
      <div className='Navbar'>
        <Navbar/>
      </div>
      <div className='template'>
        <div className='search'>
            <div className='form-control'>
              <label htmlFor='number'>Search your order Number</label>
              <input
                type='name'
                name='OrderNo'
                id='OrderNo'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
              <button  className='submit'>search</button>
            </div>
        </div>
      </div>
    </div>
  )
}

