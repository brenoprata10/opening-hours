import EWeekday from 'enums/EWeekday'

export const getCurrentWeekday = (): EWeekday => {
	const currentDay = new Date().getDay()
	return Object.values(EWeekday)[currentDay]
}

export const getWeekdayList = ({start}: {start?: EWeekday} = {}) => {
	const weekdayList = Object.values(EWeekday)

	return start
		? weekdayList.sort((firstWeekday, secondWeekday) => {
				if (firstWeekday === start) {
					return -1
				}

				const startWeekdayIndex = weekdayList.indexOf(start)
				const firstWeekdayIndex = weekdayList.indexOf(firstWeekday)
				const secondWeekdayIndex = weekdayList.indexOf(secondWeekday)

				if (firstWeekdayIndex < startWeekdayIndex) {
					return 1
				}
				if (secondWeekdayIndex < startWeekdayIndex) {
					return -1
				}

				return 0
		  })
		: weekdayList
}
