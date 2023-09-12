import { useState } from 'react';
import './Calendar.css'
import { SelectMorning, SelectLunch, SelectAfternoon } from './LocalStorage';

//Created 2 separate functions for the calendar week to be able to store unique values for each calendar cell


/*week 2 calendar*/
export function CalendarWeek2() {
    const selectMorningValue6 = '2monMorningValue'
    const selectMorningValue7 = '2tueMorningValue'
    const selectMorningValue8 = '2wedMorningValue'
    const selectMorningValue9 = '2thursMorningValue'
    const selectMorningValue10 = '2friMorningValue'

    const selectLunchValue6 = '2monLunchValue'
    const selectLunchValue7 = '2tueLunchValue'
    const selectLunchValue8 = '2wedLunchValue'
    const selectLunchValue9 = '2thursLunchValue'
    const selectLunchValue10 = '2friLunchValue'

    const selectAfternoonValue6 = '2monAfternoonValue'
    const selectAfternoonValue7 = '2tueAfternoonValue'
    const selectAfternoonValue8 = '2wedAfternoonValue'
    const selectAfternoonValue9 = '2thursAfternoonValue'
    const selectAfternoonValue10 = '2friAfternoonValue'

    const [reset, setReset] = useState(0) //use state for reset button function

    //when reset button is clicked, local storage and calendar is cleared
    function resetCalendar() {
        return (
            localStorage.clear(), //this will clear the data in local storage
            setReset(1)
        )
    }

    function Week2() {
        return (
            <div className='weekContainer'>
                <div className='calendar' >
                    <div className='calendarTitle'>
                        <h1>Week 2</h1>
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
                                    <SelectMorning setValue={selectMorningValue6} />
                                </div>
                                <div className='calendarLunch'>
                                    <SelectLunch setValue={selectLunchValue6} />
                                </div>
                                <div className='calendarAfternoon'>
                                    <SelectAfternoon setValue={selectAfternoonValue6} />
                                </div>
                            </div>
                        </div>
                        <div className='calendarRow'>
                            <div className='rowName'>Tues</div>
                            <div className='dayMenu'>
                                <div className='calendarMorning'>
                                    <SelectMorning setValue={selectMorningValue7} />
                                </div>
                                <div className='calendarLunch'>
                                    <SelectLunch setValue={selectLunchValue7} />
                                </div>
                                <div className='calendarAfternoon'>
                                    <SelectAfternoon setValue={selectAfternoonValue7} />
                                </div>
                            </div>
                        </div>
                        <div className='calendarRow'>
                            <div className='rowName'>Wed</div>
                            <div className='dayMenu'>
                                <div className='calendarMorning'>
                                    <SelectMorning setValue={selectMorningValue8} />
                                </div>
                                <div className='calendarLunch'>
                                    <SelectLunch setValue={selectLunchValue8} />
                                </div>
                                <div className='calendarAfternoon'>
                                    <SelectAfternoon setValue={selectAfternoonValue8} />
                                </div>
                            </div>
                        </div>
                        <div className='calendarRow'>
                            <div className='rowName'>Thurs</div>
                            <div className='dayMenu'>
                                <div className='calendarMorning'>
                                    <SelectMorning setValue={selectMorningValue9} />
                                </div>
                                <div className='calendarLunch'>
                                    <SelectLunch setValue={selectLunchValue9} />
                                </div>
                                <div className='calendarAfternoon'>
                                    <SelectAfternoon setValue={selectAfternoonValue9} />
                                </div>
                            </div>
                        </div>
                        <div className='calendarRow'>
                            <div className='rowName'>Fri</div>
                            <div className='dayMenu'>
                                <div className='calendarMorning'>
                                    <SelectMorning setValue={selectMorningValue10} />
                                </div>
                                <div className='calendarLunch'>
                                    <SelectLunch setValue={selectLunchValue10} />
                                </div>
                                <div className='calendarAfternoon'>
                                    <SelectAfternoon setValue={selectAfternoonValue10} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={resetCalendar}>Reset Week 2</button>
            </div>
        )
    }


    return (
        <>
            {reset === 0 && <Week2 />}
            {reset === 1 && <Week2 />}
        </>

    )
}
