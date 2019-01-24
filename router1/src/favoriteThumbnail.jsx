import React from 'react';
import { withRouter } from 'react-router';

const FavoriteThumbnail = ({ url, id, history }) => {

   const reRouteOnClick = (event) => {
    history.push(`/favorite/${event.target.id}`)
   }

    return (
        <div className='favoriteThumbDiv'>
            <img className='favoriteThumbnail' src={ url } id={ id } alt='Dog Image' onClick={ reRouteOnClick }/>
        </div>
    )
}

export default withRouter(FavoriteThumbnail);