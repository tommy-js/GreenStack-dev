import React, { useState, useEffect } from "react";
import PostRender from "./PostRender";
import { LoadingGeneral } from "../../login/LoadingUser";
import { individualPostQuery } from "../../queries/queries.js";
import { useQuery } from "react-apollo";

interface Props {
  postId: string;
}

interface Data {
  title: string;
  text: string;
  likes: number;
  dislikes: number;
  timestamp: number;
  postId: string;
  accompaniedURL: string;
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

const PostPage: React.FC<Props> = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [info, setInfo] = useState({} as Data);
  const { loading, data } = useQuery(individualPostQuery, {
    variables: { postId: props.postId },
  });

  useEffect(() => {
    if (data && data.post) {
      setDataLoaded(true);
      console.log(data);
      setInfo({
        text: data.post.text,
        title: data.post.title,
        likes: data.post.likes,
        dislikes: data.post.dislikes,
        timestamp: data.post.timestamp,
        postId: data.post.postId,
        comments: data.post.comments,
        accompaniedURL: data.post.accompaniedURL,
      });
    }
  }, [data]);

  function returnLoading() {
    if (dataLoaded === true) {
      return (
        <div>
          <PostRender info={info} />
        </div>
      );
    } else {
      return (
        <div>
          <LoadingGeneral />
        </div>
      );
    }
  }

  return <div>{returnLoading()}</div>;
};

export default PostPage;
