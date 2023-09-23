import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import WorkP from '../Pages/WorkPage/WorkP'
import Contact from '../Pages/Contact/Contact'
import Culture from '../Pages/Culture/Culture'
import Head from '../Sections/Header/Head'
import Solutions from '../Pages/Solutions/Solutions'
import Meanu from '../Pages/Meanu/Meanu'
import Carrier from '../Pages/Carrier/Carrier'
import Insight from '../Pages/Isight/Insight'
const Routess = () => {
  const [Onav, setOnav] = useState(false);
  // const Open=()=>{
  //   setOnav(true);
  // }
  //   console.log(Onav)

  // console.log(Onav);
  return (
    <div>
      <BrowserRouter>

        {

          Onav == false ? <Head onav={Onav} funx={setOnav} /> : ""
        }

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/solution' element={<Solutions funx={setOnav}/>} />
          <Route path='/work' element={<WorkP />} />
          <Route path='/culture' element={<Culture />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/carrier' element={<Carrier />} />
          <Route path='/insight' element={<Insight />} />
          <Route path='/meanu' element={<Meanu funx={setOnav}/>  } />




        </Routes>


      </BrowserRouter>

    </div>
  )
}

export default Routess
