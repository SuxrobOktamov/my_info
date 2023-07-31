import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import i18n from '../../i18next';

export default function SelectSmall() {

  function translateHandle(e) {

    if(e.target.value === 'uzb') {
        i18n.init({ lng: 'uz'});
    }else if(e.target.value === 'rus') {
        i18n.init({ lng: 'ru'});
    }else {
      i18n.init({ lng: 'en'});
    }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='language'>
      <select onChange={(e) => translateHandle(e)} className='selct'>
        <option value='eng' aria-selected='true' >ENG</option>
        <option value='uzb'>UZB</option>
        <option value='rus'>RUS</option>
      </select>
    </FormControl>
  );
}