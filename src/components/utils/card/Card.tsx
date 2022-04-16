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
	<div className={`${styles.card} ${className ?? ''}`}>
		{title && (
			<div className={styles.header}>
				<div className={styles['header-leading']}>{headerLeading}</div>
				<Title label={'Opening hours'} />
			</div>
		)}
		{children}
	</div>
)
export default Card
