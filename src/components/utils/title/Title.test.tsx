import {render, screen} from '@testing-library/react'
import Title from 'components/utils/title/Title'

test('Check Title Props', () => {
	const title = 'Jest testing title'
	
	render(<Title label={title} />)

	expect(screen.getByText(title).textContent).toEqual(title)
})


test('Check Title bold', () => {
	const title = 'Jest testing title'
	
	render(<Title label={title} />)

	expect(screen.getByText(title).tagName).toEqual('B')
})
