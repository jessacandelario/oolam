import { RecipeItem } from './RecipeCard'
import bolognese from '../Components/images/Beef Bolognese.jpg'
import butterChicken from '../Components/images/Butter Chicken.jpg'
import chickenPumpkin from '../Components/images/Chick Pumpkin Pasta.jpg'
import creamyFish from '../Components/images/Creamy Fish Pasta.jpg'
import fishCouscous from '../Components/images/Fish Couscous.jpg'
import veggieCurry from '../Components/images/Veggie Curry w Rice.jpg'


//Lunch recipes array
export const lunchItems = [
    <RecipeItem className='lunch1'
        key={crypto.randomUUID()}
        image={bolognese}
        title='Beef Bolognese and Pasta'
        ingredients1='4 kg Minced Beef'
        ingredients2='3 Tbsp Minced Garlic'
        ingredients3='5 kg Mixed Vegetables'
        ingredients4='1 Can(2.5kg) Diced Tomato'
        ingredients5='3 Cans(310g) Tomato Paste'
        ingredients6='½ Cup Mixed Herbs'
        ingredients7='4 L Water'
        ingredients8='4.5 Kg Wholemeal Pasta'
        procedure1='1.	Heat large pot with a little oil, add the garlic and sauté for 5 minutes.'
        procedure2='2.	Add the beef and saute until the beef mince turns brown.'
        procedure3='3.	Add tomato, tomato paste and mixed herbs and saute until it boils.'
        procedure4='4.	Add the Water, and let it simmer'
        procedure5='5.	Add vegetables and let simmer for another 20-25minutes.'
        procedure6='6.	Cook pasta as per packet instructions.'
        procedure7='7.	Serve in steel dishes with rice.' />,

    <RecipeItem className='lunch2'
        key={crypto.randomUUID()}
        image={butterChicken}
        title='Butter Chicken and Rice'
        ingredients1='4 kg  Minced Chicken'
        ingredients2='3 Tbsp Minced Garlic'
        ingredients3='2 tbsp Cumin'
        ingredients4='2 tbsp Garam Masala'
        ingredients5='2 tbsp Ground Coriander'
        ingredients6='2 Cans(2.5kg) Diced Tomato'
        ingredients7='3 Cans(310g) Tomato Paste'
        ingredients8='5 kg  Mixed Vegetables'
        ingredients9='2 L Coconut Cream'
        ingredients10='4.5 kg Brown Rice'
        procedure1='1.	Cook the brown rice as per usual packet instructions.'
        procedure2='2.	Heat large pot with a little oil and add garlic,cumin, coriander, garam masala. Sauté for about 5mins over medium-low heat.'
        procedure3='3.	Add chicken and cook until the chicken is evenly brown.'
        procedure4='4.	Add diced tomato and tomato paste bring to a boil.'
        procedure5='5.	Reduce to a simmer and add mixed vegetables.'
        procedure6='6.	Cook ensuring the chicken is cooked through and then lastly, add coconut cream and bring to a boil.'
        procedure7='7.	Serve with rice.' />,

    <RecipeItem className='lunch3'
        key={crypto.randomUUID()}
        image={chickenPumpkin}
        title='Chicken Pumpkin Pasta'
        ingredients1='4 kg  Minced Chicken'
        ingredients2='3 Tbsp Minced Garlic'
        ingredients3='3 kg Pumpkin'
        ingredients4='1 Cup Chicken Booster'
        ingredients5='2 Tbsp Turmeric'
        ingredients6='2 L Coconut Cream'
        ingredients7='5 kg  Mixed Vegetables'
        ingredients8='4 L Water'
        ingredients9='4.5 kg Wholemeal Pasta'
        procedure1='1.	Cook the pasta as per usual packet instructions.'
        procedure2='2.	Heat large pot with a little oil and add garlic, and turmeric. Sauté for about 5mins over medium-low heat.'
        procedure3='3.	Add chicken and chicken booster and cook until the chicken is evenly brown.'
        procedure4='4.	Add pumpkin and water and bring to a boil.'
        procedure5='5.	Reduce to a simmer and add mixed vegetables.'
        procedure6='6.	Cook ensuring the chicken is cooked through and then lastly, add coconut cream and bring to a boil.'
        procedure7='7.	Serve with wholemeal pasta.' />,

    <RecipeItem className='lunch4'
        key={crypto.randomUUID()}
        image={creamyFish}
        title='Creamy Fish Pasta'
        ingredients1='5 kg  Hoki Fillets'
        ingredients2='3 Tbsp Minced Garlic'
        ingredients3='2 Tbsp Ground Ginger'
        ingredients4='2 Tbsp Mixed Herbs'
        ingredients5='1 Cup Vegetable Booster'
        ingredients6='4 L Water'
        ingredients7='1 L Coconut Cream'
        ingredients8='5 kg  Mixed Vegetables'
        ingredients9='4.5 kg Wholemeal Pasta'
        procedure1='1.	Cook the pasta as per usual packet instructions.'
        procedure2='2.	Heat large pot with a little oil and add garlic and ginger powder. Sauté for about 5mins over medium-low heat.'
        procedure3='3.	Add fish, vegetable booster, mixed herbs and water and bring to boil'
        procedure4='4.	Reduce to a simmer and add mixed vegetables. simmer for another 30 mins.'
        procedure5='5.	Add coconut cream and bring to a boil.'
        procedure6='6.	Remove from heat and serve with wholemeal pasta.' />,

    <RecipeItem className='lunch5'
        key={crypto.randomUUID()}
        image={fishCouscous}
        title='Moroccan Fish Couscous'
        ingredients1='5 kg  Hoki Fillets'
        ingredients2='3 Tbsp Minced Garlic'
        ingredients3='2 Tbsp Ground Ginger'
        ingredients4='4 Tbsp Moroccan Seasoning'
        ingredients5='1 Cup Vegetable Booster'
        ingredients6='4 L Water'
        ingredients7='5 kg  Mixed Vegetables'
        ingredients8='4.5 kg Couscous'
        procedure1='1.	Cook the couscous as per usual packet instructions.'
        procedure2='2.	Heat large pot with a little oil and add garlic and ginger powder. Sauté for about 5mins over medium-low heat.'
        procedure3='3.	Add fish, vegetable booster, moroccan seasoning and water and bring to boil'
        procedure4='4.	Reduce to a simmer and add mixed vegetables. simmer for another 30 mins.'
        procedure5='5.	Remove from heat and serve with couscous.' />,

    <RecipeItem className='lunch6'
        key={crypto.randomUUID()}
        image={veggieCurry}
        title='Veggie Curry and Rice'
        ingredients1='2 Cans(2.7kg) Chickpea'
        ingredients2='3 Tbsp Minced Garlic'
        ingredients3='2 Tbsp Turmeric'
        ingredients4='3 Tbsp Curry Powder'
        ingredients5='1 Cup Vegetable Booster'
        ingredients6='4 L Water'
        ingredients7='1 L Coconut Cream'
        ingredients8='5 kg  Mixed Vegetables'
        ingredients9='4.5 kg Brown Rice'
        procedure1='1.	Cook the brown rice as per usual packet instructions.'
        procedure2='2.	Heat large pot with a little oil and add garlic, turmeric, and curry powder. Sauté for about 5mins over medium-low heat.'
        procedure3='3.	Add chickpea, vegetable booster, and water and bring to boil'
        procedure4='4.	Reduce to a simmer and add mixed vegetables. simmer for another 30 mins.'
        procedure5='5.	Add coconut cream and bring to a boil.'
        procedure6='6.	Remove from heat and serve with wholemeal pasta.' />
]

//Lunch selections function
export function Lunch() {
    return (
        <div className='selectionBody'>
            {lunchItems}
        </div>

    )
}