import React from 'react';

import {Tabs as MuiTabs} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Tab from '@material-ui/core/Tab';
import {grey} from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        backgroundColor: grey[900],
        position: 'sticky',
        top: 0,
        zIndex: 100,
    },
    tab: {
        color: grey[50],
        fontWeight: 600,
    },
});

export default function Tabs(props) {
    const classes = useStyles(props);
    const [tab, setTab] = React.useState(0);
    const {tabs} = props;

    function handleChange(e, tab) {
        setTab(tab);
    }

    return (
        <div>
            <MuiTabs
                value={tab}
                indicatorColor="primary"
                variant="fullWidth"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                classes={{root: classes.root}}>
                {tabs.map((tabName) => (
                    <Tab
                        key={tabName}
                        classes={{root: classes.tab}}
                        label={tabName}
                    />
                ))}
            </MuiTabs>
            {props.children(tab)}
        </div>
    );
}
