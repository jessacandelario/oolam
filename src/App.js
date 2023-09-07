import './App.css';
import './Components/HomePage.css' //homepage component design
import { useState } from 'react';
import RecipesPage from './Components/Recipes';
import MealPlanPage from './Components/MealPlan';
import logo2 from './Components/images/Oolam logo 2.jpg';
import SlideImages from './Components/ImageSlider';
import { morningTeaItems } from './Components/MorningTeaSelection';
import { afternoonTeaItems } from './Components/AfternoonTeaSelection';
import { lunchItems } from './Components/LunchSelection';
import CalendarSlideContent from './Components/CalendarSlider';

function App() {
  const [buttonClicked, setButtonClicked] = useState(0) //which to render in body
  const [recipe, recipeClicked] = useState('recipeMenu') //what happens when 'Recipes' is clicked
  const [mealPlan, mealPlanClicked] = useState('mealPlanMenu') //what happens when 'Meal Plan' is clicked

  //when the logo is clicked
  function setLogoClicked() {
    return (
      setButtonClicked(0), //renders default homepage
      recipeClicked('recipeMenu'),
      mealPlanClicked('mealPlanMenu')
    )
  }

  //design of "Recipe" when clicked
  function setRecipeClicked() {
    return (
      setButtonClicked(1), //renders recipes page
      recipeClicked('click'),
      mealPlanClicked('mealPlanMenu')
    )
  }

  //design of "Meal Plan" when clicked
  function setMealPlanClicked() {
    return (
      setButtonClicked(2), //renders meal plan calendar page
      mealPlanClicked('click'),
      recipeClicked('recipeMenu')
    )
  }

  //home page layout and design
  function DefaultHomePage() {
    return (
      <div>
        <SlideImages />
        <div className='recipesSelection'>
          <h1 onClick={() => setRecipeClicked()} className='selectionHeading'>Recipe Selections</h1>
          <div className='selections'>
            <div className='morning'>
              <h1 className='label'>Morning Tea</h1>
              {morningTeaItems[0]}
              {morningTeaItems[1]}
            </div>
            <div className='lunch'>
              <h1 className='label'>Lunch</h1>
              {lunchItems[0]}
              {lunchItems[1]}
            </div>
            <div className='afternoon'>
              <h1 className='label'>Afternoon Tea</h1>
              {afternoonTeaItems[0]}
              {afternoonTeaItems[1]}
            </div>
          </div>
          <button onClick={() => setRecipeClicked()} className='seeRecipes'>More Recipes</button>
        </div>
        <div className='meal'>
          <h1 className='menulabel' onClick={() => setMealPlanClicked()}>Create a Menu</h1>
          <CalendarSlideContent />
        </div>
      </div>
    )
  }


  return (
    <div className="App">
      <nav className='header'>
        <div className='logoContainer'>
          <img className='logo' src={logo2} alt='oolam' onClick={() => setLogoClicked()} />
        </div>
        <div className='headerItems'>
          <h3 className={recipe} onClick={() => setRecipeClicked()}>Recipes</h3>
          <h3 className={mealPlan} onClick={() => setMealPlanClicked()}>Meal Plan</h3>
        </div>

      </nav>
      <div>
        {buttonClicked === 0 && <DefaultHomePage />}
        {buttonClicked === 1 && <RecipesPage />}
        {buttonClicked === 2 && <MealPlanPage />}
      </div>
    </div>
  );
}

export default App;
