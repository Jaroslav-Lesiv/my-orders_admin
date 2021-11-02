import React from 'react'
import { SearchConteiner } from '../components/Search'


export const Search = ({children, className}) =>{
    return(
        <SearchConteiner>
          <div className="icon-search"></div>
          <input placeholder="Search"></input>
        </SearchConteiner>
    )
}