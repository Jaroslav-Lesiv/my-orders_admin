import { SearchContainer } from "../../styles/Search/Search"


export const Search = ({  children:any , className }) => {
  return (
    <SearchContainer>
      <div className="icon-search"></div>
      <input placeholder="Search"></input>
    </SearchContainer>
  );
};
