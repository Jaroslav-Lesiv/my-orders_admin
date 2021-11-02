

import { SearchContainer } from '../../containers/header/HeaderContainer'


export const Search = ({children, className}) =>{
    return(
        <SearchContainer>
          <div className="icon-search"></div>
          <input placeholder="Search"></input>
        </SearchContainer>
    )
}