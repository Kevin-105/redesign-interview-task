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
            <Tabs value={defaultValue} onChange={handleTabChange}>
                {TABS.map((tab) => (
                    <Tab key={tab.value} value={tab.value} label={tab.label} />
                ))}
            </Tabs>
        </React.Fragment>
    );
};

export default Header;