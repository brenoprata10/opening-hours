import {render, screen} from '@testing-library/react'
import App from 'App'

test('Check rendering Opening Hours', async () => {
	render(<App />)

	await screen.findByTestId('opening-hours')
})
