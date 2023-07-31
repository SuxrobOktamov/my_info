import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Steeps from '../components/steeps/index.js';
import SelectPlan from '../components/selectPlan/index.js';
import YourInfo from '../components/yourInfo/index.js';
import AddOns from '../components/addOns/index.js';
import FinishingUp from '../components/finishingUp/index.js';


function Home() {
  
  return (
    <div className='home'>
      <Steeps />
      <div className='personal'>
        <Routes>
          <Route path='/' element={<YourInfo />} />
          <Route path='/steep2' element={<SelectPlan />} />
          <Route path='/steep3' element={<AddOns />} />
          <Route path='/steep4' element={<FinishingUp />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home;