import React from 'react';


const Comments = ({ comment }) => {
    return (
        <div className='comment'>
            <p>{ comment }</p>
        </div>
    )
};

export default Comments;