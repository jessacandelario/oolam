import './RecipeSelection.css';
import { MorningTea } from './MorningTeaSelection';
import { Lunch } from './LunchSelection';
import { AfternoonTea } from './AfternoonTeaSelection';

//All Recipes selection
//This is the default for the recipes page
export function AllRecipes() {
    return (
        <div className='selectionBody'>
            <MorningTea />
            <Lunch />
            <AfternoonTea />
        </div>
    )
}



