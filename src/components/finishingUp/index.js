import React, { useState } from 'react';
import '../style.css';
import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import useData from '../../store';
import Conform from '../conform';

function FinishingUp() {

  const [isConform, setIsConform] = useState(false);

  const {
    monthOne, 
    yearsOne, 
    isBuy, 
    dataYear, 
    dataMonth
  } = useData();

  let subTotalMo = 0;
  monthOne.forEach(item => {
    subTotalMo += item.title;
  });
  dataMonth.forEach(item => {
    subTotalMo += item.addPrice;
  });

  let subTotalYr = 0;
  yearsOne.forEach(item => {
    subTotalYr += item.title;
  });
  dataYear.forEach(item => {
    subTotalYr += item.addPrice;
  });

  function submitHandle(e){e.preventDefault(); setIsConform(true)};

  return (
    <div className='yourInfo'>
      {isConform? <Conform />: null}
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK befor confirming.</p>
        <ul className='finish-list'>
                {
                  isBuy? yearsOne.map(item => (
                    <li key={item?.id} className='finish-items'>
                      <h3>{item?.name}({item?.years})</h3>
                      <span>${item?.title}/yr</span>
                    </li>
                  )): monthOne.map(item => (
                    <li key={item?.id} className='finish-items'>
                      <h3>{item?.name}({item?.month})</h3>
                      <span>${item?.title}/mo</span>
                    </li>
                  ))
                }
            <li className='finish-items'>
                <ul className='list-item'>
                    {
                      isBuy? dataYear.map((item) => (
                        <li key={item?.id} className='item'>
                            <p>{item?.name}</p>
                            <span>+${item?.addPrice}/yr</span>
                        </li>
                      )):dataMonth.map((item) => (
                        <li key={item?.id} className='item'>
                            <p>{item?.name}</p>
                            <span>+${item?.addPrice}/mo</span>
                        </li>
                      ))
                    }
                </ul>
            </li>
            {
              isBuy? (
                <li className='finish-items'>
                    <p>Total(per year)</p>
                    <span className='plus-year'>+${subTotalYr}/yr</span>
                </li>):
                (<li className='finish-items'>
                    <p>Total(per month)</p>
                    <span className='plus-year'>+${subTotalMo}/mo</span>
                </li>)
            }
        </ul>
      <ButtonGroup 
          className='btnGroup' 
          variant="contained" 
          aria-label="outlined primary button group">
          <Button variant='outlined'>
            <Link style={{'color':'#046abc'}} to={'/steep3'}> Go Back</Link>
          </Button>
          <Button color='secondary' onClick={(e) => submitHandle(e)}  type='submit' >Conform</Button>
      </ButtonGroup>
    </div>
  )
}

export default FinishingUp;