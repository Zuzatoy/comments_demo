import React, { useState, useEffect, Fragment } from "react";
import "./styles.css";

const Comment = ({ text, author, date }) => {
  return (
    <li className="CommentItem">
      <ul>
        <li> Author {author}</li>
        <li> Comment: {text}</li>
        <li> Date: {date}</li>
      </ul>
    </li>
  );
};

const AddCommentForm = ({
  handleSubmitComment,
  author,
  setAuthor,
  text,
  setText,
}) => {
  return (
    <form onSubmit={handleSubmitComment}>
      <label>
        {" "}
        Author:
        <input
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br></br>
      </label>
      <br></br>
      <label>
        {" "}
        Add comment
        <textarea
          value={text}
          name="comment"
          required
          onChange={(e) => setText(e.target.value)}
          rows="3"
          cols="33"
        />{" "}
        <br></br>{" "}
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

const dateToLocal = (data) => {
  return new Date(data).toLocaleString();
};

export const Comments = () => {
  const [commentsList, setCommentsList] = useState({ comments: [] });
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [activeCommentId, setActiveCommentId] = useState("");

  useEffect(() => {
    getComments();
  }, []);

  const handleSubmitComment = (event) => {
    event.preventDefault();
    setDateTime(new Date().toLocaleString());

    const newComment = {
      id: Date.now(),
      text: text,
      author: author,
      dateTime: dateTime,
    };

    setCommentsList({ comments: [...commentsList.comments, newComment] });
  };

  const getActiveComment = async (id) => {
    setActiveCommentId(id);
    console.log(commentsList.comments);
    console.log("Im active ID", activeCommentId);
    console.log(commentsList.comments.find((x) => x.id === id));
    //const findComment = commentsList.comments.find(activeCommentId);
    //console.log("Found!", findComment)
  };

  const getComments = async () => {
    try {
      const result = await fetch("./data.json");
      if (result.ok) {
        return setCommentsList(await result.json());
      }
      throw new Error("Something went wrong!");
    } catch (error) {
      throw new Error(`Sorry an error here ${error}`);
    }
  };

  return (
    <div>
        <h1>Comments: </h1>
      <ul className="CommentsList">
        {Boolean(commentsList.comments.length) &&
          commentsList.comments.map((comment) => {
            const { text, author, dateTime } = comment;
            const date = dateToLocal(dateTime);
            return (
              <Fragment key={comment.id}>
                <Comment
                  text={text}
                  author={author}
                  date={date}
                />
                <button onClick={() => getActiveComment(comment.id)}>
                  Update comment from {author}
                </button>
              </Fragment>
            );
          })}
      </ul>
      <>
        <AddCommentForm
          handleSubmitComment={handleSubmitComment}
          author={author}
          setAuthor={setAuthor}
          text={text}
          setText={setText}
        />
      </>
    </div>
  );
};
