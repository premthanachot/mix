import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.css";
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData'
import WidgetLg from '../../components/widget/widgetLg';
import WidgetSm from '../../components/widget/widgetSm';

export default function Home() {
    return <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title='User Analytics' grid dataKey="Active User" />
        <div className='homeWidgets'>
            <WidgetLg/>
            <WidgetSm/>
        </div>
        </div>;
}
