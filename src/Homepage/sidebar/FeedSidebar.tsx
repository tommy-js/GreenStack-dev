import React, { useState, useEffect } from "react";
import SidebarUsername from "./SidebarUsername";
import SidebarSearch from "./SidebarSearch";
import SidebarElement from "./SidebarElement";
import { searchQuery } from "../../queries/queries.js";
import { useLazyQuery } from "react-apollo";

interface Props {
  modRes: (searchData: any, dataType: number) => void;
}

const FeedSidebar: React.FC<Props> = (props) => {
  const [search, setSearch] = useState("");

  const [searchUser, { loading, data }] = useLazyQuery(searchQuery);

  useEffect(() => {
    if (data) {
      if (data.searchUser) {
        let searchData = {
          username: data.searchUser.username,
          userId: data.searchUser.userId,
          profileImage: data.searchUser.profileImage,
          bio: data.searchUser.bio,
        };
        let dataType = 0;
        props.modRes(searchData, dataType);
      } else if (data.searchStock) {
        let searchData = {
          title: data.searchStock.title,
          ticker: data.searchStock.ticker,
          description: data.searchStock.description,
          country: data.searchStock.country,
          stockId: data.searchStock.stockId,
        };
        let dataType = 1;
        props.modRes(searchData, dataType);
      }
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
