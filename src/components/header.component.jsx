import React from 'react';
import '../App.scss';
import Search from './search.component';
import Likes from './likes.component';


 const Header = props => ( 

    <div className="header"> 
    
    <div className="menu-items">

      <div className="logo-container">
        <div className="logo"></div>
        <div className="logo-type">Sweet Recipes</div>      
      </div>

        <Search getRecipe={props.getRecipe}></Search>

    { /*  <Likes/> */}
    <div></div>
      
    </div>     
   </div>


)


export default Header; 

