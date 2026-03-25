import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='bg-black text-white py-2 px-7'>
        <h1 className='text-xl'>React App</h1>

        <nav>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'hjg'}>NotFound</NavLink>
        </nav>

    </div>
  )
}
