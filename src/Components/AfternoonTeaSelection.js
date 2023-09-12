import { RecipeItem } from './RecipeCard'
import bananaCake from '../Components/images/Banana Cake.jpg'
import blissBall from '../Components/images/Bliss Balls.jpg'
import chocoBerry from '../Components/images/Choco Berry Bar.jpg'
import crunchPlatter from '../Components/images/Crunch Platter.jpg'
import muesliBar from '../Components/images/Muesli Bar.jpg'
import pineappleCoconut from '../Components/images/Pineapple Coconut.JPG'

//Afternoon tea recipes array
export const afternoonTeaItems = [
    <RecipeItem className='afternoon1'
        key={crypto.randomUUID()}
        image={bananaCake}
        title='Banana and Chocolate Cake'
        ingredients1='8 Cups Wholemeal Flour'
        ingredients2='2 Tbsp Baking Soda'
        ingredients3='2 Tbsp Baking Powder'
        ingredients4='2 Tbsp Cocoa Powder'
        ingredients5='1 Cup Sunflower Oil'
        ingredients6='1 Kg Banana'
        ingredients7='1.5 L Water'
        procedure1='1.	Preheat oven at 175C. Line baking trays'
        procedure2='2.	In a large bowl, mix together all the dry ingredients.'
        procedure3='3.	In the Mixing bowl, place bananas and beat them until bananas are mashed.'
        procedure4='4.	When bananas are mashed, alternately add the dry and wet ingredients, a third at a time.'
        procedure5='5.	Lastly, add the oil and mix well.'
        procedure6='6.	Pour cake mixture in prepared trays and bake for 1 hr.' />,

    <RecipeItem className='afternoon2'
        key={crypto.randomUUID()}
        image={blissBall}
        title='Bliss Balls'
        ingredients1='15 Cups Rolled Oats'
        ingredients2='10 Cups Rice Bubble'
        ingredients3='2 Tbsp Chia Seeds'
        ingredients4='1 Tbsp Cinnamon'
        ingredients5='2 Tbsp Cocoa Powder'
        ingredients6='2.5 Cup Coconut Oil'
        ingredients7='2 Cups Coconut Cream'
        ingredients8='1 Kg Banana'
        ingredients9='5 Cups Dried Dates'
        procedure1='1.	Soak the dated in warm water for 10 mins.'
        procedure2='2.	Using a food processor, grind the oats and rice bubble, set aside.'
        procedure3='3.	Grind the dates and banana together to form a paste.'
        procedure4='4.	In a mixing bowl, mix all the ingredients together to form a dough.'
        procedure5='5.	Roll the dough into 20g balls.'
        procedure6='6.	Chill overnight, and then serve.' />,

    <RecipeItem className='afternoon3'
        key={crypto.randomUUID()}
        image={chocoBerry}
        title='Chocolate Berry Bar'
        ingredients1='15 Cups Rolled Oats'
        ingredients2='10 Cups Rice Bubble'
        ingredients3='2 Tbsp Chia Seeds'
        ingredients4='1 Tbsp Cinnamon'
        ingredients5='2 Tbsp Cocoa Powder'
        ingredients6='2.5 Cup Coconut Oil'
        ingredients7='1 Kg Mixed Berries'
        ingredients8='5 Cups Dried Dates'
        procedure1='1.	Soak the dated in warm water for 10 mins.'
        procedure2='2.	Using a food processor, grind the oats and rice bubble, set aside.'
        procedure3='3.	Grind the dates and berries together to form a paste.'
        procedure4='4.	In a mixing bowl, mix all the ingredients together to form a dough.'
        procedure5='5.	Roll the dough into trays, and let it set overnight.'
        procedure6='6.	Cut into 2*3cm, and then serve.' />,

    <RecipeItem className='afternoon4'
        key={crypto.randomUUID()}
        image={crunchPlatter}
        title='Crunch Platter'
        ingredients1='1 Bunch Celery'
        ingredients2='2 kg Carrots'
        ingredients3='2 kg Sliced Cheese'
        ingredients4='9 Packs Corn Thins'
        ingredients5='9 kg Fresh Fruits'
        procedure1='1.	Slice the vegetables into 3cm long strips.'
        procedure2='2.	Blanch the vegetables, and cool it down in cold water.'
        procedure3='3.	Slice the fruits into small strips'
        procedure4='4.	Serve vegetables, fruits, cheese and crackers together.' />,

    <RecipeItem className='afternoon5'
        key={crypto.randomUUID()}
        image={muesliBar}
        title='Muesli Bar'
        ingredients1='15 Cups Rolled Oats'
        ingredients2='10 Cups Rice Bubble'
        ingredients3='2 Tbsp Chia Seeds'
        ingredients4='1 Tbsp Cinnamon'
        ingredients5='2 Tsp Ginger Powder'
        ingredients6='2.5 Cup Coconut Oil'
        ingredients7='5 Cups Dried Dates'
        procedure1='1.	Soak the dated in warm water for 10 mins, then drain the water out.'
        procedure2='2.	Using a food processor, grind the oats and rice bubble, set aside.'
        procedure3='3.	Grind the dates to form a paste.'
        procedure4='4.	In a mixing bowl, mix all the ingredients together to form a dough.'
        procedure5='5.	Roll the dough into trays, and let it set overnight.'
        procedure6='6.	Cut into 2*3cm, and then serve.' />,

    <RecipeItem className='afternoon6'
        key={crypto.randomUUID()}
        image={pineappleCoconut}
        title='Pineapple Coconut Cake'
        ingredients1='8 Cups Wholemeal Flour'
        ingredients2='2 Tbsp Baking Soda'
        ingredients3='2 Tbsp Baking Powder'
        ingredients4='2 Tbsp Dessicated Coconut'
        ingredients5='1 Cup Sunflower Oil'
        ingredients6='1 Kg Crushed Pineapple'
        ingredients7='1.5 L Coconut Milk'
        procedure1='1.	Preheat oven at 175C. Line baking trays'
        procedure2='2.	In a large bowl, mix tigether all the dry ingredients.'
        procedure3='3.	In the Mixing bowl, add the pineapples and beat them until they are mashed.'
        procedure4='4.	When pineapples are mashed, alternately add the dry and liquid ingredients, a third at a time.'
        procedure5='5.	Lastly, add the oil and mix well.'
        procedure6='6.	Pour cake mixture in prepared trays and bake for 1 hr.' />

]

//Afternoon Tea selections function
export function AfternoonTea() {
    return (
        <div className='selectionBody'>
            {afternoonTeaItems}
        </div>

    )
}