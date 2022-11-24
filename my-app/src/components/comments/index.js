function Comments({ comment }) {
  return (
    <p key={comment.comment_id}>
      {comment.username}: {comment.contents}
    </p>
  );
}

export default Comments;
