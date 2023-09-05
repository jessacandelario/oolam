import './DragAndDrop.css'

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



//calendar
export function MealPlanCalendar() {
    return (
        <div className='calendar' >
            <div className='calendarTitle'>
                <h1>Week 1</h1>
            </div>
            <div className='calendarBody'>
                <div className='calendarDay'> {/*group*/}
                    <div className='columnName'> </div>
                    <div className='rowName'>Monday</div>
                    <div className='rowName'>Tuesday</div>
                    <div className='rowName'>Wednesday</div>
                    <div className='rowName'>Thursday</div>
                    <div className='rowName'>Friday</div>
                </div>

                <div className='calendarMorning'>
                    <div className='columnName'>Morning Tea</div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                </div>
                <div className='calendarLunch'>
                    <div className='columnName'>Lunch</div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>

                </div>
                <div className='calendarAfternoon'>
                    <div className='columnName'>Afternoon Tea</div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                </div>
            </div>

            <div className='calendarTitle'>
                <h1>Week 2</h1>
            </div>
            <div className='calendarBody'>
                <div className='calendarDay'> {/*group*/}
                    <div className='columnName'> </div>
                    <div className='rowName'>Monday</div>
                    <div className='rowName'>Tuesday</div>
                    <div className='rowName'>Wednesday</div>
                    <div className='rowName'>Thursday</div>
                    <div className='rowName'>Friday</div>
                </div>

                <div className='calendarMorning'>
                    <div className='columnName'>Morning Tea</div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                </div>

                <div className='calendarLunch'>
                    <div className='columnName'>Lunch</div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                </div>

                <div className='calendarAfternoon'>
                    <div className='columnName'>Afternoon Tea</div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                    <div className='calendarCell'> </div>
                </div>
            </div>
        </div>
    )
}

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