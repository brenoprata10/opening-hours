import styles from 'components/core/opening-hours/OpeningHours.module.scss'
import Card from 'components/utils/card/Card'

const OpeningHours = () => {
	return (
		<div className={styles.wrapper}>
			<Card className={styles.card} title={'Opening hours'} headerLeading={<div className={styles['clock-icon']} />}>
				OI
			</Card>
		</div>
	)
}

export default OpeningHours
