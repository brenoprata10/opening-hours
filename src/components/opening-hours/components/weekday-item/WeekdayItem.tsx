import styles from 'components/opening-hours/components/weekday-item/WeekdayItem.module.scss'
import EHourOperationType from 'enums/EHourOperation'
import EWeekday from 'enums/EWeekday'
import TMerchantHourOperation from 'types/TMerchantHourOperation'
import {getFormattedTime} from 'utils/time'

const WeekdayItem = ({
	weekday,
	openingDayHours,
	displayTodayTag
}: {
	weekday: EWeekday
	openingDayHours: TMerchantHourOperation[]
	displayTodayTag?: boolean
}) => {
	const isClosed = openingDayHours.every((hourOperation) => hourOperation.type !== EHourOperationType.OPEN)

	return (
		<div className={styles.wrapper}>
			<div>
				<span className={styles.weekday}>{weekday}</span>
				{displayTodayTag && <b className={styles['today-tag']}>TODAY</b>}
			</div>
			{isClosed ? (
				<div className={styles.closed}>Closed</div>
			) : (
				<span>{openingDayHours.map((hourOperation) => getFormattedTime(hourOperation.value))}</span>
			)}
		</div>
	)
}

export default WeekdayItem
