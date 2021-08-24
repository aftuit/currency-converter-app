import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { saveSelectedItem } from '../redux/actions/convertAction';
const AddcurrencyCard = (props) => {

    const [value, setValue] = useState("")

    const addCurrencyToList = (item) => {
        props.saveSelectedItem(item);
        setValue("")
    }

    return (
        <div className="add_currency_box card ">
            <span>select currency of country : </span>
            <div className="d-flex mt-3">
                <select
                    className="form-control"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}>

                    {props.currencies.map((item) => {
                        return (
                            <option
                                key={item}
                                value={item}
                            >{item}</option>
                        )
                    })}

                </select>
                <button className="btn btn-success ms-3" onClick={() => addCurrencyToList(value)}>Add</button>

            </div>
            <div className="d-flex justify-content-between align-items-center mt-3 border-top pt-2">
                <b>{value}</b>
                <div className={`currency-flag currency-flag-` + value?.toLowerCase()}></div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        currencies: state.convert.currencies,
        selectedCurrencies: state.convert.selectedCurrencies
    }
}
export default connect(mapStateToProps, { saveSelectedItem })(AddcurrencyCard);