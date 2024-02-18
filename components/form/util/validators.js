function required(value, _, __, message) {
	if(value) return [true]

	return [false, message || `this field is required`]
}

function requiredFile(value, _, __, message) {
	if(value instanceof FileList) {
		if(value.length) return [true]

		return [false, message || `this field is required`]
	}
	return required(value)
}

function fileSize(file, maxSize, __, message) {
	let size = maxSize.match(/\d+/g)?.[0] || 0
	let unit = maxSize.match(/[^0-9]\w/g)?.[0]

	let msg = message || 'image must be less than or equal to'

	function checkKBSize() {
		if((file.size / 1000) <= size)
			return [true]

		return [false, `${msg} ${maxSize}`]
	}

	function checkMBSize() {
		if((file.size / 1000 / 1000) <= size)
			return [true]

		return [false, `${msg} ${maxSize}`]
	}

	switch (unit) {
		case 'kb':
			return checkKBSize()
		case 'mb':
			return checkMBSize()
		default:
			return [false, 'not a valid unit']
	}
}

function max(value, maxValue = 0, _, message) {
	if(value.length < maxValue) return [true]

	return [false, message || `must be less than ${maxValue}`]
}

function maxnum(value, maxValue = 0, _, message) {
	console.log(parseInt(value), parseInt(maxValue))
	if(value < maxValue) return [true]

	return [false, message || `must be less than ${maxValue}`]
}

function exactly(value, maxValue = 0, _, message) {
	console.log(parseInt(value), parseInt(maxValue))
	if(value == maxValue) return [true]

	return [false, message || `must be exactly ${maxValue}`]
}

function minmax(value, minMaxValue, _, message) {
	if(value.length >= minMaxValue[0] && value.length < minMaxValue[1]) return [true]

	return [false, message || `must be greater than ${minMaxValue[0]} and less than ${minMaxValue[1]}`] 
}

function min(value, minValue = 0, _, message) {
	if(value.length >= minValue) return [true]

	return [false, message || `must be greater than ${minValue}`] 
}

function email(value, _, __, message) {
	if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) return [true]

	return [false, message || `not a valid email`]
}

// let emailAbortController
// async function emailExists(email) {
// 	if(emailAbortController) emailAbortController.abort()

// 	emailAbortController = new AbortController()
	
// 	try {
// 		const response = await axios.get(`${URL}users/exists/email/${email}`, {
// 			signal: emailAbortController.signal
// 		})
		
// 		if(!response) return [true]

// 		return [false, `email already exists`]
		
// 	} catch (err) {
// 		if(err?.response?.status == 404) {
// 			return [true]
// 		}
// 		return [false, '']
// 	}
// }

// let shopAbortController
// async function shopExists(shop) {
// 	if(shopAbortController) shopAbortController.abort()

// 	shopAbortController = new AbortController()
	
// 	try {
// 		const response = await axios.get(`${URL}shops/exists/${shop}`, {
// 			signal: shopAbortController.signal
// 		})
		
// 		if(!response) return [true]

// 		return [false, `shop already exists`]
		
// 	} catch (err) {
// 		if(err?.response?.status == 404) {
// 			return [true]
// 		}
// 		return [false, '']
// 	}
// }

// let telegramAbortController
// async function telegramExists(telegram) {
// 	if(telegramAbortController) telegramAbortController.abort()

// 	telegramAbortController = new AbortController()
	
// 	try {
// 		const response = await axios.get(`${URL}shops/exists/telegram${telegram}`, {
// 			signal: telegramAbortController.signal
// 		})
		
// 		if(!response) return [true]

// 		return [false, `telegram already exists`]
		
// 	} catch (err) {
// 		if(err?.response?.status == 404) {
// 			return [true]
// 		}
// 		return [false, '']
// 	}
// }

// let phoneAbortController
// async function phoneExists(phone) {
// 	if(phoneAbortController) phoneAbortController.abort()

// 	phoneAbortController = new AbortController()
	
// 	try {
// 		const response = await axios.get(`${URL}users/exists/phone/${phone}`, {
// 			signal: phoneAbortController.signal
// 		})
		
// 		if(!response) return [true]

// 		return [false, `phone already exists`]
// 	} catch (err) {
// 		if(err?.response?.status == 404) return [true]
		
// 		return [false, '']
// 	}
// }

function num(value, limit, _, message) {
	let regex = /^[0-9]+$/
	if(limit instanceof Array) {
		if(limit.length == 1)
			regex = new RegExp(`^[0-9]{${limit[0]}}$`)
		if(limit.length > 1)
			regex = new RegExp(`^[0-9]{${limit[0]},${limit[1]}}$`)
	}	

	if(regex.test(value)) return [true]	
	
	return [false,  message || `not a valid number`] 
}

function num_minmax(value, limit, _, message) {
	console.log(value, limit)
	if(limit instanceof Array && parseInt(value) >= parseInt(limit?.[0]) && parseInt(value) <= parseInt(limit?.[1])) {
		return [true]	
	}		
	return [false,  message || `must be between ${limit?.[0]} and ${limit?.[1]}`] 
}

function phone(value, limit, _, message) {
	let regex = /^(\+2519|09)[0-9]{8}$/
	if(regex.test(value)) return [true]	
	
	return [false, message || `not a valid phone number`] 
}

function phone_251(value, limit, _, message) {
	let regex = /^9[0-9]{8}$/
	if(regex.test(value)) return [true]	
	
	return [false, message || `not a valid phone number`] 
}

function price(value, limit, _, message) {
	let regex = /^(?=[^0])[0-9]+$/
	if(regex.test(value)) return [true]	
	
	return [false, message || `not a valid price`] 
}

function alpha(value, limit, _, message) {
	let regex = /^[ a-zA-Z]+$/
	if(limit instanceof Array) {
		if(limit.length == 1)
			regex = new RegExp(`^[ a-zA-Z]{${limit[0]}}$`)
		if(limit.length > 1)
			regex = new RegExp(`^[ a-zA-Z]{${limit[0]},${limit[1]}}$`)
	}	

	if(regex.test(value)) return [true]	
	
	return [false, message || `not a valid alphabet`] 
}

function equalTo(value, name, formid, message) {
	let form = document.querySelector("#"+formid)
	if(form[name].value == value) return [true]

	return [false, message || `does'nt much the password`] 
}

function exact(value, val, _, message) {
	console.log(value, val)
	if(value == val) return [true]

	return [false, message || `does'nt much the password`] 
}

function oneof(value, values = [], _, message) {
	return values.includes(value) ? [true] : [false, message || `must be USED or NEW`] 
}

function isTrue(value, val = false, _, message) {
	console.log(value, val)
	return val == value ? [true] : [false, message || 'this need to be true']
}

const added = {}

const common =  {
	alpha,
	max,
	min,
	num,
	exact,
	required,
	equalTo,
	maxnum,
	minmax,
	exactly,
	num_minmax,
	phone_251,
	price
	// shopExists,
	// telegramExists,
	// phoneExists,
	// emailExists,
}

const checkbox = {
	required,
}

const select = {
	required,
}

const file = {
	required: requiredFile,
	fileSize,
}

const textarea = common
const text = {
	...common,
	email,
	phone,
	oneof,
	phone_251,
	price
}

const date = common

const password = text

Object.setPrototypeOf(checkbox, added)
Object.setPrototypeOf(select, added)
Object.setPrototypeOf(file, added)
Object.setPrototypeOf(textarea, added)
Object.setPrototypeOf(text, added)
Object.setPrototypeOf(password, added)

export function addValidator(validators) {
	if(validators instanceof Array) {
		validators.map(validator => {
			added[validator.name] = validator
		})
	} else {
		added[validators.name] = validators
	}
}

export function getValidators() {
	return {
		checkbox,
		select,
		file,
		textarea,
		text,
		password,
		date
	}
}