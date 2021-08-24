import axios from "axios";
import { CONVERT } from "../util/const";
import { BASE_URL } from "../util/const";
import { API_KEY } from "../util/const";
export const updateState = (data) => {
    return{
        type: CONVERT,
        payload: data
    }
}

export const getData = () => {
    return function (dispatch, getState){
        return axios.get(BASE_URL + "latest?access_key=" + API_KEY)
                .then(res => {
                 dispatch(updateState({
                     currencies: ["", ...Object.keys(res.data.rates)], 
                     rates: res.data.rates
                    }))
                }
            )

    }
}

export const saveSelectedItem = (item) => (dispatch, getState) => {
        if(item !== "" && getState().convert.selectedCurrencies.indexOf(item) === -1){
            dispatch(updateState({selectedCurrencies: [ ...getState().convert.selectedCurrencies, item]}))
        }
}

export const addAllItems = () => (dispatch, getState) => {
    dispatch(updateState({
        selectedCurrencies: [...getState().convert.currencies],
    }))
}

export const deleteSelectedItem = (id) => (dispatch, getState) => {
    dispatch(updateState({selectedCurrencies: [...getState().convert.selectedCurrencies.filter((value, index) => index !== id)]}))
}

export const convertCurrencies = (fromCurrency, toCurrency, amount) => {
    return function (dispatch, getState){
        const first = getState().convert.rates[fromCurrency]
        const second = getState().convert.rates[toCurrency]
        dispatch(updateState({
            amount: amount,
            fromCurrency: fromCurrency,
            toCurrency: toCurrency,
            result: ( amount * second / first),
            result_one: first / second,
            result_two: second / first        
        }))
    }
}