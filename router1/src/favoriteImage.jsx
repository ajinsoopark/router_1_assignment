import React from 'react';
import { withRouter } from 'react-router';
import CommentSection from './commentSection';

const FavoriteImage = (props) => {
    let paramId = parseInt(props.match.params.id)
    let image;
    let imageComments;
    props.favoriteImages.forEach(imageObj => {
                if (imageObj.id === paramId) {
                    imageComments = imageObj.comments
                    image = <img src={ imageObj.url } alt='Doge' id={ imageObj.id } />
                }
            })
    return (
        <div>
            { image }
            <CommentSection  
             commentInput={ props.commentInput }
             addComment={ props.addComment }
             imageComments={ imageComments }
             imageId={ paramId }
             handleText={ props.handleText }
            />
        </div>
    )
}

export default withRouter(FavoriteImage);