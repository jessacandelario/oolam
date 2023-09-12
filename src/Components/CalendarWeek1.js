import { useState } from 'react';
import './Calendar.css'
import { SelectMorning, SelectLunch, SelectAfternoon } from './LocalStorage';

//Created 2 separate functions for the calendar week to be able to store unique values for each calendar cell

/*week 1 calendar*/
export function CalendarWeek1() {
    //set that variable for storing the items in local storage
    const selectMorningValue1 = '1monMorningValue'
    const selectMorningValue2 = '1tueMorningValue'
    const selectMorningValue3 = '1wedMorningValue'
    const selectMorningValue4 = '1thursMorningValue'
    const selectMorningValue5 = '1friMorningValue'

    const selectLunchValue1 = '1monLunchValue'
    const selectLunchValue2 = '1tueLunchValue'
    const selectLunchValue3 = '1wedLunchValue'
    const selectLunchValue4 = '1thursLunchValue'
    const selectLunchValue5 = '1friLunchValue'

    const selectAfternoonValue1 = '1monAfternoonValue'
    const selectAfternoonValue2 = '1tueAfternoonValue'
    const selectAfternoonValue3 = '1wedAfternoonValue'
    const selectAfternoonValue4 = '1thursAfternoonValue'
    const selectAfternoonValue5 = '1friAfternoonValue'

    const [reset, setReset] = useState(0) //use state for reset button function

    //when reset button is clicked, local storage and calendar is cleared
    function resetCalendar() {
        return (
            localStorage.clear(),  //this will clear the data in local storage
            setReset(1)
        )
    }

    function Week1() {
        return (
            <div className='weekContainer'>
                <div className='calendar' >
                    <div className='calendarTitle'>
                        <h1>Week 1</h1>
                    </div>
                    <div className='calendarBody'>
                        <div className='row1'>
                            <div className='column1'> </div>
                            <div className='columnName1'>Morning Tea</div>
                            <div className='columnName2'>Lunch</div>
                            <div className='columnName3'>Afternoon Tea</div>
                        </div>
                        <div className='calendarRow'>
                            <div className='rowName'>Mon</div>
                            <div className='dayMenu'>
                                <div className='calendarMorning'>
                                    <SelectMorning setValue={selectMorningValue1} />
                                </div>
                                <div className='calendarLunch'>
                                    <SelectLunch setValue={selectLunchValue1} />
                                </div>
                                <div className='calendarAfternoon'>
                                    <SelectAfternoon setValue={selectAfternoonValue1} />
                                </div>
                            </div>
                        </div>
                        <div className='calendarRow'>
                            <div className='rowName'>Tues</div>
                            <div className='dayMenu'>
                                <div className='calendarMorning'>
                                    <SelectMorning setValue={selectMorningValue2} />
                                </div>
                                <div className='calendarLunch'>
                                    <SelectLunch setValue={selectLunchValue2} />
                                </div>
                                <div className='calendarAfternoon'>
                                    <SelectAfternoon setValue={selectAfternoonValue2} />
                                </div>
                            </div>
                        </div>
                        <div className='calendarRow'>
                            <div className='rowName'>Wed</div>
                            <div className='dayMenu'>
                                <div className='calendarMorning'>
                                    <SelectMorning setValue={selectMorningValue3} />
                                </div>
                                <div className='calendarLunch'>
                                    <SelectLunch setValue={selectLunchValue3} />
                                </div>
                                <div className='calendarAfternoon'>
                                    <SelectAfternoon setValue={selectAfternoonValue3} />
                                </div>
                            </div>
                        </div>
                        <div className='calendarRow'>
                            <div className='rowName'>Thurs</div>
                            <div className='dayMenu'>
                                <div className='calendarMorning'>
                                    <SelectMorning setValue={selectMorningValue4} />
                                </div>
                                <div className='calendarLunch'>
                                    <SelectLunch setValue={selectLunchValue4} />
                                </div>
                                <div className='calendarAfternoon'>
                                    <SelectAfternoon setValue={selectAfternoonValue4} />
                                </div>
                            </div>
                        </div>
                        <div className='calendarRow'>
                            <div className='rowName'>Fri</div>
                            <div className='dayMenu'>
                                <div className='calendarMorning'>
                                    <SelectMorning setValue={selectMorningValue5} />
                                </div>
                                <div className='calendarLunch'>
                                    <SelectLunch setValue={selectLunchValue5} />
                                </div>
                                <div className='calendarAfternoon'>
                                    <SelectAfternoon setValue={selectAfternoonValue5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={resetCalendar}>Reset Week 1</button>
            </div>
        )
    }

    return (
        <>
            {reset === 0 && <Week1 />}
            {reset === 1 && <Week1 />}
        </>
    )
}
