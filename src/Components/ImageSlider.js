import './ImageSlider.css';
import { useState } from 'react';
import morningPic from '../Components/images/Morning Tea.jpg'
import lunchPic from '../Components/images/Lunch.jpg'
import afternoonPic from '../Components/images/Afternoon Tea.jpg'
import mealPlanPic from '../Components/images/Meal Plan.jpg'

//image slides
function Slide(props) {
    return (
        <img className='pics' src={props.picture} alt={props.title} />
    )
}

//stores images slides in array
function SlideImages() {
    const image = [
        <Slide picture={morningPic} title='Morning Tea Selections' />,
        <Slide picture={lunchPic} title='Lunch Selections' />,
        <Slide picture={afternoonPic} title='Afternoon Tea Selections' />,
        <Slide picture={mealPlanPic} title='Meal Planner' />,
    ]

    return (
        <>
            <ImageSlides image={image} />
        </>
    )
}

//arranges the order of the images
export function ImageSlides({ image }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    //Left arrow button
    function PreviousSlide() {
        const isSlide1 = currentSlide === 0 //checks if the current slide is the first slide
        const newSlide = isSlide1 ? image.length - 1 : currentSlide - 1
        setCurrentSlide(newSlide);
    }

    //Right arrow button
    function NextSlide() {
        const isFinalSlide = currentSlide === image.length - 1 //checks if the current slide is the last slide
        const newSlide = isFinalSlide ? 0 : currentSlide + 1
        setCurrentSlide(newSlide);
    }

    return (
        <div className='sliderContainer'>
            <div className='goLeft' onClick={PreviousSlide}>⇦</div>
            {image[currentSlide]}
            <div className='goRight' onClick={NextSlide}>⇨</div>
        </div>
    )
}

export default SlideImages;