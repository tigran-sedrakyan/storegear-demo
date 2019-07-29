import React from 'react';
import clsx from 'clsx';

import {Card as MuiCard} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import {makeStyles} from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import DoneIcon from '@material-ui/icons/Done';
import NavigateIcon from '@material-ui/icons/Navigation';
import {grey, green} from '@material-ui/core/colors';

import Avatar from '../../atoms/avatar';
import Button from '../../atoms/button';

import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    active: {
        borderRadius: 0,
    },
    actions: {
        float: 'right',
    },
    finished: {
        backgroundColor: 'transparent',
        color: grey[50],
        boxShadow: 'none',
    },
    title: {
        fontSize: '1rem',
    },
}));

export default function Card(props) {
    const {
        status,
        name,
        number,
        address1,
        address2,
        eta,
        timeRange,
        lat,
        lng,
        handleFinish,
        id,
        ...other
    } = props;
    const classes = useStyles();

    return (
        <MuiCard
            classes={{
                root: clsx(
                    classes.root,
                    status === 'finished'
                        ? classes.finished
                        : status === 'inprogress' && classes.active
                ),
            }}
            {...other}>
            <CardHeader
                classes={{
                    title: classes.title,
                    subheader: status === 'finished' && classes.finished,
                }}
                avatar={<Avatar status={status} number={number} />}
                title={
                    <div>
                        <span>{id}</span>
                        {status !== 'finished' && (
                            <span
                                className="time-container"
                                style={{color: green[400]}}>
                                {eta}
                            </span>
                        )}
                    </div>
                }
                subheader={
                    <>
                        <div>{address1}</div>
                        <div>
                            <span>{address2}</span>
                            {status !== 'finished' && (
                                <span className="time-container">
                                    {timeRange}
                                </span>
                            )}
                        </div>
                    </>
                }
            />
            {status === 'inprogress' && (
                <>
                    <Divider variant="inset" />
                    <CardActions classes={{root: classes.actions}}>
                        <Button
                            size="small"
                            target="_blank"
                            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving&dir_action=navigate`}>
                            <NavigateIcon />
                            Navigate
                        </Button>
                        <Button size="small" onClick={() => handleFinish(id)}>
                            <DoneIcon />
                            Finish
                        </Button>
                    </CardActions>
                </>
            )}
        </MuiCard>
    );
}
