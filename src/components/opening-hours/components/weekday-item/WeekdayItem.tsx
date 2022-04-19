import styles from 'components/opening-hours/components/weekday-item/WeekdayItem.module.scss'
import EHourOperationType from 'enums/EHourOperation'
import EWeekday from 'enums/EWeekday'
import React from 'react'
import TMerchantHourOperation from 'types/TMerchantHourOperation'
import {getFormattedTime} from 'utils/time'

const HOUR_SEPARATOR = '-'

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
			<div className={styles.weekday}>
				<span className={styles['weekday-label']}>{weekday}</span>
				{displayTodayTag && <b className={styles['today-tag']}>TODAY</b>}
			</div>
			{isClosed ? (
				<div className={styles.closed}>Closed</div>
			) : (
				<div className={styles['opening-hour']}>
					{openingDayHours.map(({type, value}) => (
						<span>
							{type === EHourOperationType.CLOSE && <>&nbsp;{HOUR_SEPARATOR}&nbsp;</>}
							{getFormattedTime(value)}
						</span>
					))}
				</div>
			)}
		</div>
	)
}

export default React.memo(WeekdayItem)
