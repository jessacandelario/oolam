import './MealPlan.css'
import { CalendarWeek1 } from './CalendarWeek1'
import { CalendarWeek2 } from './CalendarWeek2'
import CalendarSlideContent from './CalendarSlider'

//meal plan calendar array
//this is used on the calendar slider
export const mealPlanCalendar = [
    <CalendarWeek1 key='week1' />,
    <CalendarWeek2 key='week2' />
]

function MealPlanPage() {
    return (
        <div className='mealPlanBody'>
            <CalendarSlideContent />
        </div>
    )
}

export default MealPlanPage