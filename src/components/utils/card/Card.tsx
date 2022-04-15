import React from 'react'
import styles from 'components/utils/card/Card.module.scss'

const Card = ({children, header}: {children: React.ReactNode; header?: React.ReactNode}) => (
	<div className={styles.card}>
		{header && <div className={styles.header}>{header}</div>}
		{children}
	</div>
)
export default Card
