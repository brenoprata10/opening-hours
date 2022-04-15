import React from 'react'
import styles from 'components/utils/title/Title.module.scss'

const Title = ({label, icon}: {label: string; icon?: React.ReactNode}) => (
	<div className={styles.wrapper}>
		{icon && <div className={styles.icon}>{icon}</div>}
		<b>{label}</b>
	</div>
)

export default Title
