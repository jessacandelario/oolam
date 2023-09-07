import { useState } from 'react'
import './DragAndDrop.css'
import { SelectMorning } from './LocalStorage'
import { DndContext, closestCenter } from '@dnd-kit/core'

/*
function DndMorning() {
    const selectMorningValue1 = '1monMorningValue'
    const selectMorningValue2 = '1tueMorningValue'
    const selectMorningValue3 = '1wedMorningValue'
    const selectMorningValue4 = '1thursMorningValue'
    const selectMorningValue5 = '1friMorningValue'

    const [morningTea, setMorningTea] = useState([
        <SelectMorning setValue={selectMorningValue1} />,
        <SelectMorning setValue={selectMorningValue2} />,
        <SelectMorning setValue={selectMorningValue3} />,
        <SelectMorning setValue={selectMorningValue4} />,
        <SelectMorning setValue={selectMorningValue5} />])

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}>
            <h1>Morning Tea</h1>
        </DndContext>
    )

    function handleDragEnd(event) {
        console.log("drag ended")
    }
}

export default DndMorning
*/

/*
//array of menu items
export const menuItems = [
    {
        Group: 'Morning Tea',
        Items: ['Bircher Muesli', 'Fruit Crumble and Yoghurt', 'Fruit Crunch',
            'Homemade Custard and Fruits', 'Porridge and Fruits', 'Toasted Muesli and Yoghurt']
    },
    {
        Group: 'Lunch',
        Items: ['Beef Bolognese and Pasta', 'Butter Chicken and Rice', 'Chicken Pumpkin Pasta',
            'Creamy Fish Pasta', 'Moroccan Fish Couscous', 'Veggie Curry and Rice']
    },
    {
        Group: 'Afternoon Tea',
        Items: ['Banana and Chocolate Cake', 'Bliss Balls', 'Chocolate and Berry Bar',
            'Crunch Platter', 'Muesli Bar', 'Pineapple Coconut Cake']
    }
]

//menu selection
export function MenuSelection() {
    return (
        <div className='selection'>
            {menuItems.map((group, groupI) => (
                <div key={group.title} className='calendarMorning'>
                    {group.Items.map((item, itemI) => (
                        <div dragable key={item} className='calendarCell'> {item}</div>
                    ))}
                </div>))}
        </div>
    )
}
*/