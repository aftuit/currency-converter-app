import React from 'react';
import { connect } from 'react-redux';
import { deleteSelectedItem, updateState, addAllItems } from '../redux/actions/convertAction';
const CurrencyList = (props) => {
    return (
        <div className="List-box">
            <div className="d-flex justify-content-between align-items-center">
                <span>Actions</span>

                <div className="buttons d-flex">
                    <button
                        type="button"
                        className="btn mx-2"
                        onClick={() => props.updateState({ addCurrency: true })}
                    >Add currency</button>
                    <button
                        type="button"
                        className="btn mx-2"
                        onClick={props.addAllItems}
                    >Add all currencies</button>
                    <button
                        type="button"
                        className="btn mx-2"
                        onClick={() => props.updateState({ selectedCurrencies: [""] })}
                    >Remove all currencies</button>
                </div>
            </div>
            <div className="d-flex justify-content-between border-bottom pb-1">
                <h4 className="fw-bold ">Currency</h4>
            </div>
            <div className="list-wrapper">
                {
                    props.selectedCurrencies.length === 1 ?
                        <h3 className="mt-4 text-center">No selected currencies</h3> :


                        <table>
                            <tbody className="tbody">
                                {
                                    props.selectedCurrencies.map((item, index) => {
                                        return (
                                            index !== 0 &&
                                            <tr key={index}>
                                                <td className="d-flex justify-content-between align-items-center w-100 px-2">
                                                    <span className="font-weight-bold">{item}</span>
                                                    <span className={`ms-auto currency-flag currency-flag-` + item.toLowerCase()}></span>
                                                </td>
                                                <td className="ms-2">
                                                    <button className="btn" onClick={() => props.deleteSelectedItem(index)}>
                                                        <img className="w-75" src="/assets/icon/trash-2.svg" alt="" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        selectedCurrencies: state.convert.selectedCurrencies,
        load: state.convert.load,
    }
}
export default connect(mapStateToProps, { deleteSelectedItem, updateState, addAllItems })(CurrencyList);