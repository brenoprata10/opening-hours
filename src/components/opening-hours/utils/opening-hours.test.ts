import {getOpeningHoursWithMappedClosingTime} from 'components/opening-hours/utils/opening-hours'
import EHourOperationType from 'enums/EHourOperation'
import EWeekday from 'enums/EWeekday'

const OPENING_HOUR = {type: EHourOperationType.OPEN, value: 3600}
const CLOSING_HOUR = {type: EHourOperationType.CLOSE, value: 7200}
const DEFAULT_HOUR_OPERATION = [OPENING_HOUR, CLOSING_HOUR]

const OPENING_HOURS = {
	[EWeekday.SUNDAY]: [OPENING_HOUR],
	[EWeekday.MONDAY]: [CLOSING_HOUR, ...DEFAULT_HOUR_OPERATION],
	[EWeekday.TUESDAY]: DEFAULT_HOUR_OPERATION,
	[EWeekday.WEDNESDAY]: DEFAULT_HOUR_OPERATION,
	[EWeekday.THURSDAY]: DEFAULT_HOUR_OPERATION,
	[EWeekday.FRIDAY]: DEFAULT_HOUR_OPERATION,
	[EWeekday.SATURDAY]: DEFAULT_HOUR_OPERATION
}

test('Check closing time on different day', () => {
	const mappedDayOpeningHours = getOpeningHoursWithMappedClosingTime({
		openingHours: OPENING_HOURS,
		weekday: EWeekday.SUNDAY
	})
	expect(mappedDayOpeningHours).toEqual(DEFAULT_HOUR_OPERATION)
})

test('Check hour operation with closing time as first array item', () => {
	const mappedDayOpeningHours = getOpeningHoursWithMappedClosingTime({
		openingHours: OPENING_HOURS,
		weekday: EWeekday.MONDAY
	})
	expect(mappedDayOpeningHours).toEqual(DEFAULT_HOUR_OPERATION)
})
