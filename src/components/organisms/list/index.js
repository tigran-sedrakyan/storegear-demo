import React from 'react';
import clsx from 'clsx';

import {List as MuiList} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import {blueGrey} from '@material-ui/core/colors';

import ListItemContent from '../../molecules/list-item';

const useStyles = makeStyles({
    container: {
        backgroundColor: blueGrey[600],
    },
    item: {
        margin: 0,
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    },
    activeItem: {
        paddingLeft: 0,
        paddingRight: 0,
    },
});

export default function List(props) {
    const classes = useStyles();
    const {stops, handleFinish} = props;

    return (
        <div className={classes.container}>
            <MuiList dense>
                {stops.map((stop, index) => (
                    <ListItem
                        classes={{
                            root: clsx(
                                classes.item,
                                stop.status === 'inprogress' &&
                                    classes.activeItem
                            ),
                        }}
                        key={stop.id.toString()}
                        alignItems="flex-start">
                        <ListItemContent
                            handleFinish={handleFinish}
                            number={index + 1}
                            {...stop}
                        />
                    </ListItem>
                ))}
            </MuiList>
        </div>
    );
}
