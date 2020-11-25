import React, { useState, useEffect } from "react";
import { FeedModal } from "../../feed/FeedModal/FeedModal";
import { useQuery } from "react-apollo";
import { individualPostQuery } from "../../../queries/queries";

interface Props {
  postId: string;
  modPostLoad: (postId: string) => void;
}

export const ProfileFeedRender: React.FC<Props> = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [postInfo, setPostInfo] = useState();
  const { data } = useQuery(individualPostQuery, {
    variables: { postId: props.postId },
  });

  useEffect(() => {
    if (data) {
      setPostInfo(data.post);
      setLoaded(true);
    }
  }, [data]);

  function renderIfLoaded() {
    if (loaded === true)
      return <FeedModal data={postInfo} modPostLoad={props.modPostLoad} />;
    else return null;
  }

  return <div>{renderIfLoaded()}</div>;
};
