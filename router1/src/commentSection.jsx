import React from 'react';
import Comment from './comment';

const CommentSection = ({ addComment, commentInput, imageComments, imageId, handleText }) => {

    const comments = imageComments ? imageComments.map(comment => {
        return (
          <Comment 
           comment={ comment }
           />
        )
      }) : '';

    return (
        <div className='commentSection'>
           { comments } 
           <div className='formDiv'>
            <form>
                <input type='text' placeholder='Add your comment' name='commentInput' value={ commentInput } onChange={ handleText }/>
                <input type='submit' className='submitButton' value='Add Comment' onClick={(event) => {  event.preventDefault(); addComment(imageId) } }/>
            </form>
           </div>
        </div>
    )
}

export default CommentSection