
import axios from 'axios'
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';


function App() {
  const [phones, setPhones]=useState([])

 useEffect(()=>{
  axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
  .then(data=>setPhones(data.data.data))
 },[])


  return (
    <>
     
      <h1 className='text-7xl bg-slate-500'>Price Options</h1>
   <div>
    {
      phones.map(phone=><h1>{phone.phone_name}</h1>)
    }
   </div>
         
    </>
  )
}

export default App
