import React from 'react'
import styles from 'components/utils/card/Card.module.scss'
import Title from 'components/utils/title/Title'

const Card = ({
	children,
	title,
	headerLeading,
	className
}: {
	children: React.ReactNode
	title?: string
	headerLeading?: React.ReactNode
	className?: string
}) => (
	<div className={`${styles.card} ${className ?? ''}`} data-testid='card'>
		{title && (
			<div className={styles.header} data-testid='card-header'>
				<div className={styles['header-leading']} data-testid='card-header-leading'>{headerLeading}</div>
				<Title label={title} />
			</div>
		)}
		<div data-testid='card-content'>{children}</div>
	</div>
)
export default Card
