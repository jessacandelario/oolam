import './Calendar.css'
import { useEffect, useState } from "react"
import Select from "react-select";

//morning tea selection array
const morningMenu = [
    { value: 'bircher', label: 'Bircher Muesli' },
    { value: 'crumble', label: 'Fruit Crumble and Yoghurt' },
    { value: 'crunch', label: 'Fruit Crunch' },
    { value: 'custard', label: 'Homemade Custard & Fruits' },
    { value: 'porridge', label: 'Porridge and Fruits' },
    { value: 'muesli', label: 'Toasted Muesli and Yoghurt' }
]

//lunch selection array
const lunchMenu = [
    { value: 'bolognese', label: 'Beef Bolognese and Pasta' },
    { value: 'butter chicken', label: 'Butter Chicken and Rice' },
    { value: 'chicken pumpkin', label: 'Chicken Pumpkin Pasta' },
    { value: 'creamy fish', label: 'Creamy Fish Pasta' },
    { value: 'fish couscous', label: 'Moroccan Fish Couscous' },
    { value: 'veggie curry', label: 'Veggie Curry and Rice' }
]

//afternoon tea selection array
const afternoonMenu = [
    { value: 'banana cake', label: 'Banana and Chocolate Cake' },
    { value: 'bliss ball', label: 'Bliss Balls' },
    { value: 'choco berry bar', label: 'Chocolate and Berry Bar' },
    { value: 'crunch platter', label: 'Crunch Platter' },
    { value: 'muesli bar', label: 'Muesli Bar' },
    { value: 'pineapple coconut', label: 'Pineapple Coconut Cake' }
]

//created 3 different functions for each meal group so correct array can be passed in each

//sets value for local storage for morning tea
export function SelectMorning(props) {
    //create state variable for selectedMorning
    const [selectedMorning, setSelectedMorning] = useState([])

    //function to be called when user selects an option
    const handleChange = (m) => {
        localStorage.setItem(props.setValue, JSON.stringify(m)); //passed as props so we can assign different value for each calendar cell
        setSelectedMorning(m)
    }

    //retrieves the last selected value that is stored in local storage and updated the value
    useEffect(() => {
        const lastSelectedMorning = JSON.parse(
            localStorage.getItem(props.setValue) ?? "[]" //passed as props so we can assign different value for each calendar cell
        );
        setSelectedMorning(lastSelectedMorning)
    }, [])

    return (
        <Select
            //this will help up change the default style of react-select component
            styles={{
                control: (provided, state) => ({
                    ...provided,
                    backgroundColor: 'transparent', // change the background color of the select box
                    cursor: 'pointer' // change the cursor to pointer 
                })
            }}
            className='ddMenu'
            value={selectedMorning}
            onChange={handleChange}
            placeholder='Select Morning Tea'
            options={morningMenu} />
    )
}

//sets value for local storage for lunch
export function SelectLunch(props) {
    //create state variable for selectedLunch
    const [selectedLunch, setSelectedLunch] = useState([])

    //function to be called when user selects an option
    const handleChange = (l) => {
        localStorage.setItem(props.setValue, JSON.stringify(l)); //passed as props so we can assign different value for each calendar cell
        setSelectedLunch(l)
    }

    //retrieves the last selected value that is stored in local storage and updated the value
    useEffect(() => {
        const lastSelectedLunch = JSON.parse(
            localStorage.getItem(props.setValue) ?? "[]" //passed as props so we can assign different value for each calendar cell
        );
        setSelectedLunch(lastSelectedLunch)
    }, [])

    return (
        <Select
            //this will help up change the default style of react-select component
            styles={{
                control: (provided, state) => ({
                    ...provided,
                    backgroundColor: 'transparent', // change the background color of the select box
                    cursor: 'pointer' // change the cursor to pointer
                })
            }}
            className='ddMenu'
            value={selectedLunch}
            onChange={handleChange}
            placeholder='Select Lunch'
            options={lunchMenu} />
    )
}

//lets value for local storage for afternoon tea
export function SelectAfternoon(props) {
    //create state variable for selectedAfternoon
    const [selectedAfternoon, setSelectedAfternoon] = useState([])

    //function to be called when user selects an option
    const handleChange = (a) => {
        localStorage.setItem(props.setValue, JSON.stringify(a)); //passed as props so we can assign different value for each calendar cell
        setSelectedAfternoon(a)
    }

    //retrieves the last selected value that is stored in local storage and updated the value
    useEffect(() => {
        const lastSelectedAfternoon = JSON.parse(
            localStorage.getItem(props.setValue) ?? "[]" //passed as props so we can assign different value for each calendar cell
        );
        setSelectedAfternoon(lastSelectedAfternoon)
    }, [])

    return (
        <Select
            //this will help up change the default style of react-select component
            styles={{
                control: (provided, state) => ({
                    ...provided,
                    backgroundColor: 'transparent', // change the background color of the select box
                    cursor: 'pointer' // change the cursor to pointer
                }),
            }}
            className='ddMenu'
            value={selectedAfternoon}
            onChange={handleChange}
            placeholder='Select Afternoon Tea'
            options={afternoonMenu} />
    )
}

