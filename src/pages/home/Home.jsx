import React from 'react';
import Chart from '../../components/charts/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css'
import { Userdata } from '../../dummyData';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={Userdata} title="User Analytics" grid dataKey="Active Users"/>
            <div className="widgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
