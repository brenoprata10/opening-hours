export const getFormattedTime = (value: number) => {
	const formatTime = new Intl.DateTimeFormat('default', {
		timeStyle: 'short',
		hour12: true
	})
	const fractionalHours = value / 60 / 60
	const hours = Math.trunc(fractionalHours)
	const minutes = 60 * (fractionalHours % 1)

	const date = new Date()
	date.setHours(hours)
	date.setMinutes(minutes)

	const formattedTime = formatTime.format(date)

	return minutes === 0 ? formattedTime.replace(':00', '') : formattedTime
}
