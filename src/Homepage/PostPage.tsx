import React, { useState, useEffect } from "react";
import { individualPostQuery } from "../queries/queries.js";
import { useQuery } from "react-apollo";

interface Props {
  postId: string;
}

const PostPage: React.FC<Props> = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const { loading, data } = useQuery(individualPostQuery, {
    variables: { postId: props.postId },
  });

  useEffect(() => {
    if (data) {
      setDataLoaded(true);
      console.log(data);
    }
  }, [data]);

  function returnLoading() {
    if (dataLoaded === true) {
      return (
        <div>
          <h2>loaded....</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Stil Loading...</h2>
        </div>
      );
    }
  }

  return <div>{returnLoading()}</div>;
};

export default PostPage;
