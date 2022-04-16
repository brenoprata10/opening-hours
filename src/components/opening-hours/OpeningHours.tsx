import styles from 'components/opening-hours/OpeningHours.module.scss'
import Card from 'components/utils/card/Card'
import EWeekday from 'enums/EWeekday'
import WeekdayItem from 'components/opening-hours/components/weekday-item/WeekdayItem'

const OpeningHours = () => (
	<div className={styles.wrapper}>
		<Card className={styles.card} title={'Opening hours'} headerLeading={<div className={styles['clock-icon']} />}>
			<div className={styles['weekdays-list']}>
				{Object.values(EWeekday).map((weekday) => (
					<WeekdayItem />
				))}
			</div>
		</Card>
	</div>
)

export default OpeningHours
