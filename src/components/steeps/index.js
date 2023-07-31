import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import SelectSmall from '../lang';
import '../../i18next';

function Steeps() {
  const {t} = useTranslation();

  return (
    <div className='information'>
        <SelectSmall />
        <ul className='information-list'>
          <li className='information-item'>
            <NavLink to={'/'} className='item-link '>
              <span>1</span>
            </NavLink>
            <div className='item-step'>
              <p>{t('step')}1</p>
              <h3>{t('info')}</h3>
            </div>
          </li>
          <li className='information-item'>
            <NavLink to={'/steep2'} className='item-link'>
              <span>2</span>
            </NavLink>
            <div className='item-step'>
              <p>{t('step')}2</p>
              <h3>{t('select')}</h3>
            </div>
          </li>
          <li className='information-item'>
            <NavLink to={'/steep3'} className='item-link'>
              <span>3</span>
            </NavLink>
            <div className='item-step'>
              <p>{t('step')}3</p>
              <h3>{t('add')}</h3>
            </div>
          </li>
          <li className='information-item'>
            <NavLink to={'/steep4'} className='item-link'>
              <span>4</span>
            </NavLink>
            <div className='item-step'>
              <p>{t('step')}4</p>
              <h3>{t('summary')}</h3>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default Steeps