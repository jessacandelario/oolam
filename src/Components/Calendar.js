import './Calendar.css'
import { SelectMorning, SelectLunch, SelectAfternoon } from './LocalStorage';
//import { useEffect } from "react"
//import useLocalStorage from './LocalStorage'

/*Calendar layout, reusable component*/
export function CalendarWeek1() {
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

    return (
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
        </div>)
}

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

    return (
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
        </div>)
}


/*
function MorningTeaSelection() {
    return (
        <Select options={morningMenu} />
    )
  
    return (
        <select className='ddMenu'>
            <option default>Select Morning Tea</option>
            <option key='mt1'>{morningMenu[0]}</option>
            <option key='mt2'>{morningMenu[1]}</option>
            <option key='mt3'>{morningMenu[2]}</option>
            <option key='mt4'>{morningMenu[3]}</option>
            <option key='mt5'>{morningMenu[4]}</option>
            <option key='mt6'>{morningMenu[5]}</option>
        </select>
    )

}  

function LunchSelection() {
    return (
        <select className='ddMenu'>
            <option default>Select Lunch</option>
            <option key='l1'>{lunchMenu[0]}</option>
            <option key='l2'>{lunchMenu[1]}</option>
            <option key='l3'>{lunchMenu[2]}</option>
            <option key='l4'>{lunchMenu[3]}</option>
            <option key='l5'>{lunchMenu[4]}</option>
            <option key='l6'>{lunchMenu[5]}</option>
        </select>
    )
}

function AfternoonTeaSelection() {
    return (
        <select className='ddMenu'>
            <option default>Select Afternoon Tea</option>
            <option key='a1'>{afternoonMenu[0]}</option>
            <option key='a2'>{afternoonMenu[1]}</option>
            <option key='a3'>{afternoonMenu[2]}</option>
            <option key='a4'>{afternoonMenu[3]}</option>
            <option key='a5'>{afternoonMenu[4]}</option>
            <option key='a6'>{afternoonMenu[5]}</option>
        </select>
    )
}

//calendar row reusable component
function CalendarRow(props) {
    return (
        <div className='calendarRow'>
            <div className='rowName'>{props.rowName}</div>
            <div className='dayMenu'>
                <div className='calendarMorning'>
                    <SelectMorning />
                </div>
                <div className='calendarLunch'>
                    <LunchSelection />
                </div>
                <div className='calendarAfternoon'>
                    <AfternoonTeaSelection />
                </div>
            </div>
        </div>

    )
}
*/
