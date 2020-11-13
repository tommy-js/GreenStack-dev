import React, { useState, useEffect } from "react";
import SidebarUsername from "./SidebarUsername";
import SidebarSearch from "./SidebarSearch";
import SidebarElement from "./SidebarElement";
import { searchQuery } from "../../queries/queries.js";
import { useLazyQuery } from "react-apollo";

interface Props {
  modRes: (
    username: string,
    userId: string,
    profileImage: string,
    bio: string
  ) => void;
}

const FeedSidebar: React.FC<Props> = (props) => {
  const [search, setSearch] = useState("");

  const [searchUser, { loading, data }] = useLazyQuery(searchQuery);

  useEffect(() => {
    if (data && data.searchUser) {
      console.log("data from FeedSidebar");
      console.log(data);
      let username = data.searchUser.username;
      let userId = data.searchUser.userId;
      let profileImage = data.searchUser.profileImage;
      let bio = data.searchUser.bio;
      props.modRes(username, userId, profileImage, bio);
    }
  }, [data]);

  function modSearch(input: string) {
    setSearch(input);
  }

  function submitSearch() {
    searchUser({
      variables: {
        argument: search,
      },
    });
  }

  return (
    <div id="feed_sidebar">
      <SidebarUsername />
      <SidebarSearch
        search={search}
        modSearch={modSearch}
        submitSearch={submitSearch}
      />
      <SidebarElement text="User Feed" path="/home" />
      <SidebarElement text="Explore" path="/home/explore" />
      <SidebarElement text="Your Posts" path="/home/posts" />
      <SidebarElement text="Followers" path="/home/followers" />
      <SidebarElement text="Following" path="/home/following" />
    </div>
  );
};

export default FeedSidebar;
