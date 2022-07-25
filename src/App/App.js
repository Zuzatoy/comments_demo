import React from "react";
import { useState } from "react";
import { Comments } from "../Comments";

const ButtonGroup = ({
  likes,
  dislike,
  likeText,
  dislikeText,
  handleChandeLike,
  handleCandidateDislike,
}) => {
  return (
    <>
      <span>
        <button onClick={handleChandeLike}>
          {likeText} | <span>{likes}</span>
        </button>
        <button onClick={handleCandidateDislike}>
          {dislikeText} | <span>{dislike}</span>
        </button>
      </span>
    </>
  );
};

export const App = () => {
  const [likes, setLikes] = useState(100);
  const [dislike, setDislike] = useState(25);

  const handleChandeLike = () => {
    setLikes(likes + 1);
  };

  const handleCandidateDislike = () => {
    setDislike(dislike + 1);
  };
  return (
    <>
      <ButtonGroup
        handleCandidateDislike={handleCandidateDislike}
        handleChandeLike={handleChandeLike}
        likeText="Like"
        dislikeText="Dislike"
        likes={likes}
        dislike={dislike}
      />
      <Comments />
    </>
  );
};
