import React, { useState } from "react";
import SidebarUsername from "./SidebarUsername";
import SidebarSearch from "./SidebarSearch";
import SidebarElement from "./SidebarElement";
import { Link } from "react-router-dom";

const FeedSidebar: React.FC = () => {
  const [search, setSearch] = useState("");

  function modSearch(input: string) {
    setSearch(input);
  }

  function submitSearch() {
    console.log("searched");
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
      <SidebarElement text="Post" path="/home/post" />
      <SidebarElement text="Followers" path="/profile/followed" />
      <SidebarElement text="Following" path="/profile/following" />
    </div>
  );
};

export default FeedSidebar;
