import React, { useEffect, useState } from 'react';
import '../style.css';
import {Button, ButtonGroup, Switch } from '@mui/material';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Link } from 'react-router-dom';
import useData from '../../store';



function SelectPlan() {
  const [orientation, setOrientation] = React.useState('vertical');
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    month ,
    years , 
    isBuy, 
    changBuyHandle, 
    changePriceMonth, 
    changePriceYears,
    changeMonth,
    changeYear
  } = useData();

  function submitHandle(e) {e.preventDefault()}
  function activeHandle() {changBuyHandle()};

  function changePriceHandle(id) {
    changePriceMonth(id);
    changePriceYears(id);
    changeMonth(id);
    changeYear(id);
  };

  let arrOne = [];
  let arrTwo = [];

  month.forEach(item => {
    if(item.class === 'active') {
      arrOne.push(item);
    }
  });

  years.forEach(item => {
    if(item.class === 'active') {
      arrTwo.push(item);
    }
  });

  useEffect(() => {
    if((arrOne.length < 1 && !isBuy) || (arrTwo.length < 1 && isBuy)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [month, years, arrOne.length, arrTwo.length, isBuy]);

  return (
    <div className='yourInfo'>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly biling</p>
        <div className='box-title'>
            {
              isBuy? years.map(item => (
                <div 
                  onClick={() => changePriceHandle(item.id)}
                  key={item?.id} 
                  className={`box ${item?.class}`}>
                    <WorkspacePremiumOutlinedIcon />
                    <div className='Arcade'>
                      <h3>{item?.name}</h3>
                      <span>${item?.title}/yr</span>
                      <p>{item?.sale}</p>
                    </div>
                </div>
              )):month.map(item => (
                <div 
                  onClick={() => changePriceHandle(item.id)}
                  key={item?.id} 
                  className={`box ${item?.class}`}>
                    <WorkspacePremiumOutlinedIcon />
                    <div className='Arcade'>
                      <h3>{item?.name}</h3>
                      <span>${item?.title}/mo</span>
                    </div>
                </div>
              ))
            }
        </div>
        <div className='checked'>
          <span className={`${isBuy?'_actives': null}`}>Monthly</span>
          <Switch
            onClick={activeHandle}
            className='switch'
            size="sm"
            checked={orientation === 'horizontal'}
            onChange={(event) =>
              setOrientation(event.target.checked ? 'horizontal' : 'vertical')
            }/>
            <span className={`${!isBuy?'_actives': null}`}>Yearly</span>
        </div>
        <ButtonGroup 
          className='btnGroup' 
          variant="contained" 
          aria-label="outlined primary button group">
          <Button variant='outlined'>
            <Link style={{'color':'#046abc'}} to={'/'}> Go Back</Link>
          </Button>
          <Button disabled={isDisabled} onClick={(e) => submitHandle(e)}  type='submit'>
            <Link style={{'color':'#fff'}} to={'/steep3'}>Next</Link>
          </Button>
      </ButtonGroup>
    </div>
  )
}

export default SelectPlan;