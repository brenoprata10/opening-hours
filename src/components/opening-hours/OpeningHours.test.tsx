import {render, screen, waitFor} from '@testing-library/react'
import OpeningHours from 'components/opening-hours/OpeningHours'
import EWeekday from 'enums/EWeekday'
import {getWeekdayList} from 'utils/weekday'

test('Renders all days of the week', async () => {
	render(<OpeningHours />)

	await waitFor(() =>
		expect(screen.queryAllByTestId('weekday-label').map((element) => element.textContent)).toHaveValue(
			getWeekdayList({start: EWeekday.MONDAY})
		)
	)
})
