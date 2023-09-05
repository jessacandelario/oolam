import './CalendarSlider.css';
import { useState } from 'react';
import { mealPlanCalendar } from './MealPlan';

//stores iages slides in array
function CalendarSlideContent() {
    const slide = mealPlanCalendar //assign a variable to the array

    return (
        <>
            <CalendarSlidesOrder slide={slide} />
        </>
    )
}


function CalendarSlidesOrder({ slide }) {
    const [currentWeek, setCurrentWeek] = useState(0)

    //Left arrow button
    function PreviousWeek() {
        const isWeek1 = currentWeek === 0 //checks if the current slide is the first slide
        const newWeek = isWeek1 ? slide.length - 1 : currentWeek - 1
        setCurrentWeek(newWeek);
    }

    //Right arrow button
    function NextWeek() {
        const isFinalWeek = currentWeek === slide.length - 1 //checks if the current slide is the last slide
        const newWeek = isFinalWeek ? 0 : currentWeek + 1
        setCurrentWeek(newWeek);
    }

    return (
        <div className='calendarSliderContainer'>
            <div className='previousWeek' onClick={PreviousWeek}>⇦</div>
            {slide[currentWeek]}

            <div className='nextWeek' onClick={NextWeek}>⇨</div>
        </div>
    )
}

export default CalendarSlideContent