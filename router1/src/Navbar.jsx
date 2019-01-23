import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <div className='breedLink'>
                <Link to={ '/randomBreed' }>Random Breed</Link>
            </div>
            <div className='randomLink'>
                <Link to={ '/random' }>Random Dog</Link>
            </div>
        </nav>
    )
}

export default Navbar;