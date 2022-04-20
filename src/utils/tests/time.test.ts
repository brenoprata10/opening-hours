import {getFormattedTime} from 'utils/time'

const ONE_HOUR = 3600

test('Check Basic Functionality', () => {
	const oneInTheMorning = getFormattedTime(ONE_HOUR)

	expect(oneInTheMorning).toEqual('1 AM')
})

test('Check PM based time', () => {
	const hour = 12
	const formattedTime = getFormattedTime(ONE_HOUR * hour)

	expect(formattedTime).toEqual(`${hour} PM`)
})

test('Check Hour with Minutes', () => {
	const hour = 10.5
	const formattedTime = getFormattedTime(ONE_HOUR * hour)

	expect(formattedTime).toEqual('10:30 AM')
})
