import React from 'react';
import './widgetsm.css';
import {Visibility} from '@material-ui/icons'

const WidgetSm = () => {
    return (
        <div className="widget_sm">
            <span className="title">New Members</span>
            <ul className="widget_list">
                <li className="widget_list_item">
                    <img className="widget_sm_img" src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt=""/>
                    <div className="widgetsm_user">
                        <span className="widget_username">Anna</span>
                        <span className="widget_user_job">Software Engineer</span>
                    </div>
                    <button className="widgetsm_btn">
                        <Visibility className="widgetsm_icons"/>
                        Display
                    </button>
                </li>
                <li className="widget_list_item">
                    <img className="widget_sm_img" src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt=""/>
                    <div className="widgetsm_user">
                        <span className="widget_username">Anna</span>
                        <span className="widget_user_job">Software Engineer</span>
                    </div>
                    <button className="widgetsm_btn">
                        <Visibility className="widgetsm_icons"/>
                        Display
                    </button>
                </li>
                <li className="widget_list_item">
                    <img className="widget_sm_img" src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt=""/>
                    <div className="widgetsm_user">
                        <span className="widget_username">Anna</span>
                        <span className="widget_user_job">Software Engineer</span>
                    </div>
                    <button className="widgetsm_btn">
                        <Visibility className="widgetsm_icons"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
