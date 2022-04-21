import styles from 'components/opening-hours/components/weekday-item/WeekdayItem.module.scss'
import EHourOperationType from 'enums/EHourOperation'
import EWeekday from 'enums/EWeekday'
import React from 'react'
import TMerchantHourOperation from 'types/TMerchantHourOperation'
import {getFormattedTime} from 'utils/time'
import {getCurrentWeekday} from 'utils/weekday'

const HOUR_SEPARATOR = '-'

const WeekdayItem = ({weekday, openingDayHours}: {weekday: EWeekday; openingDayHours: TMerchantHourOperation[]}) => {
	const isClosed = openingDayHours.every((hourOperation) => hourOperation.type !== EHourOperationType.OPEN)
	const shouldDisplayTodayTag = getCurrentWeekday() === weekday

	return (
		<div className={styles.wrapper}>
			<div className={styles.weekday}>
				<span className={styles['weekday-label']} data-testid={'weekday-label'}>
					{weekday}
				</span>
				{shouldDisplayTodayTag && (
					<b className={styles['today-tag']} data-testid={'today-tag'}>
						TODAY
					</b>
				)}
			</div>
			{isClosed ? (
				<div className={styles.closed} data-testid={'closed-label'}>Closed</div>
			) : (
				<div className={styles['opening-hour']} data-testid={'opening-hour'}>
					{openingDayHours.map(({type, value}, index) => (
						<span key={`${weekday}-${index}`}>
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
