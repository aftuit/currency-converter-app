import { CONVERT } from "../util/const"

const initialState = {
    addCurrency: false,
    amount: '',
    fromCurrency: '',
    toCurrency: '',
    rates: [],
    currencies: [""],
    selectedCurrencies: [""],
    result: '',
    result_one: '',
    result_two: ''
}

export const convertReducer = (state = initialState, action) => {
    if(action.type === CONVERT){
        return{
            ...state,
            ...action.payload
        }
    }
    return state
}