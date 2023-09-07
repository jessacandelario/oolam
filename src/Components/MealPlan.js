import './MealPlan.css'
import { CalendarWeek1, CalendarWeek2 } from './Calendar'

//meal plan calendar array
//this is used on the calendar slider
export const mealPlanCalendar = [
    <CalendarWeek1 key='week1' />,
    <CalendarWeek2 key='week2' />
]

function MealPlanPage() {

    return (
        <div className='mealPlanBody'>
            <CalendarWeek1 key='week1' />,
            <CalendarWeek2 key='week2' />
        </div>

    )


}

/*
    return (
        <div className='mealPlanBody'>
            {mealPlanCalendar}
        </div>

    )
    */

export default MealPlanPage