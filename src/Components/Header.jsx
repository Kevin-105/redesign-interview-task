import React, { useState } from 'react';
import { Tab, Tabs } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Header = props => {

    const [defaultValue, setDefaultValue] = useState('topstories');
    const navigate = useNavigate();

    const handleTabChange = (e, tab) => {
        navigate(`news/${tab}`)
        setDefaultValue(tab || 'topstories')
    }

    const TABS = [
        { value: "topstories", label: 'Top' },
        { value: "newstories", label: 'New' },
        { value: "beststories", label: 'Best' },
        { value: "askstories", label: 'Ask' },
        { value: "jobstories", label: 'Jobs' }
    ];
    return (
        <React.Fragment>
            <div className="d_flex c-between logo sticky ">
                <h1 className="d_flex m-0 w-100 cp-n"><span className="logo-border">Y</span> <span className="heading-title">Hacker News</span></h1>
                <span className="p-r-10 cp" onClick={() => navigate(`/login`)}>Login</span>
            </div>
            <div className="d_flex h-top">
                <Tabs value={defaultValue} onChange={handleTabChange}>
                    {TABS.map((tab) => (
                        <Tab key={tab.value} value={tab.value} label={tab.label} />
                    ))}
                </Tabs>
            </div>
        </React.Fragment>
    );
};

export default Header;