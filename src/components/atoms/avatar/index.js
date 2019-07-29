import React from 'react';
import clsx from 'clsx';

import {Avatar as MuiAvatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import DoneIcon from '@material-ui/icons/Done';
import {red, blue, grey} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    finished: {
        backgroundColor: blue[500],
    },
    inprogress: {
        backgroundColor: red['A400'],
    },
    pending: {
        backgroundColor: grey[100],
        color: grey[600],
    },
    // reusing same component as a map marker
    onMap: {
        fontSize: '0.95rem',
        height: '30px',
        width: '30px',
    },
    pendingOnMap: {
        backgroundColor: grey[900],
        color: grey[50],
    },
}));

export default function Avatar(props) {
    const {status, number, onMap} = props;
    const classes = useStyles();
    return (
        <MuiAvatar
            classes={{
                root:
                    onMap && status === 'pending'
                        ? clsx(classes.pendingOnMap, classes.onMap)
                        : clsx(classes[status], onMap && classes.onMap),
            }}>
            {status === 'finished' ? <DoneIcon /> : number}
        </MuiAvatar>
    );
}
