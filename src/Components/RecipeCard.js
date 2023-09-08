import './RecipeCard.css';
import Popup from 'reactjs-popup'
import { useState } from 'react';

//reusable component for menu item and recipe card
export function RecipeItem(props) {
    const [contents, setContents] = useState(0) //use state function to determine that will be shown on the recipe body
    const [ingredients, ingredientsClicked] = useState('clicked')
    const [procedure, procedureClicked] = useState('procedureMenu')

    //design of buttons when "ingredients" is clicked
    function setIngredientsClicked() {
        setContents(0)
        ingredientsClicked('clicked')
        procedureClicked('procedureMenu')
    }

    //design of buttons when "procedure" is clicked
    function setProcedureClicked() {
        setContents(1)
        ingredientsClicked('ingredientsMenu')
        procedureClicked('clicked')
    }

    return (
        <Popup trigger={<div className='recipeItem' >
            <img className='recipeImage' src={props.image} alt={props.title} />
            <h1 className='recipeTitle'>{props.title}</h1>
        </div>}
            modal nested>{close => (<div className='recipeCardContainer' >
                <div className='recipeCard'>
                    <button className='backButton' onClick={() => close()}>Back</button>
                    <h1 className='title'>{props.title}</h1>
                    <div className='recipeCardBody'>
                        <div className='imageContainer'>
                            <img className='recipeCardImage' src={props.image} alt={props.title} />
                        </div>

                        <div className='description'>
                            <div className='links'>
                                <button className={ingredients} onClick={() => setIngredientsClicked()}>Ingredients</button>
                                <button className={procedure} onClick={() => setProcedureClicked()}>Procedure</button>
                            </div>

                            <div className='recipeBody'>
                                {contents === 0 &&
                                    <div>
                                        <p>{props.ingredients1}</p>
                                        <p>{props.ingredients2}</p>
                                        <p>{props.ingredients3}</p>
                                        <p>{props.ingredients4}</p>
                                        <p>{props.ingredients5}</p>
                                        <p>{props.ingredients6}</p>
                                        <p>{props.ingredients7}</p>
                                        <p>{props.ingredients8}</p>
                                        <p>{props.ingredients9}</p>
                                        <p>{props.ingredients10}</p>
                                        <p>{props.ingredients11}</p>
                                        <p>{props.ingredients12}</p>
                                    </div>}
                                {contents === 1 &&
                                    <div>
                                        <p>{props.procedure1}</p>
                                        <p>{props.procedure2}</p>
                                        <p>{props.procedure3}</p>
                                        <p>{props.procedure4}</p>
                                        <p>{props.procedure5}</p>
                                        <p>{props.procedure6}</p>
                                        <p>{props.procedure7}</p>
                                        <p>{props.procedure8}</p>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </Popup>
    )
}