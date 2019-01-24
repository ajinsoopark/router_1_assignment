import React, { Component } from 'react';
import FavoriteThumbnail from './favoriteThumbnail';

const FavoriteFeed = ({ favoriteImages }) => {

  let favorites = favoriteImages.map((image, i ) => {
      return (
          <FavoriteThumbnail
            url={ image.url }
            id={ image.id }
            key={ i }
            />
      )
  })

    return (
        <div className='favoriteFeed'>
            { favorites }
        </div>
    )
};

export default FavoriteFeed;