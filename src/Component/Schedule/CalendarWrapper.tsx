import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import moment from 'moment';
import 'moment-timezone';
import { useDispatch, useSelector } from 'react-redux';
import { dayPressSelected } from '../../reducer/action';
import { selectorDaySelected } from '../../reducer/selector';
import { isEqual } from 'lodash';
const getDaysInMonth = (month: any, year: any, days: any) => {
    let pivot = moment().month(month).year(year).startOf('month')
    const end = moment().month(month).year(year).endOf('month')

    let dates: any = {}
    const disabled = { disabled: true }
    while (pivot.isBefore(end)) {
        days.forEach((day: any) => {
            dates[pivot.day(day).format("YYYY-MM-DD")] = disabled
        })
        pivot.add(7, 'days')
    }
    return dates
}
const CalendarWrapper = (props: any) => {
    const DISABLED_DAYS = ['Saturday', 'Sunday']
    const [markedDates, setMarkedDates] = useState(getDaysInMonth(moment().month(), moment().year(), DISABLED_DAYS))

    const onMonthChange = (date: any) => {
        const newMarkDate: any = getDaysInMonth(date.month - 1, date.year, DISABLED_DAYS)
        if (newMarkDate[props.daySelected] == null) {
            newMarkDate[props.daySelected] = { selected: true }
        } else {
            if (!newMarkDate[props.daySelected]["disabled"]) {
                newMarkDate[props.daySelected] = { selected: true }
            }
        }
        setMarkedDates(newMarkDate)
    }
    useEffect(() => {
        const newMarkedDates = { ...markedDates }
        if (newMarkedDates[props.daySelected] == null) {
            newMarkedDates[props.daySelected] = { selected: true }
        } else {
            if (!newMarkedDates[props.daySelected]["disabled"]) {
                newMarkedDates[props.daySelected] = { selected: true }
            }
        }
        if (!isEqual(newMarkedDates, markedDates)) {
            setMarkedDates(newMarkedDates)
        }
    }, [props.daySelected])
    const onDayPress = (day: any) => {
        const newMarkedDates = { ...markedDates }
        if (newMarkedDates[props.daySelected]["selected"]) {
            delete newMarkedDates[props.daySelected]
            setMarkedDates((markedDates: any) => ({ ...newMarkedDates }))
        }
        props.handleChangeDaySelected(day.dateString)
    }
    const renderMain = () => {
        return (
            <View>
                <Calendar
                    // Initially visible month. Default = Date()
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    // Handler which gets executed on day press. Default = undefined
                    time-zone={'Asia/Ho_Chi_Minh'}
                    minDate={moment().format('YYYY-MM-DD')}
                    maxDate={moment().add("1", "month").format('YYYY-MM-DD')}
                    // Handler which gets executed on day long press. Default = undefined
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MM/yyyy'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => onMonthChange(month)}
                    // Hide month navigation arrows. Default = false
                    hideArrows={false}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    // renderArrow={(direction) => (<Arrow/>)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={false}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={false}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={false}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={false}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={subtractMonth => subtractMonth()}
                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                    // Disable left arrow. Default = false
                    // disableArrowLeft={true}
                    // Disable right arrow. Default = false
                    // disableArrowRight={true}
                    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    disableAllTouchEventsForDisabledDays={true}
                    // Replace default month and year title with custom one. the function receive a date as parameter.
                    // renderHeader={(date) => {/*Return JSX*/}}
                    // Enable the option to swipe between months. Default = false
                    onDayPress={(day: any) => onDayPress(day)}
                    enableSwipeMonths={true}
                    markedDates={markedDates}
                />
            </View>
        )
    }
    return (
        <>
            {renderMain()}
        </>
    )
}
export default CalendarWrapper