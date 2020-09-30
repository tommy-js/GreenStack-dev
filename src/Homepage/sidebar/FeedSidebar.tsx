import React, { useState, useEffect } from "react";
import SidebarUsername from "./SidebarUsername";
import SidebarSearch from "./SidebarSearch";
import SidebarElement from "./SidebarElement";
import { searchUserQuery } from "../../queries/queries.js";
import { useLazyQuery } from "react-apollo";

const FeedSidebar: React.FC = () => {
  const [search, setSearch] = useState("");

  const [searchUser, { loading, data }] = useLazyQuery(searchUserQuery);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  function modSearch(input: string) {
    setSearch(input);
  }

  function submitSearch() {
    searchUser({
      variables: {
        username: search,
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
