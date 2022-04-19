import {render, screen} from '@testing-library/react'
import EHourOperationType from 'enums/EHourOperation'
import EWeekday from 'enums/EWeekday'
import WeekdayItem from 'components/opening-hours/components/weekday-item/WeekdayItem'
import {getCurrentWeekday} from 'utils/weekday'

test('Check Weekday Prop', () => {
	const weekday = EWeekday.MONDAY

	render(<WeekdayItem weekday={weekday} openingDayHours={[]} />)

	expect(screen.queryByTestId('weekday-label')?.textContent).toEqual(weekday)
})

test('Should render Today Tag', () => {
	const currentWeekday = getCurrentWeekday()

	render(<WeekdayItem weekday={currentWeekday} openingDayHours={[]} />)

	expect(screen.queryByTestId('today-tag')).toBeVisible()
})

test('Should NOT render Today Tag', () => {
	const currentWeekday = getCurrentWeekday()

	render(
		<WeekdayItem
			weekday={currentWeekday === EWeekday.MONDAY ? EWeekday.FRIDAY : EWeekday.MONDAY}
			openingDayHours={[]}
		/>
	)

	expect(screen.queryByTestId('today-tag')).not.toBeInTheDocument()
})

test('Should display Closed label', () => {
	render(<WeekdayItem weekday={EWeekday.MONDAY} openingDayHours={[{type: EHourOperationType.CLOSE, value: 1}]} />)

	expect(screen.queryByTestId('closed-label')).toBeVisible()
})

test('Should display hour operation label', () => {
	const nonBreakingChar = String.fromCharCode(160)
	const hourInMilliseconds = 3600
	const openingTime = 1
	const closingTime = 12

	render(
		<WeekdayItem
			weekday={EWeekday.MONDAY}
			openingDayHours={[
				{type: EHourOperationType.OPEN, value: openingTime * hourInMilliseconds},
				{type: EHourOperationType.CLOSE, value: closingTime * hourInMilliseconds}
			]}
		/>
	)

	expect(screen.queryByTestId('opening-hour')?.textContent).toEqual(
		`${openingTime} AM${nonBreakingChar}-${nonBreakingChar}${closingTime} PM`
	)
})
