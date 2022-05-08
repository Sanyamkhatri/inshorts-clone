import React from 'react'
import './NavInshorts.css'
import SwipeableTemporary from './SwipeableTemporary'

const NavInshorts = (props) => {
  return (
    <div className='nav'>
        <div className='icon'>
            <SwipeableTemporary setCategory = {props.setCategory} />
        </div>
        <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height='80%' alt='logo' style={{cursor : 'pointer'}}/>
    </div>
  )
}

export default NavInshorts