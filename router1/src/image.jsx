import React from 'react';

 
const Image = ({ url, addFavImage }) => {
    return (
        <div className='dogImage'>
            <img src={ url } alt='Dog Image'/>
            <div className='favoriteButton'>
                <button name='favoriteButton' onClick={() => addFavImage(url) } >Add to favorites</button>
            </div>
        </div>
    )
}

export default Image;