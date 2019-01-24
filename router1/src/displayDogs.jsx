import React from 'react';
import Image from './image';

const DisplayDogs = ({ dogArr, addFavImage }) => {
    let images = dogArr.map((url, i) => {
        return (
            <Image
             key={ i }
             url={ url }
             addFavImage={ addFavImage }
            />
        )
    })

    return (
        <React.Fragment>
            { images }
        </React.Fragment>
    )
}

export default DisplayDogs