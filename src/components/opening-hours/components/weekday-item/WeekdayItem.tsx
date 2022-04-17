import styles from 'components/opening-hours/components/weekday-item/WeekdayItem.module.scss'
import EWeekday from 'enums/EWeekday'

const WeekdayItem = ({
	weekday,
	displayTodayTag,
	isClosed
}: {
	weekday: EWeekday
	displayTodayTag?: boolean
	isClosed?: boolean
}) => (
	<div className={styles.wrapper}>
		<div>
			<span className={styles.weekday}>{weekday}</span>
			{displayTodayTag && <b className={styles['today-tag']}>TODAY</b>}
		</div>
		{isClosed && <div className={styles.closed}>Closed</div>}
	</div>
)

export default WeekdayItem
