import EWeekday from 'enums/EWeekday'
import TMerchantHourOperation from 'types/TMerchantHourOperation'

type TMerchantWeekOperation = {
	[weekday in EWeekday]: TMerchantHourOperation[]
}

export default TMerchantWeekOperation
