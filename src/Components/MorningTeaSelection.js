import { RecipeItem } from './RecipeCard'
import bircher from '../Components/images/Bircher Muesli.jpg'
import crumble from '../Components/images/Fruit Crumble.jpg'
import crunch from '../Components/images/Fruit Crunch.jpg'
import custard from '../Components/images/Custard.jpg'
import porridge from '../Components/images/Porridge.jpg'
import toastedMuesli from '../Components/images/Toasted Muesli.jpg'

//Morning Tea recipes array
export const morningTeaItems = [
    <RecipeItem className='morning1'
        key={crypto.randomUUID()} //generates random number for key
        image={bircher}
        title='Bircher Muesli'
        ingredients1='4 kg Quick Cook Oats'
        ingredients2='1 L Milk'
        ingredients3='4 L Water'
        ingredients4='2 Tbsp Cinnamon'
        ingredients5='2 Cups Dessicated Coconut'
        ingredients6='2 Cups Dried Fruits'
        ingredients7='8 kg Fresh Fruits'
        procedure1='1.	Place all dry ingredients into a large bowls evenly and mix'
        procedure2='2.	Add coconut milk and water, and mix until you create a creamy texture.'
        procedure3='3.	Let it soak in the fridge overnight.'
        procedure4='4.	Divide into portions and serve with fresh fruits.' />,

    <RecipeItem className='morning2'
        key={crypto.randomUUID()}
        image={crumble}
        title='Fruit Crumble and Yoghurt'
        ingredients1='9 kg Fruits'
        ingredients2='1 Cup Maple Syrup'
        ingredients3='6 Tbsp Cornflour'
        ingredients4='4 Cups Tinned Juice / Water '
        ingredients5='8 Cups Wholemeal Flour'
        ingredients6='3 Tbsp Cinnamon'
        ingredients7='2 Cups Sunflower Oil'
        procedure1='1.	Preheat the oven to 200C.'
        procedure2='2.	Place the fruits into a large bowl.'
        procedure3='3.	Add maple syrup, cornflour and water/juice to the bowl of fruits and mix well.'
        procedure4='4.	Divide into baking dishes and bake for 20 minutes or until the fruit is tender and it thickens.'
        procedure5='5.	To make the crumble, place the flour, cinnamon, and oil into a food processor. Pulse for a few seconds to form rough breadcrumbs.'
        procedure6='6.	Scatter the crumble over the fruit and bake uncovered for 20 minutes or until golden.'
        procedure7='7.	Serve with yoghurt.' />,

    <RecipeItem className='morning3'
        key={crypto.randomUUID()}
        image={crunch}
        title='Fruit Crunch'
        ingredients1='2 kg Cornflakes'
        ingredients2='1 3kg Can of fruits'
        ingredients3='3 kg Frozen Fruit (Mango, Blueberry, or Strawberry)'
        ingredients4='3 kg Diced Apple'
        ingredients5='8 L Milk'
        procedure1='1.	Divide Cornflakes into bowls'
        procedure2='2.	On a separate container, mix all the fruits together.'
        procedure3='3.	Add the mixed fruits to the cornflakes.'
        procedure4='4.	Serve with milk.' />,

    <RecipeItem className='morning4'
        key={crypto.randomUUID()}
        image={custard}
        title='Homemade Custard with Fruits'
        ingredients1='350 g Cornflour'
        ingredients2='1 Cup Maple Syrup'
        ingredients3='4 Tbsp Vanilla Extract'
        ingredients4='7 L Milk'
        ingredients5='8 kg Fresh Fruits'
        procedure1='1.	Place cornflour, maple syrup & milk into a large saucepan and stir to combine.'
        procedure2='2.	Place saucepan over medium heat and stir frequently (with a whisk) to break up any lumps.'
        procedure3='3.	Continue to stir over a medium-low heat until it has thickened (you can add more milk or water if needed) Add the Vanilla extract.'
        procedure4='4.	Turn off the heat, and let the custard cool down.'
        procedure5='4.	Serve with selection of fresh fruits' />,

    <RecipeItem className='morning5'
        key={crypto.randomUUID()}
        image={porridge}
        title='Porridge and Fruits'
        ingredients1='2 kg Quick Cook Oats'
        ingredients2='3 L Milk'
        ingredients3='2 L Water'
        ingredients4='2 Tbsp Cinnamon'
        ingredients5='2 Cups Dessicated Coconut'
        ingredients6='2 Cups Dried Fruits'
        ingredients7='8 kg Fresh Fruits'
        procedure1='1.	In a large pot, boil the milk, maple syrup and water together.'
        procedure2='2.	When the liquid is boiling, add the oats.'
        procedure3='3.	Continue cooking until desired consistency is achieved. make sure to keep stirring to prevent the bottom form burning.'
        procedure4='4.	Once desired consistency is achieved, add the vanilla extract and remove from the fire.'
        procedure5='5.	Serve with fresh fruits on the side.' />,

    <RecipeItem className='morning6'
        key={crypto.randomUUID()}
        image={toastedMuesli}
        title='Toasted Muesli and Yoghurt'
        ingredients1='5 kg Rolled Oats Jumbo'
        ingredients2='2 Cups Desiccated Coconut'
        ingredients3='6 Tbsp Cacao Powder'
        ingredients4='1½ Tbsp Chia Seeds'
        ingredients5='1 Cup Maple Syrup'
        ingredients6='3 Cups Sunflower Oil'
        ingredients7='2-3 Cups Dried Fruits'
        procedure1='1.	Preheat the oven to 180°C and line trays with baking paper.'
        procedure2='2.	Place the oats, coconut, chia seeds, cacao powder, maple syrup and coconut oil into a large bowl and stir to combine.'
        procedure3='3.	Spread the muesli mix thinly over the baking trays and bake for about 15 minutes or until golden.'
        procedure4='4.	Serve with natural yoghurt and seasonal fruit.' />,
]

//morning tea selection function
export function MorningTea() {
    return (
        <div>
            <div className='selectionBody'>
                {morningTeaItems}
            </div>
        </div>
    )
}


