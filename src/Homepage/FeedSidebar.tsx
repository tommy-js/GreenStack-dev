import React, { useState } from "react";
import SidebarSearch from "./SidebarSearch";
import SidebarElement from "./SidebarElement";

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
      <SidebarSearch
        search={search}
        modSearch={modSearch}
        submitSearch={submitSearch}
      />
      <SidebarElement text="Post" path="/" />
      <SidebarElement text="Followers" path="/profile/followed" />
      <SidebarElement text="Following" path="/profile/following" />
      <SidebarElement text="Explore" path="/" />
    </div>
  );
};

export default FeedSidebar;
