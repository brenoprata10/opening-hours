import {render, screen} from '@testing-library/react'
import Card from 'components/utils/card/Card'

const CONTENT = 'Jest testing content'

test('Check Card Props', () => {
	const title = 'Testing'
	const jestImageId = 'jest-image'
	const className = 'jest-testing-classname'
	const headerLeading = <img id={jestImageId} />

	render(
		<Card title={title} className={className} headerLeading={headerLeading}>
			<span>{CONTENT}</span>
		</Card>
	)

	expect(screen.queryByTestId('card')?.className).toContain(className)
	expect(screen.queryByTestId('card-header')?.textContent).toEqual(title)
	expect(screen.queryByTestId('card-content')?.textContent).toEqual(CONTENT)
	expect(screen.queryByTestId('card-header-leading')?.firstElementChild).toContainHTML(jestImageId)
})

test('Check hidden title', () => {
	render(
		<Card>
			<span>{CONTENT}</span>
		</Card>
	)

	expect(screen.queryByTestId('card-header')).not.toBeInTheDocument()
})
