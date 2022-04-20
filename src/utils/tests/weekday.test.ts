import EWeekday from 'enums/EWeekday'
import {getCurrentWeekday, getWeekdayList, getNextWeekday} from 'utils/weekday'

test('Check current weekday', () => {
	const currentWeekday = getCurrentWeekday()
	const currentDayIndex = new Date().getDay()

	expect(Object.values(EWeekday).indexOf(currentWeekday)).toEqual(currentDayIndex)
})

test('Check weekday list', () => {
	const weekdayList = getWeekdayList()

	expect(Object.values(EWeekday)).toEqual(weekdayList)
})

test('Check weekday list starting from monday', () => {
	const weekdayList = getWeekdayList({start: EWeekday.MONDAY})

	expect([
		EWeekday.MONDAY,
		EWeekday.TUESDAY,
		EWeekday.WEDNESDAY,
		EWeekday.THURSDAY,
		EWeekday.FRIDAY,
		EWeekday.SATURDAY,
		EWeekday.SUNDAY
	]).toEqual(weekdayList)
})

test('Check weekday list starting from a midweek', () => {
	const weekdayList = getWeekdayList({start: EWeekday.WEDNESDAY})

	expect([
		EWeekday.WEDNESDAY,
		EWeekday.THURSDAY,
		EWeekday.FRIDAY,
		EWeekday.SATURDAY,
		EWeekday.SUNDAY,
		EWeekday.MONDAY,
		EWeekday.TUESDAY
	]).toEqual(weekdayList)
})

test('Check next weekday', () => {
	const nextWeekday = getNextWeekday(EWeekday.TUESDAY)

	expect(EWeekday.WEDNESDAY).toEqual(nextWeekday)
})

test('Check next weekday from the end of the array', () => {
	const nextWeekday = getNextWeekday(EWeekday.SATURDAY)

	expect(EWeekday.SUNDAY).toEqual(nextWeekday)
})
