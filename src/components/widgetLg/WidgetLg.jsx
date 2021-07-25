import React from 'react';
import './widgetlg.css'

const WidgetLg = () => {
    const Button = ({type}) =>{
        return <button className={"widgetlg_btn" + type}>{type}</button>
    };
    return (
        <div className="widget_lg">
            <h3 className="title">Latest Transactions</h3>
            <table className="widgetlg_table">
                <tr className="row">
                    <th className="th">Customers</th>
                    <th className="th">Date</th>
                    <th className="th">Amount</th>
                    <th className="th">Status</th>
                </tr>
                <tr className="row">
                    <td className="user">
                        <img className="t_img" src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt=""/>
                        <span className="name">Susan carol</span>
                    </td>
                    <td className="date">23/7/2021</td>
                    <td className="amount">$100</td>
                    <td><Button type="Approved"/></td>
                </tr>
                <tr className="row">
                    <td className="user">
                        <img className="t_img" src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt=""/>
                        <span className="name">Susan carol</span>
                    </td>
                    <td className="date">23/7/2021</td>
                    <td className="amount">$100</td>
                    <td><Button type="Pending"/></td>
                </tr>
                <tr className="row">
                    <td className="user">
                        <img className="t_img" src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt=""/>
                        <span className="name">Susan carol</span>
                    </td>
                    <td className="date">23/7/2021</td>
                    <td className="amount">$100</td>
                    <td><Button type="Declined"/></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
