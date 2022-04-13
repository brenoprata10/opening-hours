import EHourOperation from 'enums/EHourOperation'

type TMerchantHourOperation = {
	type: EHourOperation
	value: number // Amount of seconds past midnight e.g. 3600 = 1AM
}

export default TMerchantHourOperation
