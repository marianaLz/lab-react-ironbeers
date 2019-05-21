import React from "react";

const Search = ({ onChange }) => (
  <div className="uk-flex uk-flex-right">
    <form class="uk-search uk-search-default uk-width-xlarge">
      <span class="uk-search-icon-flip" uk-search-icon="true" />
      <input
        class="uk-search-input"
        type="search"
        name="q"
        placeholder="Search..."
        onChange={e => onChange(e)}
      />
    </form>
  </div>
);

export default Search;
