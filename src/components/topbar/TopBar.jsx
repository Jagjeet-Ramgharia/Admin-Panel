import React from 'react';
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons'

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="topbar_left">
                    <span className="logo">Admin</span>
                </div>
                <div className="topbar_right">
                    <div className="topbar_icons">
                        <NotificationsNone/>
                        <span className="icon_badge">2</span>
                    </div>
                    <div className="topbar_icons">
                        <Language/>
                        <span className="icon_badge">2</span>
                    </div>
                    <div className="topbar_icons">
                        <Settings/>
                    </div>
                    <img src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt="" className="topbar_avatar"/>
                </div>
            </div>
        </div>
    )
}

export default TopBar
