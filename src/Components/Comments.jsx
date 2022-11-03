import { useEffect, useState } from "react";
import { fetchComments } from "../api";


const Comments = () => {
  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    fetchComments().then((comments) => {
      setComments(comments);
      setIsLoading(false)
    });
  }, []);

  if(isLoading) return <h3>loading...</h3>

  return (
    <div className="commentsList">
        <h2>All the comments</h2>
        <ul className="commentPage">
            {comments.map((comment) => {
                return (
                    <div className="commentCard" key={comment.article_id}>
                        <li className="comment_article_id">Article ID number: {comment.article_id}
                        </li>
                        <li className="comments_author">Author: {comment.author}</li>
                        <li className="comments_body">{comment.body}</li>
                        <li className="comments_votes">Number of Votes: {comments.votes}</li>
                    </div>
                )
            })}
        </ul>
    </div>
  )
};

export default Comments
