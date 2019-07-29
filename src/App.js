import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import theme from './theme';

import Tabs from './components/atoms/tabs';
import List from './components/organisms/list';
import Map from './components/molecules/map';

import stops from './stops';

export default function App() {
    const [data, setData] = React.useState(stops.entries);

    // handles finish of a stop
    function handleFinish(id) {
        const newData = [...data];
        const index = newData.findIndex((el) => el.id === id);
        newData[index] = {...newData[index], status: 'finished'};
        if (index < newData.length - 1) {
            newData[index + 1] = {...newData[index + 1], status: 'inprogress'};
        }
        setData(newData);
    }

    return (
        <ThemeProvider theme={theme}>
            <Tabs tabs={[`Stops (${data.length})`, 'Map']}>
                {(activeTab) =>
                    !activeTab ? (
                        <List stops={data} handleFinish={handleFinish} />
                    ) : (
                        <Map stops={data} handleFinish={handleFinish} />
                    )
                }
            </Tabs>
        </ThemeProvider>
    );
}
