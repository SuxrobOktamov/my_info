import React from 'react';
import '../style.css';
import { Button, ButtonGroup, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import useData from '../../store';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function AddOns() {
  const {
    addDataYear, 
    addDataMonth, 
    isBuy, 
    checkMonth, 
    checkYear, 
    addYears, 
    addMonths
  } = useData();

  function checkedHandle(id) {
    checkMonth(id);
    checkYear(id);
    addYears();
    addMonths();
  };

  function submitHandle(e) {e.preventDefault()};

  return (
    <div className='yourInfo'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming exprience.</p>
      <div className='add-box'>
        {isBuy? addDataYear.map(item => (
            <div key={item?.id} className={`add-years ${item?.completed?'active': null}`}>
                <Checkbox 
                  defaultChecked={item?.completed} 
                  onClick={() => checkedHandle(item?.id)}  
                  {...label} />
                <div className='Arcade'>
                    <h3>{item?.name}</h3>
                    <span>{item?.title}</span>
                </div>
                <span className='plus-year'>+${item?.addPrice}/yr</span>
            </div>
        )):addDataMonth.map(item => (
            <div key={item?.id} className={`add-years ${item?.completed?'active': null}`}>
                <Checkbox 
                  defaultChecked={item?.completed} 
                  onClick={() => checkedHandle(item?.id)} 
                  {...label} />
                <div className='Arcade'>
                    <h3>{item?.name}</h3>
                    <span>{item?.title}</span>
                </div>
                <span className='plus-year'>+${item?.addPrice}/mo</span>
            </div>
        ))}
      </div>
      <ButtonGroup 
          className='btnGroup' 
          variant="contained" 
          aria-label="outlined primary button group">
          <Button variant='outlined'>
            <Link style={{'color':'#046abc'}} to={'/steep2'}> Go Back</Link>
          </Button>
          <Button onClick={(e) => submitHandle(e)}  type='submit'>
            <Link style={{'color':'#fff'}} to={'/steep4'}>Next</Link>
          </Button>
      </ButtonGroup>
    </div>
  )
}

export default AddOns;