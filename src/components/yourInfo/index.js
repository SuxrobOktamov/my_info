import React, { useEffect, useState } from 'react';
import '../style.css';
import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import useData from '../../store';
import { Link } from 'react-router-dom';

function YourInfo() {
  const {data, erorHandle, successHandle } = useData();
  const [isNext, setIsNext] = useState(true);

  const [isPrevOne, setIsPrevOne] = useState(false);
  const [isPrevTwo, setIsPrevTwo] = useState(false);
  const [isPrevThree, setIsPrevThree] = useState(false);
 

  function checHandle(id, e) {
    if(id === 1) {
        if(e.target.value.length === 0) {
            erorHandle(id)
            setIsPrevOne(false)
        }else {
          successHandle(id)
          setIsPrevOne(true)
        }
    };
    if(id === 2) {
      if(e.target.value.length === 0) {
          erorHandle(id)
          setIsPrevTwo(false)
      }else {
        successHandle(id)
        setIsPrevTwo(true)
      }
    };
    if(id === 3) {
      if(e.target.value.length <= 12 || !Number(e.target.value) ){
        erorHandle(id); 
        setIsPrevThree(false)
      }else{
        successHandle(id); 
        setIsPrevThree(true)
      };
    };
  };

  useEffect(() => {
    if(isPrevOne && isPrevTwo && isPrevThree){setIsNext(false)}else{setIsNext(true)};
  }, [isPrevOne, isPrevTwo, isPrevThree])

  function submitHandle(e) {
    e.preventDefault();
  }

  return (
    <div className='yourInfo'>
      <h1>Personal info</h1>
      <p>Please provider your name, email address and phone number.</p>
      <Box  
        className='form-control' 
        component="form" 
        noValidate 
        autoComplete="off" >
        {data.map((data) =>(
          <TextField 
            onChange={(e) => checHandle(data.id, e)}
            required
            helperText={data?.completed? 'Incorrect entry.': null}
            key={data?.id} 
            type={data?.type} 
            error={data?.completed} 
            id="outlined-basic" 
            label={data?.label} 
            variant="outlined" />
        ))}
        <ButtonGroup 
          className='btnGroup' 
          variant="contained" 
          aria-label="outlined primary button group">
          <Button style={{'visibility':'hidden'}}></Button>
          <Button 
            disabled={isNext} 
            onClick={(e) => submitHandle(e)} 
            type='submit'>
              <Link style={{'color':'#fff'}} to={'/steep2'}>Next</Link>
            </Button>
      </ButtonGroup>
      </Box>
    </div>
  )
}

export default YourInfo;