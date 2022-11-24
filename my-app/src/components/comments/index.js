function Comments({ comment }) {
  return (
    <p key={comment.comment_id}>
      <span className='userCommentName'>{comment.username}:</span> {comment.contents}
    </p>
  );
}

export default Comments;
