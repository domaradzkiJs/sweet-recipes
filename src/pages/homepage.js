import React from 'react';

import Header from '../components/header.component';
import Recipes from '../components/recipes.component';

export const id_key = '39de34ae';
export const app_key = 'f2e9cea83bf59d778e5b5179040a4d29';


class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            recipes: []
        };
    }


    componentDidMount = () => {
        const json =localStorage.getItem("recipes");
        const recipes =JSON.parse(json);
        this.setState({recipes: recipes});
      
      }
      
    componentDidUpdate = () => {
        const recipes= JSON.stringify(this.state.recipes);
        localStorage.setItem("recipes",recipes)
    
    }


     getRecipe= async (e)=> {
        e.preventDefault();
        const recipeName= e.target.elements.recipeName.value;
    
        const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${id_key}&app_key=${app_key}&from=0&to=12`);
     
       
        const data = await api_call.json();
        this.setState({recipes: data.hits}); 
         console.log(this.state);

    }

    render() {
        
        return(
            
            <div className="homepage">
            <Header getRecipe={this.getRecipe}></Header>
            <Recipes  recipesData={this.state.recipes}/>
        </div>

        );
    }


}



export default Homepage;