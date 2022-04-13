import TMerchantWeekOperation from 'types/TMerchantWeekOperation'
import * as OPENING_HOURS from 'data/opening-hours.json'

export const fetchOpeningHours = (): Promise<TMerchantWeekOperation> => Promise.resolve(OPENING_HOURS as TMerchantWeekOperation)
