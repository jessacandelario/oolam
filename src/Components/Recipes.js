import './Recipes.css';
import { useState } from 'react';
import { AllRecipes } from './RecipeSelection';
import { MorningTea } from './MorningTeaSelection';
import { Lunch } from './LunchSelection';
import { AfternoonTea } from './AfternoonTeaSelection';

function RecipesPage() {
    const [selection, setSelection] = useState(0) //for which items to show in recipes body
    const [morning, morningClicked] = useState('morningMenu')
    const [lunch, lunchClicked] = useState('lunchMenu')
    const [afternoon, afternoonClicked] = useState('afternoonMenu')


    //design of buttons when morning tea is clicked
    function setMorningClicked() {
        return (
            setSelection(1),
            morningClicked('clicked'),
            lunchClicked('lunchMenu'),
            afternoonClicked('afternoonMenu')
        )
    }

    //design of buttons when lunch is clicked
    function setLunchClicked() {
        return (
            setSelection(2),
            lunchClicked('clicked'),
            morningClicked('morningMenu'),
            afternoonClicked('afternoonMenu')
        )
    }

    //design of buttons when afternoon tea is clicked
    function setAfternoonClicked() {
        return (
            setSelection(3),
            afternoonClicked('clicked'),
            morningClicked('morningMenu'),
            lunchClicked('lunchMenu')
        )
    }

    return (
        <div className='recipePageBody'>
            <div className='buttons'>
                <button className={morning} onClick={() => setMorningClicked()}>Morning Tea</button>
                <button className={lunch} onClick={() => setLunchClicked()}>Lunch</button>
                <button className={afternoon} onClick={() => setAfternoonClicked()}>Afternoon Tea</button>
            </div>
            <div className='recipes'>
                {selection === 0 && <AllRecipes />}
                {selection === 1 && <MorningTea />}
                {selection === 2 && <Lunch />}
                {selection === 3 && <AfternoonTea />}
            </div>
        </div>
    )
}

export default RecipesPage