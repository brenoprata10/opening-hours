import EHourOperationType from 'enums/EHourOperation'
import EWeekday from 'enums/EWeekday'
import TMerchantHourOperation from 'types/TMerchantHourOperation'
import TMerchantWeekOperation from 'types/TMerchantWeekOperation'
import {getNextWeekday} from 'utils/weekday'

export const getOpeningHoursWithMappedClosingTime = ({
	openingHours,
	weekday
}: {
	openingHours: TMerchantWeekOperation
	weekday: EWeekday
}): TMerchantHourOperation[] => {
	const dayOpeningHours = openingHours[weekday]
	const lastWeekdayHourOperation = dayOpeningHours[dayOpeningHours.length - 1]
	const firstOpeningHourIndex = dayOpeningHours.findIndex((openingHour) => openingHour.type === EHourOperationType.OPEN)
	const mappedDayOpeningHours = firstOpeningHourIndex !== -1 ? dayOpeningHours.slice(firstOpeningHourIndex) : []

	const nextWeekday = getNextWeekday(weekday)
	const nextWeekdayOpeningHours = openingHours[nextWeekday]

	if (
		lastWeekdayHourOperation?.type === EHourOperationType.OPEN &&
		nextWeekdayOpeningHours[0]?.type === EHourOperationType.CLOSE
	) {
		return [...mappedDayOpeningHours, nextWeekdayOpeningHours[0]]
	}

	return mappedDayOpeningHours
}
