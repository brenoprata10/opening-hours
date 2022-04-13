import EWeekday from 'enums/EWeekday'
import TMerchantHourOperation from 'types/TMerchantHourOperation'

type TMerchantWeekOperation = {
	[type in EWeekday]: TMerchantHourOperation[]
}

export default TMerchantWeekOperation
