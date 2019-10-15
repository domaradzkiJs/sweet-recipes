import React from 'react';

import  { Link } from 'react-router-dom';
import '../App.scss';

export const id__key = '39de34ae';
export const app__key = 'f2e9cea83bf59d778e5b5179040a4d29';

class Recipepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeRecipe: []
        }
    }

    componentDidMount = async () => {
       
       const uri = this.props.location.state.recipe;
       const req = await fetch( `https://api.edamam.com/search?app_id=${id__key}&app_key=${app__key}&r=${encodeURIComponent(uri)}`);
 
       
       const res = await req.json();
    
        this.setState({activeRecipe: res[0]}); 
       

   } 

   render() {
    const recipe =this.state.activeRecipe;
    return (
        <div className="container">
            {
                this.state.activeRecipe.length !==0  &&
                <div className="active-recipe">
                    <div className="active-recipe-bg-img" style={ {backgroundImage:`url(${recipe.image})`} } />
                    
                    <h3 className="active-recipe-title">{recipe.label}</h3>
                    <h4 className="active-recipe-publisher">
                        Publisher: <span>{recipe.source}</span>
                    </h4>
                    <p className="active-recipe-publisher">Website:
                        <span><a href={recipe.url}>{recipe.url}</a> </span>
                    </p>
                    <button className ="active-recipe-button" >
                    <Link to="/"> GO HOME</Link>
               
                    </button>                
                
             </div>
            }
        
        </div>
    )
   }

}

export default Recipepage;