import React, { useState } from 'react';
import {Divider, InputAdornment, Tab, Tabs, TextField } from "@mui/material"

const Header = props => {

    const [defaultValue, setDefaultValue] = useState('top');

    const handleTabChange = (e, tab) => {
        setDefaultValue(tab)
    }

    const TABS = [
        {value: 'top', label: 'Top'}, 
        {value: 'news', label: 'News'}, 
        {value: 'best', label: 'Best'}, 
        {value: 'ask', label: 'Ask'},
        {value: 'jobs', label: 'Jobs'}]
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