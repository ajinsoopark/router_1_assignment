import React from 'react';
import Image from './image';

const DisplayDogs = ({ dogArr }) => {

    let images = dogArr.map((url, i) => {
        return (
            <Image
             key={ i }
             url={ url }
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