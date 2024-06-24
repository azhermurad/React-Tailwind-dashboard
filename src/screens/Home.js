import React from 'react';
import QualifiedLeads from '../components/home/QualifiedLeads';
import HomeHeader from '../components/home/HomeHeader';
import TaskAndReports from '../components/home/TaskAndReports';
import LiveCampaigns from '../components/home/ LiveCampaigns';


function Home() {
    return (
        <>
            <HomeHeader />
            <QualifiedLeads />
            <TaskAndReports/>
            <LiveCampaigns/>
        </>
    );
}

export default Home;
