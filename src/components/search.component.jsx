import React from 'react';
import { ReactComponent as SearchIco } from '../assets/search.svg';

const Search = props => (

    <form className="search-form" onSubmit={props.getRecipe}>
        
        <input className="search" type="text" name="recipeName" placeholder="Look for tasty recipes..."></input>
        <button className="search-btn">
          <SearchIco className="searchIcon"/>
        </button>           
    </form>

);

export default Search;