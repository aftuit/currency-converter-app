import React, { useState } from 'react';
import { connect } from 'react-redux';
import { convertCurrencies } from '../redux/actions/convertAction';
const Convert = (props) => {

    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState('');

    const getConvert = () => {
        props.convertCurrencies(fromCurrency, toCurrency, amount);
        setAmount('')
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-4">
                        <h4>Amount</h4>
                        <input
                            type="number"
                            className="form-control ms-2"
                            value={amount}
                            placeholder="amout..."
                            onChange={(e) => setAmount(e.target.value > 0 && e.target.value)} />
                    </div>

                    <div className="col-4">
                        <h4>From</h4>
                        <select className="form-control" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                            {
                                props.selectedCurrencies.map((item, index) => {
                                    return (
                                        <option
                                            value={index !== 0 && item}
                                            key={item}>{item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="col-4">
                        <h4>To</h4>
                        <select className="form-control" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                            {
                                props.selectedCurrencies.map((item, index) => {
                                    return (
                                        <option
                                            value={index !== 0 && item}
                                            key={item}>{item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-success d-block mx-auto mt-3"
                    onClick={getConvert}
                >
                    Convert</button>

                {
                    props.fromCurrency !== '' && props.toCurrency !== '' && props.amount !== '' &&
                    <div className="result">
                        <h4>{props.amount} <b>{props.fromCurrency}</b> = {props.result} <b>{props.toCurrency}</b></h4>
                        <div className="mt-3">
                            <span>1 <b>{props.toCurrency}</b> = {props.result_one} <b>{props.fromCurrency}</b></span>
                            <span>1 <b>{props.fromCurrency}</b> = {props.result_two} <b>{props.toCurrency}</b></span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        currencies: state.convert.currencies,
        selectedCurrencies: state.convert.selectedCurrencies,
        fromCurrency: state.convert.fromCurrency,
        toCurrency: state.convert.toCurrency,
        amount: state.convert.amount,
        result: state.convert.result,
        result_one: state.convert.result_one,
        result_two: state.convert.result_two
    }
}
export default connect(mapStateToProps, { convertCurrencies })(Convert)
