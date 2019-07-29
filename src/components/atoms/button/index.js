import React from 'react';

import {Button as MuiButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {blue} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        color: blue[600],
    },
    label: {
        flexDirection: 'column',
        fontSize: '0.75rem',
    },
}));

export default function Button(props) {
    const classes = useStyles();

    return (
        <MuiButton classes={classes} {...props}>
            {props.children}
        </MuiButton>
    );
}
