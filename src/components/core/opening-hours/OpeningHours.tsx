import styles from 'components/core/opening-hours/OpeningHours.module.scss'
import Card from 'components/utils/card/Card'
import Title from 'components/utils/title/Title'

const OpeningHours = () => {
	return (
		<div className={styles.wrapper}>
			<Card header={<Title label={'Opening hours'} icon={<div className={styles['clock-icon']} />} />}>OI</Card>
		</div>
	)
}

export default OpeningHours
