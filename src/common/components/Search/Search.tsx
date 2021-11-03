import { SearchContainer } from "../../styles/Search/Search"
import React from 'react';


export const Search = ({  children,className }: any) => {
  return (
    <SearchContainer>
      <div className="icon-search"></div>
      <input placeholder="Search"></input>
    </SearchContainer>
  );
};
