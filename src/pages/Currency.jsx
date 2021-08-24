import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData, updateState } from '../redux/actions/convertAction';
import AddcurrencyCard from '../components/AddcurrencyCard';
import CurrencyList from '../components/CurrencyList';
import { Link } from 'react-router-dom';
const Currency = (props) => {

    useEffect(() => {
        props.getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className="components-wrap d-flex">
                <div className="add__currence__wrap">
                    <h4 className="fw-bold">Select currencies</h4>
                    <p>Select the currencies to add currency table</p>
                    {
                        props.addCurrency &&
                        <AddcurrencyCard />               
                    }

                    {props.selectedCurrencies.length > 2 && 
                    <Link 
                        to="/convert" 
                        className="convert__link text-decoration-none"
                    >
                        Converter &#8594;
                    </Link>}
                </div>
                <CurrencyList />
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        currencies: state.convert.currencies,
        load: state.convert.load,
        addCurrency: state.convert.addCurrency,
        selectedCurrencies: state.convert.selectedCurrencies,
    }
}
export default connect(mapStateToProps, { getData, convertAction: updateState })(Currency)
