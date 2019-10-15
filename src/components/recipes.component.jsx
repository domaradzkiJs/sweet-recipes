import React from 'react';

import { Link } from "react-router-dom";

const Recipes = props=> (
    <div className="recipes-container">
    
    {(props.recipesData || []).map((ele)=>{
      return (

        <div key={ele.recipe.uri} className="recipe-card">
        <div className="recipe-bg-img" style={ {backgroundImage:`url(${ele.recipe.image})`} }/>
        
        <div className="recipe-text">
          <div className="recipe-title">{ ele.recipe.label.length < 20 ? `${ele.recipe.label}` : `${ele.recipe.label.substring(0, 25)}...` }</div>
         
          <button className="btn">
           <Link to={{
            pathname: `/recipe/${ele.recipe.uri.split("_")[1]}`,
            state: {recipe: ele.recipe.uri                    
              } 
        
           }} >View Recipe </Link>
          
          </button>
        </div>
        
      </div>


      )

    })} 

     
    </div>

)

export default Recipes;