import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='text-light  align-items-start'>
      <nav className='navbar container pt-3 pb-3'>
        <a href="" className='navbar-brand text-light'>Stock Prediction Portal</a>
        <div>
          <Button text="log in"/>
          &nbsp;
          <Button text="register"/>
        </div>
      </nav>
    </div>
  )
}

export default Header
