import React, { FC } from "react";
// import SearchField from "react-search-field";

import { SearchField } from '../../../to-move/types/react-search-field'

type SearchBarProps = {
    onChange: (e: any) => void;
    onEnter: () => void;
}

const SerachBar: FC<SearchBarProps> = ({ onChange, onEnter }) => (
    <SearchField
      classNames="test-class"
      placeholder="Search for a country..."
      onChange={onChange}
      onEnter={onEnter}
      onSearchClick={onEnter}
    />
  )

export default SerachBar
