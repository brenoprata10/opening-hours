import {render, screen} from '@testing-library/react'
import Card from './Card'

test('Check Card Props', () => {
	const title = 'Testing'
	const content = 'Jest testing content'
	const jestImageId = 'jest-image'
	const className = 'jest-testing-classname'
	const headerLeading = <img id={jestImageId} />

	render(
		<Card title={title} className={className} headerLeading={headerLeading}>
			<span>{content}</span>
		</Card>
	)

	expect(screen.queryByTestId('card')?.className).toContain(className)
	expect(screen.queryByTestId('card-header')?.textContent).toEqual(title)
	expect(screen.queryByTestId('card-content')?.textContent).toEqual(content)
	expect(screen.queryByTestId('card-header-leading')?.firstElementChild).toContainHTML(jestImageId)
})
