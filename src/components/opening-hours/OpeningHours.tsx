import styles from 'components/opening-hours/OpeningHours.module.scss'
import Card from 'components/utils/card/Card'
import WeekdayItem from 'components/opening-hours/components/weekday-item/WeekdayItem'
import {useEffect, useState} from 'react'
import TMerchantWeekOperation from 'types/TMerchantWeekOperation'
import {fetchOpeningHours} from 'api/merchant'
import EHourOperationType from 'enums/EHourOperation'
import {getCurrentWeekday, getWeekdayList} from 'utils/weekday'
import EWeekday from 'enums/EWeekday'

const START_WEEKDAY = EWeekday.MONDAY

const OpeningHours = () => {
	const [openingHours, setOpeningHours] = useState<TMerchantWeekOperation | undefined>()
	const currentWeekday = getCurrentWeekday()
	const weekdayList = getWeekdayList({start: START_WEEKDAY})

	useEffect(() => {
		const loadOpeningHours = async () => {
			const merchantOpeningHours = await fetchOpeningHours()
			setOpeningHours(merchantOpeningHours)
		}

		void loadOpeningHours()
	}, [])

	return (
		<div className={styles.wrapper}>
			<Card className={styles.card} title={'Opening hours'} headerLeading={<div className={styles['clock-icon']} />}>
				<div className={styles['weekdays-list']}>
					{weekdayList.map((weekday) => (
						<WeekdayItem
							key={`${weekday}-item`}
							weekday={weekday}
							displayTodayTag={currentWeekday === weekday}
							isClosed={openingHours?.[weekday].every(
								(hourOperation) => hourOperation.type !== EHourOperationType.OPEN
							)}
						/>
					))}
				</div>
			</Card>
		</div>
	)
}

export default OpeningHours
