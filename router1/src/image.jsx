import React from 'react';

const Image = ({ url }) => {
    return (
        <div className='dogImage'>
            <img src={ url } alt='Dog Image'/>
        </div>
    )
}

export default Image;