import React, { useState, useEffect } from "react";
import { PostRender } from "../PostRender/PostRender";
import { LoadingGeneral } from "../../../login/Loading/Loading";
import { individualPostQuery } from "../../../queries/queries.js";
import { useQuery } from "react-apollo";

interface Props {
  postId: string;
}

interface Data {
  title: string;
  text: string;
  userId: string;
  likes: number;
  dislikes: number;
  timestamp: number;
  postId: string;
  accompaniedURL: string;
  allowLikes: boolean;
  allowComments: boolean;
  comments: {
    userId: string;
    username: string;
    commentId: string;
    timestamp: number;
    text: string;
    likes: number;
    dislikes: number;
  }[];
}

export const PostPage: React.FC<Props> = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [info, setInfo] = useState({} as Data);
  const { data } = useQuery(individualPostQuery, {
    variables: { postId: props.postId },
  });

  useEffect(() => {
    if (data && data.post) {
      setDataLoaded(true);
      setInfo({
        text: data.post.text,
        title: data.post.title,
        userId: data.post.userId,
        likes: data.post.likes,
        dislikes: data.post.dislikes,
        timestamp: data.post.timestamp,
        postId: data.post.postId,
        comments: data.post.comments,
        accompaniedURL: data.post.accompaniedURL,
        allowLikes: data.post.allowLikes,
        allowComments: data.post.allowComments,
      });
    }
  }, [data]);

  function returnLoading() {
    if (dataLoaded === true) return <PostRender info={info} />;
    else return <LoadingGeneral />;
  }

  return <React.Fragment>{returnLoading()}</React.Fragment>;
};
