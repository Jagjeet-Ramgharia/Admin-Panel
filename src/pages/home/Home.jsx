import React from 'react';
import Chart from '../../components/charts/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css'
import { Userdata } from '../../dummyData';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { useEffect, useMemo, useState } from "react";
import axios from "../../axios";

const Home = () => {
    const MONTHS = useMemo(()=>[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],[])
      const [userStats, setUserStats] = useState([]);
    
      useEffect(() => {
        const getStats = async () => {
          try {
            const res = await axios.get("/users/stats", {
              headers: {
                token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmZkYWU4ZGU3OWEwNTE0Y2JhYTlmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzQ1MjQ4NCwiZXhwIjoxNjI3ODg0NDg0fQ.J0sJzr-QsKscAo7-xk3vhkeB7_hpSogsf1sc0haGOSI",
              },
            });
            const statsList = res.data.sort(function(a,b){
                return a._id - b._id;
            })
            statsList.map((item) =>
              setUserStats((prev) => [
                ...prev,
                { name: MONTHS[item._id - 1], "New User": item.total },
              ])
            );
          } catch (err) {
            console.log(err);
          }
        };
        getStats();
      }, [MONTHS]);
    //   console.log(userStats)
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
            <div className="widgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
