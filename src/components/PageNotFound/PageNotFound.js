import React from 'react'
import pnf from '../../images/pnf.jpg';
import './PageNotFound.scss';
export default function PageNotFound() {
  return (
    <div className='pageNotFound'>
      <img src={pnf} alt='Page Not Found'/>
    </div>
  )
}
