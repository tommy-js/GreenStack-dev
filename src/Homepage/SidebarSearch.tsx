import React from "react";

interface Props {
  search: string;
  modSearch: (input: string) => void;
  submitSearch: () => void;
}

const SidebarSearch: React.FC<Props> = (props) => {
  function checkSubmit(key: any) {
    if (key.keyCode === 13) {
      props.submitSearch();
    }
  }

  return (
    <div>
      <input
        id="sidebar_search"
        placeholder="search..."
        value={props.search}
        onChange={(e) => props.modSearch(e.target.value)}
        onKeyDown={(e) => checkSubmit(e)}
      />
      <button onClick={() => props.submitSearch()}>Search</button>
    </div>
  );
};

export default SidebarSearch;
